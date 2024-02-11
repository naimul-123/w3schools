// var x= 5;
// var message;
// message = x>10? "Bigger than 10": "less or equal to 10" 

// console.log(message)
// array
// const numbers = [5,10,20,30,40]
// const number2 =[15,30,45]
// console.log(numbers.concat(number2))

// const calcGrading=(score)=>{
//     let greadingScore;
//     switch(true){
//         case (score<= 100 && score >=90):
//             greadingScore= "A+"
//             break;
//         case (score<= 89 && score >=80):
//             greadingScore= "A"
//             break;
//         case (score<= 79 && score >=70):
//             greadingScore= "A-"
//             break;
//         case (score<= 69 && score >=60):
//             greadingScore= "B"
//             break;
//         case (score<= 59 && score >=50):
//             greadingScore= "B-"
//             break;
//         case (score<= 49 && score >=40):
//             greadingScore= "C"
//             break;
//         case (score< 40 && score >=0):
//             greadingScore= "F"
//             break;
//         default:
//             greadingScore="Invalid score"

//     }
//     return greadingScore;
// }

// console.log(calcGrading(90))//return A+
// console.log(calcGrading(80))//return A
// console.log(calcGrading(102))//return Invalid score


// const numbers = [1,5,6,8,11];
// for (num of numbers){
//     console.log(num);
// }

// const myName = "Naimul Islam";
// let count=0;
// for(letter of myName){
 
//     if(letter === "l"){
//         count++
//     }


// }
// console.log(`your name contains ${count} m`);

// const letterCount =(name, letter)=>{
//     let count=0;
// for(l of name){
 
//     if(l=== letter){
//         count++
//     }


// }
// return (`your name contains ${count} ${letter}`);

// }

// console.log(letterCount("Naimul Islam", "i"));


// let num = 0;
// while(num <5){
//     console.log(`Loop until number become ${num}`)
//     num++
// }

//sum of serise of numbers
// let num=0;
// let result= 0;

// while(num<=10){
//     result+=num;
//     num++;
// }

// console.log(result)

//output event number
// let num = 0;
// while(num <=10){
//     if(num%3==0){
//         console.log(num);
//     }
//     num++
// }

// for loop
// for(let num = 1; num<=10; num++){

//     console.log(num)
// }

// sum of array elements with for loop
// const numbers = [15,25,24,28,32];
// let sum=0;
// for (let i = 0; i<numbers.length; i++){
//     const number = numbers[i];
//     sum +=number;
// }

// console.log(sum);
        // const myName="Naimul Islam";
        // let reverseName = ''
        // for(let i = 0; i< myName.length; i++ ){
        //     const letter= myName[i]
        //     reverseName= letter + reverseName;
        // }

        // console.log(reverseName)

    //    console.log(myName.split('').reverse().join(''));
    // const myObject={
    //     name: "Naimul Islam",
    //     age: 35,
    //     waight: 70,
    //     height: 63
    //     };

    //     const keys = Object.keys(myObject)
    //     console.log(keys)
    //     for(key of keys){
    //         console.log(myObject[key])
    //     }

    // sort number array with ascending order
    // const numbers = [15,25,24,28,32, 3, 4];
    // // sort numbers array with ascending order
    // console.log(numbers.sort((a,b)=> a-b));
    //     // sort numbers array with descending order
    //     console.log(numbers.sort((a,b)=> b-a));
    // const statement = 'I am a hard working person'
    // const statArray = statement.split(" ");
    // // console.log(stat_array)
    // const reverseStatement = statArray.reverse();
    // console.log(reverseStatement);

    // return a value to function

//     const add = (num1, num2)=>{
//         const result = num1+num2;
//         return result;
//     }
// const sum = add(25, 20)
   
//     console.log(sum);

// return a value with condition

// const isEven = (num)=>{
//     if (num %2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(24));//returns true

        // const numbers = [1,2,3,4,5,6];
        // const sortNumbers = (array)=>{
        //     let evenNum= [];
        //     let oddNum =[];
        //     const arrangedNum = {
        //         even:[],
        //         odd:[]
        //     }
        //     for (n of array){
        //         if (n%2 ===0){
        //         //    evenNum.unshift(n)
        //            evenNum.push(n) 
        //         }

        //         else{
        //             oddNum.push(n)
        //         }
        //     }
        //     arrangedNum.even = evenNum;
        //     arrangedNum.odd=oddNum;

        //     return arrangedNum
        // }
        // console.log(sortNumbers(numbers));

        // // task-3 make agerage
        // const numbers = [1,5,8,4,3,7,9,12];
        // function makeAvg(array){
        //     const size= array.length;
        //     let sum = 0;
        //     for(n of array){
        //         sum = n+sum;
        //     }
        //     const avg = sum/size;
        //     return avg;
        // }

        // console.log(makeAvg(numbers));
        // count zero in a string;

        // const binaryString = '10001010100'

        // function countZero(str){
        //     let count = 0;
        //     for (n of str){
        //         if(n==="0"){
        //             count++
        //         }
                
        //     }
        //     return count
        // }

        // console.log(countZero(binaryString))

        // task -5
        // function oddEven(number){
        //     if(number%2 ===0){
        //         return "Even";
        //     }
        //     else{
        //         return "Odd";
        //     }
        // }

        // console.log(oddEven(25));
        // console.log(oddEven(22));

        // converter inch to feet
        // function inchToFeet(inch){
           
        //         const feet = `${(inch/12).toFixed(0) }'${inch%12}"`
        //         return feet
           
        // }

        // console.log(inchToFeet(5));

        //isleapyear function
        // function isleapyear(year){
        //     let result;
        //     if(year % 100!==0 && year%4 === 0){   
        //             result= `This year is a leap year`;
        //     }
        //     else if (year%400 ===0){
        //         result =`This year is a leap year` 
        //     }
        //     else{
        //         result =`This year is not a leap year` 
        //     }

        //     return result;

        // }

        // console.log(isleapyear(1902));

        // ‍return average of odd numbers of an array

        // const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

        // function oddAvg(array){
        //     let count=0;
        //     let sum = 0;
        //     for (n of array){
        //         if(n%2!==0){
        //             count++;
        //             sum+=n;
        //         }
        //     }

        //     const avg= sum/count;
        //     return avg;
        // }

        // console.log(oddAvg(numbers));

        // another way
        // let oddNumber=[];
        // function oddAvg(array){
        //     for(n of array){
        //         if(n%2 ===1){
        //             oddNumber.push(n);
        //         }
        //     }
        //     let sum = 0;
        //     for(n of oddNumber){
        //         sum+=n;
        //     }
        //     avg = sum/ oddNumber.length;
        //     console.log(avg)
        // }

        // oddAvg(numbers);

        // remove repeat item from an array with a function;

        // const numbers = [1,5,7,6,8,5,6,2,5];
        // function removeRepeat(array){
        //     let newArray = [];
        //     for (n of array){
        //         if(!(newArray.includes(n))){
        //             newArray.push(n);
        //         }
        //     }

        //     return newArray;
        // }

        // console.log(removeRepeat(numbers));
        // Math.ceil

        // const phones = [
        //     { model: "PhoneA", brand: "Iphone", price: 95000 },
        //     { model: "PhoneB", brand: "Samsung", price: 40000 },
        //     { model: "PhoneC", brand: "Oppo", price: 26000 },
        //     { model: "PhoneD", brand: "Nokia", price: 35000 },
        //     { model: "PhoneE", brand: "Iphone", price: 105000 },
        //     { model: "PhoneF", brand: "HTC", price: 48000 },
        // ];

        // function averageValue(array){
        //     let total= 0;

        //     for(n of array){
        //         total+=n.price;
        //     }

        //     avg = total/array.length;
        //     return avg;
        // }

        // console.log(averageValue(phones));

        // const employees = [
        //     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        //     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        //     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        //     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        // ];

        // function totalSalary(array){
        //     let total= 0;
        //     for(n of array){
        //         total= (n.experience*n.increment)+ n.starting+total
        //     }

        //     return total
        // }

        // console.log(totalSalary(employees))

        const numbers =[14,15,7,16,8,17,12,19];

        // function getMax(array){
        //     let maxVal=array[0];
        //     for(let i=1; i<array.length; i++){
                
        //         if(array[i]- array[i-1]){
        //             maxVal= array[i]
        //         }
        //     }

        //     return maxVal;
        // }

        // console.log(getMax(numbers))
        // function getMax(array){
        //     let maxVal=array[0];
        //     for(n of array){
                
        //         if(maxVal<n){
        //             maxVal= n;
        //         }
        //     }

        //     return maxVal;
        // }

        // console.log(getMax(numbers))
        // function layeredDiscount(unit){
        //     let price=0;
        //     if(unit<=100){
        //         price= 100*unit;
        //     }

        //     else if (unit<=200){
        //         price = 100*100 + (unit-100)*90;
        //     }
        //     else {
        //         price = 100*100 + 100*90 + (unit-200)*70;
        //     }

        //     return price;
        // }

        // console.log(layeredDiscount(104))

        let Nam = "name";
        const Name = Nam.to
        document.getElementsByTagName("tagName");