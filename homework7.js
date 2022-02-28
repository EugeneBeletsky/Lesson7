//задача №1      поменять массив в обратном порядке
function reverseArray(arr1){
  return console.log(arr1.reverse());
}
reverseArray([1,2,3,4,5,6]);


//задача №2     найти максимальное число в массиве
function findingMax(arr2){
    return console.log(Math.max(...arr2));      //обязательно вставить "..." в передаче параметра для метода
}
findingMax([1,2,3,4,100,10,9,8,7]);


// //задача №3     записать в массив ряд фибаначи начиная с N члена с длинной массива M
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   alert( fib(77) ); // 5527939700884757


//   function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   // fib(77); // вычисляется очень долго




//   function createArray(array, n, m) {
//     nextN = n;
//     for (i = 0; i < m; i++) {
//         array.push(nextN);
//         nextN = fib(n + 1);
//         n++;
//       }
//   }

//   function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }





//   let n = fib(6);
// let m = 4;
// let array = [];
// createArray(array, n, m);
// console.log(array);

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function createArray(array, n, m) {
//     nextN = n;
//     for (i = 0; i < m; i++) {
//         array.push(nextN);
//         nextN = fib(n + 1);
//         n++;
//       }
//   }




  
//задача №4     даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают
// по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
function sravnenie(numberOne, numberTwo){
    let qual1=0;
    let qual2=0;
    for(let i=0; i<numberOne.length; i++){
      if(numberOne[i]===numberTwo[i]){
        qual1++;
      }
      for(let j=0; j<numberTwo.length; j++){
        if(numberOne[i]===numberTwo[j]){
          qual2++;
        }
      }
    }
console.log(qual1,qual2);
}
sravnenie("12345", "34567");


//задача №5     сортировка массива по возрастанию/убыванию
function sortArray(arr5){
    return console.log(arr5.sort((a,b)=>a-b));          //по возрастанию a-b
    //return console.log(arr5.sort((a,b)=>b-a));        //по убыванию b-a
}
sortArray([7,11,2,34,43,66,78,15,166,54,]);


//задача №6     удалить из массива все повторяющиеся элементы
function deletePovtor(arr6){
let arr61=arr6.filter((item,index)=>{
  return arr6.indexOf(item)===index
});
console.log(arr61);
}
deletePovtor([1,6,1,2,2,2,3,4,5,5,5,3,3,5,6]);
