let char = "!@&dsdjdkanjnka()ahklajsdkahka";
let char2 = "qwqe*!^%-!skjajk";
let char3 = '<>?"ddsczx{FgASsds';
let char4 = "alka:dada;a,cka";

// console.log(password);

for (let i = 0; i < 100; i++) {
  let val = Math.floor(Math.random() * char.length);
  let val1 = Math.floor(Math.random() * char2.length);
  let val2 = Math.floor(Math.random() * char3.length);
  let val3 = Math.floor(Math.random() * char4.length);
  let val4 = Math.floor(Math.random() * 100);
  let val5 = Math.floor(Math.random() * 30);

  let p1 = char[val];
  let p2 = char2[val1];
  let p4 = char3[val2];
  let p5 = char4[val3];
  let p3 = val4;
  let password = p1 + p2 + p3 + p4 + val5 + p5;
  console.log(password);
}
