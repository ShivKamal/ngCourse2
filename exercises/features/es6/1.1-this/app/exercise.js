'use strict';

class MyDiv {
  constructor(selector) {
    this.element = document.getElementById(selector);
  }

  write(text) {
    this.element.innerHTML = text;
  }
}

var example = new MyDiv('example');
var write = example.write;

write('This is Fixed');
