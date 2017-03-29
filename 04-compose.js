const compose = (f, g) => x => f(g(x))

const f = console.log

const g = x => x * x

const pow_log = compose(f, g)

pow_log(4)

const reverse = x => x.reduce((prev, curr) => [curr].concat(prev), [])

const head = x => x[0]

const last = compose(head, reverse)

console.log(last([1,2,3]))

//const associative = compose(f, compose(g, h)) == compose(compose(f, g), h)
//console.log(associative)

const toUpper = x => x.toUpperCase()

const exclaim = x => `${x}!`

const lastUpper = compose(toUpper, compose(head, reverse))

console.log(lastUpper(['hello', 'world']))
