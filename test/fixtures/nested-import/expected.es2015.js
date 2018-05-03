'use strict';

function getModule(path) {
  return require('test-module');
}

getModule().then(function () {});
