const compose = (...fns) => result => {
  const list = fns.slice()
  while (list.length > 0) {
    result = list.pop()(result)
  }
  return result
}

const Maybe = x => ({
  map: f => Maybe(nullCheck(x) ? null : f(x)),
  fold: f => (nullCheck(x) ? null : f(x)),
  inspect: () => `Maybe(${x})`
})

const pluck = x => y => y[x]

module.exports = {
  compose,
  pluck
}

