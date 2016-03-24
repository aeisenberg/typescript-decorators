'use strict';

export function readonly<T extends Function>(target: T): T {
  let newConstructor = <any> function(...args: any[]) {
    target.apply(this, args);
    Object.freeze(this);
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  return <T> newConstructor;
}
