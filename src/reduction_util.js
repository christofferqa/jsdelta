/**
 * Reduces an <array> by mutating it to find a locally smallest version
 * that the <test> predicate holds for.
 *
 * If <nonempty> is true, the empty array result is avoided.
 */
function reduce_array(array, test, nonempty) {
  if (!nonempty && array.length === 1) {
    // special case: if there is only one element, try removing it
    var elt = array[0];
    array.length = 0;
    if (!test())
      // didn't work, need to put it back
      array[0] = elt;
  } else {
    // try removing as many chunks of size sz from array as possible
    // once we're done, switch to size sz/2; if size drops to zero,
    // recursively invoke minimise on the individual elements
    // of the array
    for (var sz = array.length >>> 1; sz > 0; sz >>>= 1) {
      var nchunks = Math.floor(array.length / sz);
      for (var i = nchunks - 1; i >= 0; --i) {
        // try removing chunk i
        var lo = i * sz,
            hi = i === nchunks - 1 ? array.length : (i + 1) * sz;

        // avoid creating empty array if nonempty is set
        if (!nonempty || lo > 0 || hi < array.length) {
          var removed = array.splice(lo, hi - lo);
          if (!test()) {
            // didn't work, need to put it back
            Array.prototype.splice.apply(array,
                                         [lo, 0].concat(removed));
          }
        }
      }
    }
  }
}

exports.reduce_array = reduce_array;
