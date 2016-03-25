'use strict';

export function readonly<T extends Function>(classDeclaration: T): T {
  let newConstructor = <any> function(...args: any[]) {
    classDeclaration.apply(this, args);
    Object.freeze(this);
  };

  newConstructor.prototype = Object.create(classDeclaration.prototype);
  newConstructor.prototype.constructor = classDeclaration;

  return <T> newConstructor;
}
