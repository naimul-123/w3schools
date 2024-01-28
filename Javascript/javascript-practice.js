// var x= 5;
// var message;
// message = x>10? "Bigger than 10": "less or equal to 10" 

// console.log(message)
// array
// const numbers = [5,10,20,30,40]
// const number2 =[15,30,45]
// console.log(numbers.concat(number2))

const calcGrading=(score)=>{
    let greadingScore;
    switch(true){
        case (score<= 100 && score >=90):
            greadingScore= "A+"
            break;
        case (score<= 89 && score >=80):
            greadingScore= "A"
            break;
        case (score<= 79 && score >=70):
            greadingScore= "A-"
            break;
        case (score<= 69 && score >=60):
            greadingScore= "B"
            break;
        case (score<= 59 && score >=50):
            greadingScore= "B-"
            break;
        case (score<= 49 && score >=40):
            greadingScore= "C"
            break;
        case (score< 40 && score >=0):
            greadingScore= "F"
            break;
        default:
            greadingScore="Invalid score"

    }
    return greadingScore;
}

console.log(calcGrading(90))//return A+
console.log(calcGrading(80))//return A
console.log(calcGrading(102))//return Invalid score