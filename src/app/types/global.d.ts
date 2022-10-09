declare module '*.scss' {
    interface IClassNames {
        [classname: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}