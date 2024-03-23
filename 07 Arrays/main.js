const ages = [21,22,23,24,25,26];
ages.forEach((current,index,array) =>{
    if(array[index] % 2 == 0){
        console.log(array[index]);
    }
})