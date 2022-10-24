  function evenNums(arr, num) {
    return arr.filter(x => x % 2 === 0).slice(-num)
  }

//   const evenNums = (arr, num) => {
//     let evens = [];
//     for (let i = arr.length -1; i >= 0; i--) {
//       if (arr[i] % 2 === 0) {
//         evens.unshift(arr[i])
//         if (evens.length === num) {
//           return evens;
//         }
//       }
//     }
//     throw "not possible";
//   }

  console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));