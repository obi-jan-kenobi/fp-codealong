// add :: (Num a) => a -> a -> a
var add = (x, y) => x + y

// multiply :: (Num a) => a -> a -> a
var multiply = (x, y) => x * y

// Associative
add(add(x, y), z) === add(x, add(y, z));

// commutative
add(x, y) === add(y, x);

// identity
add(x, 0) === x;

// distributive
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));
