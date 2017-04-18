function howManySmaller(arr,n){
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].toFixed(2) < n) count++;
  }
  return count;
}

module.exports = howManySmaller;
