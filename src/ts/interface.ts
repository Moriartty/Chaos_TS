export interface _Object {
    [key:string]:any
}

export interface RootProps {
    locale:string,
    store:any,
    loadLang?:Function,
    init?:Function,
    langs?:_Object
}