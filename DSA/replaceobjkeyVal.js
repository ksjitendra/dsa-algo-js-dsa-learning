function swapKeys(obj) {
    let newObj = {};
    for (item in obj) {
      if (obj[item] != undefined) {
        newObj[obj[item]] = item;
      }
    }
  
    return newObj;
  }
  
  console.log(swapKeys({ a: 2, b: 4, c: 5, d: "jesse" }));