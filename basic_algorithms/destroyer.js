function destroyer(arr) {
  var array = arguments[0];
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var toBeDestroyed = false;
    for (var j = 1; j < arguments.length; j++) {
      if (array[i] == arguments[j]) {
          toBeDestroyed = true;
          }
    }
    if (toBeDestroyed === false) {
        newArray.push(array[i]);
      }
  }
  return newArray;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5);