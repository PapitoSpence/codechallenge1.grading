const prompt = require('prompt-sync')();
const grade =parseInt(prompt('Enter a value between o and 100:'));
function nameGrading () {

 // Nested if else
 if (grade  >= 79 && grade <= 100) {
    console.log('A');
}
else if (grade <= 79 && grade >= 60) {
        console. log('B');
    }
else if (grade <= 59 && grade >= 49) {
            console. log('C');
        }
        else if (grade <= 49 && grade >= 40) {
                console. log('D');
            }
            else if (grade < 40 && grade >0 ){
                console.log('E')
            }  

            else {  
                console.log('Error')
                
            }
        
}
nameGrading();