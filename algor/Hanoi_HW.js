// // Рекурсивный метод

let c=0;


const hanoi = (q, from, to, buf) =>{
  c += 1
if(q===0)return
hanoi(q-1, from, buf, to)
console.log(`${q}: from ${from} to ${to}`);
hanoi(q-1, buf, to, from)
}

hanoi(8,  1,3,2)


// Оценка сложности 
// for (let i = 0; i < 20; i++) {
//   hanoi(i,1,2,3)

//   console.log(`n:${i} c ${c}`);
//   c=0
// }