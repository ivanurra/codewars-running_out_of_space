function spacey(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if(newArr.length < 1) {
        newArr.push(array[i])
      } else {
        newArr.push(newArr[i-1] + array[i])
      }
    }
    return newArr;
  }