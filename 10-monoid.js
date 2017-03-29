// semigroup with special element - neutral identity
// with neutral identiy safe to call unlike semigroup

const Sum = x => ({
  x,
  concat: ({x: y}) => Sum(x + y),
  inspect: () => `Sum(${x})`,
  empty: () => Sum(0) // this makes Sum a monoid
})



const All = x => ({
  x,
  concat: ({x: y}) => All(x && y),
  inspect: () => `All(${x})`,
  empty: () => All(true)
})

// cant become a monoid without special sauce
const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`
})

// same as Sum - start at 0 neutral identy
const sum = xs => xs.reduce((acc, x) => acc + x, 0)

// same as All - start at true neutral identity
const all = xs => xs.reduce((acc, x) => acc && x, true)

// will blow up if xs is empty
const first = xs => xs.reduce((acc, x) => acc)