const Container = x => ({
  map: f => Container(f(x)),
  fold: f => f(x),
  inspect: () => `Container(${x})`
})

const Maybe = x => ({
  map: f => Maybe(nullCheck(x) ? null : f(x)),
  fold: f => (nullCheck(x) ? null : f(x)),
  inspect: () => `Maybe(${x})`
})

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x)
})

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x)
})

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const nullCheck = x => x === null || x === undefined

const upperAndReverse = str =>
  Container(str)
  .map(s => s.trim())
  .map(s => s.toUpperCase())
  .fold(s => s.split('').reverse().join(''))

const head = arr => Maybe(arr[0])

console.log(upperAndReverse('hello world'))

console.log(head([1, 2, 3]).fold(c => c))
console.log(head([]).map(c => c * 2).fold(c => c))