const prompt = require('prompt-sync')();
const grade =parseInt(prompt('Enter a value between o and 100:'));
function nameGrading () {
  
 // Nested if else
 if (grade  >= 79 && grade <= 100) {
    console.log('A');
;}
 if (grade >= 60 && grade <= 78) {
        console. log('B');
    };
if (grade >= 50 && grade <= 59) {
            console. log('C');
        }
        else if (grade >= 40 && grade <= 49) {
                console. log('D');
            }
            else if (grade < 39 && grade <=0 ){
                console.log('E')
            }  

            else {  
                console.log('Error');
                
            }
            nameGrading()
}
