const arr = [3,'ff',4,4,,2,2,'ff', 2,2]


const newArr = arr.reduce((acc, currentVal) => {
      if(!acc.includes(currentVal)) {
          acc.push(currentVal)
      }
      return acc;
}, [])

console.log(newArr)