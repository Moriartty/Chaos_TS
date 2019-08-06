import {_Object} from '../interface';
/**
 * 主要用于reducer里面
 * 对于react，reducer必须返回一个新的state，react才会重新渲染
 * 原来情况：即使改变一个state里的属性，也要调用objectAssign进行深复制，对于那些没有改变过的属性没必要复制
 * 改进情况：只为改变的属性创造一个新的对象，然后把那些没改变的属性直接“挂载”到新对象中，属于有选择地浅复制
 */

export function objectAppend (obj0:_Object, obj:_Object) {
    for (var k in obj) {
        if (!obj0.hasOwnProperty(k)) {
            obj0[k] = obj[k];
        }
    }
    return obj0;
}
/**
 * 统一处理（后端）返回的文件路径，如相对路径、全路径等
 * @param url
 * @returns {*}
 */
// export function fixUrl (url) {
//     if (url) {
//         if (url.indexOf('http') !== 0 && url.indexOf('blob:') !== 0 && url.indexOf('data:') !== 0) {
//             // 头部补上“/”
//             if (url[0] != '/') {
//                 url = '/' + url;
//             }
//             url = api.ftpBaseUrl + url;
//         }
//     }
//     return url;
// }

//拼接查询字符串
export function getUriParams(data:any){
    var params = [];
    for(let i in data){
        params.push(i+'='+encodeURIComponent(data[i]));
    }
    return params.join('&');
}

/** 
 * 递归解决在树中查找问题
*/
export function hasChildInTree(treeData:_Object,nodeList:Array<_Object>,curNode?:any):any{
    if(isEmpty(treeData))
        return false;
    else if(nodeList.indexOf(treeData.id)>-1)
        return true;
    else{
        if(isEmpty(treeData.list))
            return false;
        else{
            const reducer = (value:any, currentValue:any) => {
                return value||hasChildInTree(currentValue,nodeList);
            };
            return treeData.list.reduce(reducer,false);
        }
    }
    
}

/**
 * 求两个数组的差集
 * @param arr1 
 * @param arr2 
 */
export function getIntersection(arr1:Array<any>,arr2:Array<any>){
    return arr1.filter(item=>arr2.indexOf(item)>-1);
}
/**
 * 求新数组的新增项
 * @param newArr 
 * @param intersection 
 */
export function getAddition(newArr:Array<any>,intersection:Array<any>){
    return newArr.filter(item=>!intersection.some(i=>item===i));
}
/**
 * 求新数组的删除项
 * @param preArr 
 * @param intersection 
 */
export function getReduction(preArr:Array<any>,intersection:Array<any>){
    return preArr.filter(item=>!intersection.some(i=>item===i));
}

/**
 * 判断传入数据是否为空
 * @param val
 * @returns {*}
 */
export function isEmpty(val:any):boolean{
    switch(Object.prototype.toString.call(val)){
        case '[object Array]':
            return !(val&&val.length);
        case '[object Object]':
            return !(val&&JSON.stringify(val)!=='{}');
        case '[object Null]':
            return true;
        case '[object Undefined]':
            return true;
        case '[object Boolean]':
            return val;
        default:
            return false;
    }
}


const countryMap:_Object = {
    IN:'India',
    BR:'Brazil',
    ID:'Indonesia',
    MX:'Mexico',
    BD:'Bangladesh',
    RU:'Russia',
    PK:'Pakistan',
    US:'United States',
    UA:'Ukraine',
    TR:'Turkey'
}
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","British_Indian_Ocean_Territory","British_Virgin_Islands","Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Cayman_Islands","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Congo-Brazzaville","Congo-Kinshasa","Cook_Islands","Coral_Sea_Islands_Territory","Costa_Rica","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Ethiopia","Falkland_Islands","Faroe_Islands","Federated_States_of_Micronesia","Fiji","Finland","France","Gabon","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Guatemala","Guernsey","Guinea-Bissau","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iraq","Ireland","Islamic_Republic_of_Iran","Isle_of_Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Juguang","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxemburg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nepal","New_Zealand","Nicaragua","Niger","Nigeria","Niue","North_Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Pitcairn_Islands","Poland","Portugal","Qatar","Republic_of_Kosovo","Romania","Russia","Russian_Federation","Rwanda","Sahrawi_Arab_Democratic_Republic","Saint_Helena_Ascension_and_Tristan_da_Cunha","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","South_Georgia_and_the_South_Sandwich_Islands","South_Korea","South_Sudan","Spain","Sri_Lanka","Sudan","Suriname","Swaziland","Sweden","Syria","Tajikistan","Tanzania","Thailand","The_Bahamas","The_Gambia","The_Netherlands","Togo","Tokelau","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Turks_and_Caicos_Islands","Tuvalu","Uganda","Ukraine","United States","United_Arab_Emirates","United_Kingdom","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","world","Yemen","Zambia","Zimbabwe"]

export function getCountryName(countryNo:string){
    return countryNo&&countryMap[countryNo];
}
export function getAllCountries(){
    return countries.map(o=>o.replace(/_/g,' '))
}
