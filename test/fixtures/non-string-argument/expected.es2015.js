'use strict';

require('' + String({ 'answer': 42 }));
require('' + String(['foo', 'bar']));
require('' + 42);
require('' + String(void 0));
require('' + String(undefined));
require('' + String(null));
require('' + String(true));
require('' + String(Symbol()));
