const host = 'http://localhost:8081/chaos_fj';

function auth_accessToken(success,failed){
    const url = host+"/isExpiration";
    const token = getCookie('access_token');
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':token? 'Bearer '+token : null,
            credentials: 'include'
        }
    }).then(response=>{
        if(response.ok||response.status==301||response.status==302)
            response.json().then(resp=>{
                if(resp.code==0&&resp.data===false)
                    success();
                else
                    exchange_accessToken(success,failed);
            })
        else
            exchange_accessToken(success,failed);
    }).catch(()=>{
        exchange_accessToken(success,failed);
    })
}
function exchange_accessToken(success,failed){
    const token = getCookie('refresh_token');
    if(token==null)
        failed();
    else{
        fetch(host+'/refreshToken',{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':token? 'Bearer '+token : null,
                credentials: 'include'
            }
        }).then(response=>{
            if(response.ok||response.status==301||response.status==302)
                response.json().then((resp)=>{
                    if(resp.code==0){
                        //正常获取数据后记录cookie
                        setCookie('access_token',resp.data);
                        success();
                    }else
                        failed()
                });
            else
                failed()
        }).catch(error=>{
            console.log('error',error);
            failed();
        })
    }
}
const defaultDuration = 1000*60*60*24;//默认一天
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
function setCookie(c_name, value, expireTime=defaultDuration){
    var exdate=new Date();
    exdate.setTime(exdate.getTime() + expireTime);
    // document.cookie=c_name+ "=" + escape(value) + ((expireTime==null) ? "" : ";expires="+exdate.toGMTString());
    document.cookie=c_name+ "=" + escape(value) + (";expires="+exdate.toUTCString());
}