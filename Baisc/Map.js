const val = [
  {
    n1: "kapil",
    n2: "ketan",
    n3: "Chauhan",
  },
  {
    r1: 21,
    r2: 24,
    r3: 51,
  },
];


console.log(val.map((values,index)=>(
    console.log([values.n1,values.n2,values.n3,values.r1,values.r2,values.r3,index])
)))