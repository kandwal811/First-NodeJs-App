// module wrapper function-->modules in nodejs automatically wrap in this function before run module
// (function(exports, require, module, __filename, __dirname){
//     const Sumit={
//         name:"Sumit",
//         favNum:32,
//         developer:true
//     }
    
//     module.exports=Sumit;
// })



// (function(exports, require, module, __filename, __dirname){
    const Sumit={
        name:"Sumit",
        favNum:32,
        developer:true
    }
    console.log(exports, require, module, __filename, __dirname);
    
    module.exports=Sumit;
// })





