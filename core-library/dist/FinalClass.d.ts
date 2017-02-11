import { MyBaseClass } from './BaseClass';
import { MyMixin } from './MixinClass';
export declare class MyExtendedClass extends MyBaseClass<string> & MyMixin {
    extendedClassProperty: number;
}
