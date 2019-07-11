import API,{apiTest} from 'config/api';
import { message } from 'antd';
import * as React from 'react';
import {getCookie, setCookie, setCookieWithScope} from "./cookies";
import {_Object} from 'customInterface';
import { isEmpty } from '.';

const ReactDOM = require('react-dom');
const Err50x = (cb:Function) => { require.ensure([], require => { cb(require('pages/Error/50x')); }); };

const Fetch:_Object = {};


const normalHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});
const formHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
});


var newFetch = function(url:string, fetchOpts?:Object,opts:any={}){//定义新的fetch方法，封装原有的fetch方法
    let _opts:_Object = {timeout:1000*60,...opts}
    var fetchPromise = fetch(url, fetchOpts);
    var timeoutPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new Error("fetch timeout"))
        }, _opts.timeout)
    });
    return Promise.race([fetchPromise, timeoutPromise])
};

function getUriParams(data:any){
    var params = [];
    for(let i in data){
        params.push(i+'='+data[i]);
    }
    return encodeURIComponent(params.join('&'));
}
/**
 * 处理请求返回异常
 * @param err 
 */
function handleException(err:Object){
    console.error(` Message = ${err}`);
    return Promise.reject({error: {message: ` Message = ${err}`}});
}
/**
 * 创建http请求头
 * @param opts 
 */
function createHttpHeader(opts:_Object){
    return opts.withCookie?{
        ...normalHeaders,
        credentials: 'include',
        Authorization: 'Bearer '+getCookie(opts.tokenType?opts.tokenType:'access_token')
    }:normalHeaders
}
/**
 * 刷新token
 */
function refreshToken(url:string,params:any,opts:any){
    if(isEmpty('refresh_token'))
        location.href = 'login.html';
    else{
        fetch(API.baseUrl+'/refreshToken',{
            method: 'GET',
            headers: createHttpHeader({withCookie:true,tokenType:'refresh_token'})
        }).then(response=>{
            if(response.ok||response.status==301||response.status==302)
                response.json().then((resp:any)=>{
                    if(resp.code==0){
                        setCookieWithScope('access_token',resp.data.accessToken);
                        setCookieWithScope('refresh_token',resp.data.refreshToken);
                        newFetch
                    }else
                        location.href = 'login.html';
                });
            else
                location.href = 'login.html';
        }).catch(error=>{
            console.log('error',error);
        })
    }

}


Fetch.get = (url:string,params?:Object,opts:any={}) => {
    // 虚拟接口服务
    require('../mock')(url);
    //非模拟接口并且有参数才拼接参数
    if(apiTest.indexOf(url)>-1&&params&&JSON.stringify(params)!=='{}')
        url = url+'?'+getUriParams(params);
   
    return newFetch((opts.baseUrl?opts.baseUrl:API.baseUrl)+url, {
        method: 'GET',
        headers: createHttpHeader(opts),
    },opts).then(response => {
        return handleResponse(url,params,opts, response);
    }).catch(handleException)
}

Fetch.post = (url:string, params:Object={},opts:any={}) => {
    //虚拟服务接口
    require('../mock')(url);

    return newFetch((opts.baseUrl?opts.baseUrl:API.baseUrl)+url, {
        method: 'POST',
        headers: createHttpHeader(opts),
        body: JSON.stringify(params),
    },opts).then(response => {
        return handleResponse(url,params,opts, response);
    }).catch(handleException)
}

Fetch.postFile = (url:string, params:Object,opts:any={}) => {
    return newFetch(API.baseUrl+url, {
        method: 'POST',
        // headers: new Headers({
        //     'Content-Type': 'multipart/form-data'
        // }),
        body: params,
        credentials: 'include'
    },opts).then(response => {
        return handleResponse(url,params,opts, response);
    }).catch(handleException)
}

Fetch.put = (url:string, params:Object,opts:any={}) => {
    return newFetch(API.baseUrl+url, {
        method: 'PUT',
        // headers: normalHeaders,
        body: params,
    },opts).then(response => {
        return handleResponse(url,params,opts, response);
    }).catch(handleException)
}

function handleResponse (url:string,params:any,opts:any, response:any) {
    if(response.ok||response.status==301||response.status==302)
        return new Promise((resolve,reject)=>{
            response.json().then((resp:any)=>{
                resp.code==0? resolve(resp.data): reject(resp.msg);
            });
        });
    else if(response.status == 403){
        refreshToken(url,params,opts);
    }
    else if(~[502, 503, 504].indexOf(response.status)){
        Err50x((component:any) => {
            ReactDOM.render(React.createElement(component), document.getElementById('container'));
        });
    }
    else {
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        message.error('【' + status + '】' + response.statusText);
        return {error: {message: 'Request failed due to server error '}};
    }
}

export default Fetch;
