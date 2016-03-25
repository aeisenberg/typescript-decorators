/// <reference path="../typings/nodeunit/nodeunit.d.ts"/>
/// <reference path="../typings/node/node.d.ts"/>

'use strict';

// include this line to fix stack traces
import 'source-map-support/register';

import {readonly} from '../src/readonly';


@readonly
class Person {
  private name: string;
  private admin: boolean;
  constructor(name: string, admin: boolean) {
    this.name = name;
    this.admin = admin;
  }
}

module.exports = {
  setUp(cb: nodeunit.ICallbackFunction) {
    this.person = new Person('Andrew', true);
    cb();
  },

  testReadonly(test: nodeunit.Test) {
    test.throws(() => this.person.name = 'hucairz');
    test.done();
  }
};
