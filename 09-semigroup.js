// semigroups have a concat method
// are associative - doesnt matter how they are grouped

const Sum = x => ({
  x,
  concat: ({x: y}) => Sum(x + y),
  inspect: () => `Sum(${x})`
})

const All = x => ({
  x,
  concat: ({x: y}) => All(x && y),
  inspect: () => `All(${x})`
})

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`
})

console.log(Sum(1).concat(Sum(2)))
console.log(All(true).concat(All(true)).concat(All(false)))