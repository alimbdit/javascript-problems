// JavaScript Program to Check if An Array Contains a Specified Value

const containItem = (arr, item) => {
    const result = arr.includes(item);
    if(result){
        console.log(`Array contains '${item}'.`)
    }
    else{
        console.log(`Array does not contain '${item}'.`)
    }
}

const arr = ['hello', 'the', 'javascript', 'world']
containItem(arr, 'world')