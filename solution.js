var answerQueries = function(nums, queries) {
nums.sort((a,b)=>a-b)
let sum=[]
let acc=0;

for(let el of nums){
    acc +=el;
    sum.push(acc);
    
}
  
    let result=[]
    for(let el of queries){
        result.push(find(sum,el))
    }
    return result
};




const find=(arr,target)=>{
 let left=0;
let right=arr.length-1;

    if(target>arr[right]){
        return arr.length
    }
    if(target<arr[left]){
        return 0;
    }
 for(let i=0;i<arr.length;i++){

     if(arr[i+1]){
     if(target>=arr[i] && target<arr[i+1]){
         return i+1
     }
     }else{
         if(target>=arr[i]){
             return i+1
         }
     }
 }
}
