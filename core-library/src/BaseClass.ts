export type Constructor<T> = new (...args: any[]) => T;

export class MyBaseClass<P> {
	baseProperty: string;

	constructor(value: P) {}
}
