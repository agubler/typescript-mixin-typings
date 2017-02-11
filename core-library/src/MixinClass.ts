import { Constructor, MyBaseClass } from './BaseClass';

export interface MyMixin {
	mixinProperty: string;
}

export function MyMixin<T extends Constructor<MyBaseClass<any>>>(Base: T): T & Constructor<MyMixin> {
	return class extends Base {
		mixinProperty: string;
	};
}
