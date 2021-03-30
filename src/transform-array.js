const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let k=0;
    let ind =0;
   for(let i=0;i<arr.length;i++){
     if(arr[i]=='--discard-next'||
     arr[i]==`--discard-prev`||
     arr[i]==`--double-next`||
     arr[i]==`--double-prev`)
     {k=arr[i];ind = i}
   }
   let newarr= [];
   let ch = 0;
   
   if(k=='--discard-next'){
       alert('m')    
     for(let i=0;i<arr.length;i++){
       if(arr[i]!='--discard-next'&&i!=(ind+1)){newarr[ch]=arr[i];ch++}
     }
   }
   else if(k==`--discard-prev`){
    for(let i=0;i<arr.length;i++){
     if(arr[i]!=`--discard-prev`&&i!=ind-1){newarr[ch]=arr[i];ch++}
    }
    }
   else if(k==`--double-next`){
    for(let i=0;i<arr.length;i++){
     if(arr[i]!=`--double-next`){newarr[i]=arr[i]}else newarr[i]=arr[i+1];
    }
    }
   else if(k==`--double-prev`){
      
    for(let i=0;i<arr.length;i++){
     if(arr[i]!=`--double-prev`){newarr[i]=arr[i]}else newarr[i]=arr[i-1];
    }
    }

   return newarr;
  };
