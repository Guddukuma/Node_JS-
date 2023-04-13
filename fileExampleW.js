


const fs= require ("fs");

const content = "I am Optimistic Person and Passionot about my work." ;

fs.writeFile("NText.txt", content , (error)=> {
    if (error){
        console.log(error);
    }
    else{
        console.log("Saved");
    }
})