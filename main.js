"use strict";

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while(num <= 55);

for(let i = 1; i <= 10; i++){
  if (i == 5){
    break;
  }
  console.log(`${i} итеррация`);
}

//Цыкл внутри цыкла!

for (let i = 0; i < 3; i++){
  console.log(`${i} i layer`)
  for (let j = 0; j < 3; j++){
    console.log(`${j} j layer`)
  }
}

let result = "";
const length = 7;

for (let i = 1; i < length; i++){
  for(let j = 0; j < i; j++){
    result += "*"
  }

  result += "\n"
}

console.log(result);


first: for (let i = 0; i < 3; i++){
  console.log(`First level ${i}`);
  for(let j = 0; j < 3; j++){
    console.log(`Second level ${j}`);
    for(let k = 0; k < 3; k++){
      if(k === 2) continue first;
      console.log(`Third level ${k}`);
    }
  }
}



let i = 2;

while (i <= 16){
  i++;
  if (i % 2 === 0){
    continue;
  }else {
    console.log(i);
  }
};