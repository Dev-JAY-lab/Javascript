
let marks = 96;

// function getMyGrade is here and marks passed into it

function getMyGrade(marks) {

    if (marks<0 || marks >100) {
        console.log("Enter 1-100 only")
      // checks the value under 1 - 100 
        
    }
    else if (marks>=80 && marks <= 100) {
        console.log("You got A grade ");

        
    }else if (marks>70 ){
        console.log("You got B grade");


    }else if(marks>50) {
        console.log("You got C grade");


    }else if(marks>=33){
        console.log("You passed")

    }
    else{
        console.log("You are fail");
    }
    
}

 getMyGrade(marks); //function is called 