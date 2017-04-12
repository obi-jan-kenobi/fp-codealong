const Container = function (x) {
  this.__value = x
}

Container.of = function (x) {
  return new Container(x)
}

Container.prototype.map = function (fn) {
  return Container.of(fn(this.__value))
}

const Maybe = function (x) {
  this.__value = xg
}

Maybe.of = function (x) {
  return new Maybe(x)
}

Maybe.prototype.isNothing = function () {
  return (this.__value == null || this.__value == undefined)
}

Maybe.prototype.map = function (fn) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.__value))
}

const map = (f, functor) => functor.map(f)

// x is fallback-value in case m.isNothing
const maybe = (x, fn, m) => m.isNothing() ? x : fn(m.__value)

// concat :: ((a -> b), (a -> b)) -> c -> d
const compose = (f, g) => x => f(g(x))

module.exports = {
  Container,
  Maybe,
  map,
  maybe,
  compose
}
