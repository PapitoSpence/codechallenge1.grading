function nameGrading {} {
  let  50=100
 // Nested if else
 if (grade  <= 100 && grade >= 79) {
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
            else if (grade < 39 ){
                console.log('E')
            }  
            nameGrading{}
}
