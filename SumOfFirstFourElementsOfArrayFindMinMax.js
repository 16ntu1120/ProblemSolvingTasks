
const calculateMinMax = () => {
const arr = [1,2,3,4,5];

let firstHalf=[]
let secondHalf=[]
let finalArr=[]

let excludeInitial=arr.slice(1)
let min=excludeInitial.reduce((a,b)=>{return a+b})
let max=excludeInitial.reduce((a,b)=>{return a+b})


for (let i=0;i<arr.length;i++){
    firstHalf=arr.slice(0,i)
    secondHalf=arr.slice(i+1)
    finalArr=firstHalf.concat(secondHalf)
    let temp=(finalArr.reduce((a,b)=>{return a+b}))
    if(temp>max){
        max=temp
    }else if(temp<min){
        min=temp
    }
}
console.log(min, max);

}

calculateMinMax();