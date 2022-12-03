const fs=require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//  console.log(err,data);
// })

//nodejs intensily block 
// const a=fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile('file2.txt',"This is data",()=>{
//     console.log("Written to the file");
// });

//nodejs intensily block 
b=fs.writeFileSync('file2.txt',"This is data2")
console.log(b);
  

//non blocking io model
console.log("Finished reading file");


