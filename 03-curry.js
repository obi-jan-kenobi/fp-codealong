var curry = require('lodash/curry')

var match = curry((what, str) => str.match(what))

var replace = curry((what, replacement, str) => str.replace(what, replacement))

var filter = curry((f, ary) => ary.filter(f))

var map = curry((f, ary) => ary.map(f))
