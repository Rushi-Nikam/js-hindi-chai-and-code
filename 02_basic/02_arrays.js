// push modify existing array 
const marvel_heros = ['IronMan','Thor','spiderman','captain America'];
const dc_heros = ['flash','superman','batman','aquaman'];
console.log(marvel_heros);
console.log(dc_heros);
//  let allheros = marvel_heros.concat(dc_heros);
//  console.log(allheros);
 //spread ...
 let all_heros = [...marvel_heros, ...dc_heros];
 console.log(all_heros);
 //flat
 let another_array=[1,2,3,[4,5,6,7],8,[9,10,11,[12,13,14,[15,16,17,18]]]];
 console.log(another_array);
//  let all_set = another_array.flat(Infinity);
 let all_set = another_array.flat(3);
 console.log(all_set);
 //form
 console.log(Array.from("Rushikesh"));
 console.log(Array.from({name:"rushikesh"})) //interesting for the interview // they return empty array

 //isArray
 console.log(Array.isArray("Rushikesh"))
 //of
 let score = 100
 let score2 = 200
 let score3 = 300  
 console.log(Array.of(score,score2,score3));
