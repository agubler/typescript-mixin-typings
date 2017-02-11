import { MyExtendedClass } from 'core-library/FinalClass';
import { MyMixin } from 'core-library/MixinClass';

// constructor lost
const myExtendedClass = new MyExtendedClass('string');

// MyExtendedClass no longer type MyBaseClass
const AnotherMixedClass = MyMixin(MyExtendedClass);
