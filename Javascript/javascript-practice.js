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
        const myName="Naimul Islam";
        // let reverseName = ''
        // for(let i = 0; i< myName.length; i++ ){
        //     const letter= myName[i]
        //     reverseName= letter + reverseName;
        // }

        // console.log(reverseName)

    //    console.log(myName.split('').reverse().join(''));
    const myObject={
        name: "Naimul Islam",
        age: 35,
        waight: 70,
        height: 63
        };

        const keys = Object.keys(myObject)
        console.log(keys)
        for(key of keys){
            console.log(myObject[key])
        }
