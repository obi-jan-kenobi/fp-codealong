function conjoin (flock_x, flock_y) {
  return flock_x + flock_y
}

function breed (flock_x, flock_y) {
  return flock_x * flock_y
}

flock_a = 4
flock_b = 2
flock_c = 0

console.log(conjoin(
  breed(flock_b, conjoin(flock_a, flock_c)), breed(flock_a, flock_b)
))
