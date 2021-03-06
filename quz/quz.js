/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
  var temp = A;
 	while (temp.tail) {
 		temp = temp.tail;
 	}
 	temp.tail = B;
 	return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var temp = L;
  var i = 0;
  var end = start + len;
  var list = []
  while (i < end) {
    if (i >= start) {
      list.push(temp.head)
    }
    temp = temp.tail
    i++
  }
  return List.list(list)
}
