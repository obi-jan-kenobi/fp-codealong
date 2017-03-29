var add = function(x, y) { return x + y; }
var multiply = function(x, y) { return x * y; }

var flock_a = 4
var flock_b = 2
var flock_c = 0

var result = add(
  multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b)
)


add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b))

// associative
add(add(x, y), z) === add(x, add(y, z));

// commutative
add(x, y) === add(y, x);

// identity
add(x, 0) === x;

// distributive
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z))

// Apply the identity property to remove the extra add
// (add(flock_a, flock_c) == flock_a)
// (4 + 0) * 2 + 4 * 2 = 4 * 2 + 4 * 2
add(multiply(flock_b, flock_a), multiply(flock_a, flock_b))

// Apply distributive property to achieve our result
// 4 * 2 + 4 * 2 = 2 * (4 + 4)
multiply(flock_b, add(flock_a, flock_a))
