
/**
 * 原生对象的扩展方法
 */

interface Array<T> {
    include(...args:any):boolean,
    joinItem(item:any):Array<T>,
    findAll(target:any,key:any):Array<T>
}
interface Date{
    format(s:string):string
}
interface Number {
    formatThousands():string
}

/**
 * 兼容数组find方法
 */
if (typeof Array.prototype.find !== 'function') {
    Array.prototype.find = function (callback:Function) {
        let item;
        for (let i = 0; i < this.length; ++i) {
            if (callback(this[i], i, this)) {
                item = this[i];
                break;
            }
        }
        return item;
    };
}
/**
 * 兼容数组findIndex方法
 */
if (typeof Array.prototype.findIndex !== 'function') {
    Array.prototype.findIndex = function (callback) {
        let index = -1;
        for (let i = 0; i < this.length; ++i) {
            if (callback(this[i], i, this)) {
                index = i;
                break;
            }
        }
        return index;
    };
}
// 注意原生数组的标准是没有此方法，注意与Array.includes的区别
Array.prototype.include = function () {
    if (arguments.length === 1) {
        return this.indexOf(arguments[0]) >= 0;
    } else {
        for (let i = 0; i < arguments.length; i++) {
            if (~this.indexOf(arguments[i])) {
                return true;
            }
        }
        return false;
    }
};
Array.prototype.joinItem = function (separatorItem) {
    if (this.length > 1) {
        if (typeof separatorItem === 'function') {
            for (let i = this.length - 1; i > 0; i--) {
                this.splice(i, 0, separatorItem(i)); // 有时需要利用索引
            }
        } else {
            for (let i = this.length - 1; i > 0; i--) {
                this.splice(i, 0, separatorItem);
            }
        }
    }
    return this;
};
Array.prototype.findAll = function(target,key){
    let arr:Array<any> = [];
    this.forEach((o:any)=>{
        const curValue = key?o[key]:o;
        if(curValue==target)
            arr.push(o);
    })
    return arr;
}

/**
 * 日期格式化
 * @param pattern
 * @returns {*}
 */
Date.prototype.format = function (pattern) {
    var fix = function (t:number) {
        let _t;
        if (t < 10) { _t = '0' + t; }
        else {_t = t.toString()}
        return _t;
    };
    var x = this;
    var y = x.getFullYear();

    var M = fix(x.getMonth() + 1);

    var d = fix(x.getDate());

    var H = fix(x.getHours());

    var m = fix(x.getMinutes());

    var s = fix(x.getSeconds());
    return pattern.replace('yyyy', y).replace('MM', M).replace('dd', d).replace('HH', H).replace('mm', m).replace('ss', s);
};

/**
 * 数字千分位格式化
 * @returns {*}
 */
Number.prototype.formatThousands = function () {
    return String(this).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
