import { Constructor, MyBaseClass } from './BaseClass';
export interface MyMixin {
    mixinProperty: string;
}
export declare function MyMixin<T extends Constructor<MyBaseClass<any>>>(Base: T): T & Constructor<MyMixin>;
