import API,{apiTest} from 'config/api';
import { message } from 'antd';
import * as React from 'react';
import {getCookie, setCookie, setCookieWithScope} from "./cookies";
import {_Object} from 'customInterface';
import { isEmpty,getUriParams } from '.';
import CONST from 'config/const';

const ReactDOM = require('react-dom');
const Err50x = (cb:Function) => { require.ensure([], require => { cb(require('pages/Error/50x')); }); };
const Fetch:_Object = {};
const normalHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
const formHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

interface requestParams {
    method:string,
    url:string,
    params:_Object,
    opts:_Object
}

/**
 * 定义新的fetch方法，封装原有的fetch方法,增加超时处理
 * @param url 
 * @param fetchOpts 
 * @param opts 
 */
var newFetch = function(url:string, fetchOpts?:Object,opts:any={}){
    let _opts:_Object = {timeout:1000*60,...opts}
    var fetchPromise = fetch(url, fetchOpts);
    var timeoutPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new Error("fetch timeout"))
        }, _opts.timeout)
    });
    return Promise.race([fetchPromise, timeoutPromise])
};

/**
 * 创建http请求头
 * @param opts 
 */
function createHttpHeader(opts:_Object,method:string){
    let header = opts.withCookie?{
        ...normalHeaders,
        credentials: 'include',
        Authorization: 'Bearer '+getCookie(opts.tokenType?opts.tokenType:'access_token')
    }
    :
    {...normalHeaders};
    if(method.toLocaleUpperCase()==='GET')
        delete header["Content-Type"];
    return new Headers(header);
}
/**
 * 刷新token,并继续上次的请求
 */
function refreshToken(reqParams:requestParams){
    if(isEmpty(getCookie('refresh_token')))
        location.href = 'login.html';
    else{
        fetch(API.baseUrl+CONST.APP_REFRESHTOKEN,{
            method: 'GET',
            headers: createHttpHeader({withCookie:true,tokenType:'refresh_token'},'get')
        }).then(response=>{
            if(response.ok||response.status==301||response.status==302)
                response.json().then((resp:any)=>{
                    if(resp.code==0){
                        //正常获取数据后记录cookie
                        setCookie('access_token',resp.data);
                        // setCookieWithScope('refresh_token',resp.data.refreshToken);
                        //重新请求上次的接口
                        _Fetch(reqParams);
                    }else
                        location.href = 'login.html';
                });
            else
                location.href = 'login.html';
        }).catch(error=>{
            location.href = 'login.html';
        })
    }

}

function _Fetch(reqParams:requestParams){
    require('../mock')(reqParams.url);
    let {method,url,params,opts} = reqParams;
    let fetchOpts:_Object = {
        method:method,
        headers:createHttpHeader(opts,method)
    }
    switch(method.toLocaleUpperCase()){
        case 'GET':
            if(apiTest.indexOf(url)>-1&&!isEmpty(params))
                url = url+'?'+getUriParams(params);
            break;
        case 'POST':
            fetchOpts.body = JSON.stringify(params);
            break;
        default: break;
    }
    return newFetch((opts.baseUrl||API.baseUrl)+url , fetchOpts , opts ).then(response => {
        return handleResponse(reqParams, response);
    }).catch(handleException)
}

/**
 * 处理请求返回体
 * @param reqParams 
 * @param response 
 */
function handleResponse (reqParams:requestParams, response:any) {
    if(response.ok||response.status==301||response.status==302)
        return new Promise((resolve,reject)=>{
            response.json().then((resp:any)=>{
                resp.code==0? resolve(resp.data): reject(resp.msg);
            });
        });
    else if(response.status == 403){
        refreshToken(reqParams);
    }
    else if(~[502, 503, 504].indexOf(response.status)){
        Err50x((component:any) => {
            ReactDOM.render(React.createElement(component), document.getElementById('container'));
        });
    }
    else {
        console.error(`Request failed. Url = ${reqParams.url} . Message = ${response.statusText}`);
        return Promise.reject({error: {message: 'Request failed due to server error '}});
    }
}
/**
 * 处理请求返回异常
 * @param err 
 */
function handleException(err:Object){
    console.error(` ExceptionMessage = ${err}`);
    return Promise.reject({error: {message: ` ExceptionMessage = ${err}`}});
}

Fetch.get = function (url:string,params:Object,opts:any={}) {
    // console.log('get',arguments)
    // _Fetch({method:'get',...([].slice.call(arguments))});
    return _Fetch({method:'get',url,params,opts});
}

Fetch.post = function (url:string, params:Object={},opts:any={}) {
    // console.log('post',[].slice.call(arguments));
    // _Fetch({method:'post',...([].slice.call(arguments))});
    return _Fetch({method:'post',url,params,opts});
}

Fetch.postFile = function (url:string, params:Object,opts:any={}) {
    _Fetch({method:'post',url,params,opts});
    // return newFetch(API.baseUrl+url, {
    //     method: 'POST',
    //     // headers: new Headers({
    //     //     'Content-Type': 'multipart/form-data'
    //     // }),
    //     body: params,
    //     credentials: 'include'
    // },opts).then(response => {
    //     return handleResponse(url,params,opts, response);
    // }).catch(handleException)
}

Fetch.put = (url:string, params:Object,opts:any={}) => {
    // return newFetch(API.baseUrl+url, {
    //     method: 'PUT',
    //     // headers: normalHeaders,
    //     body: params,
    // },opts).then(response => {
    //     return handleResponse(url,params,opts, response);
    // }).catch(handleException)
}

export default Fetch;