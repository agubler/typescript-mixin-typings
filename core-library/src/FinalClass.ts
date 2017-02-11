import { MyBaseClass } from './BaseClass';
import { MyMixin } from './MixinClass';

export class MyExtendedClass extends MyMixin(MyBaseClass)<string> {
	extendedClassProperty: number;
}
