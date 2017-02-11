export declare type Constructor<T> = new (...args: any[]) => T;
export declare class MyBaseClass<P> {
    baseProperty: string;
    constructor(value: P);
}
