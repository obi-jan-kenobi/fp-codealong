const compose = (f, g) => x => f(g(x))

// __value is a function
// to wrap impure access in a function
// IO always returns a function
var IO = function(f) {
  this.__value = f;
};

IO.of = function(x) {
  return new IO(function() {
    return x;
  });
};

IO.prototype.map = function(f) {
  return new IO(compose(f, this.__value));
};

module.exports = { IO }
