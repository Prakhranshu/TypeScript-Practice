const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5]
//Output: [1, 2, 3, 4, 5]

const uniset = new Set();

for (const element of arr){
    if(!uniset.has(element))
        uniset.add(element);
}

console.log(uniset)

arr.map((element,i) => element);

console.log(arr.filter(element => element %2 !==0));

var num=3
var count =0

const promise = new Promise((resolve, reject) =>
        if(num %2 ==0){
        resolve("Success")
    }
    else{
        reject("Error")
    }
    

})

promise.then(result =>console.log("success"))
promise.catch(err =>console.log("error caught")