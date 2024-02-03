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

        const numbers = [1,2,3,4,5,6];
        const sortNumbers = (array)=>{
            let evenNum= [];
            let oddNum =[];
            const arrangedNum = {
                even:[],
                odd:[]
            }
            for (n of array){
                if (n%2 ===0){
                //    evenNum.unshift(n)
                   evenNum.push(n) 
                }

                else{
                    oddNum.push(n)
                }
            }
            arrangedNum.even = evenNum;
            arrangedNum.odd=oddNum;

            return arrangedNum
        }
        console.log(sortNumbers(numbers));