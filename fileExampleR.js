

// Sycrnounous method :

const fs= require ("fs");

// fs.readFile("./New_js_folder/Text.txt",(error,data) => {

//     if (error){
//         console.log("error");
//         console.log(error);

//     }
//     else
//         console.log(data.toString());
// });

  
// Asycronouse Method :

fs.readFileSync("./New_js_folder/Text.txt",(error,data) => {

    if (error){
        console.log("error");
        console.log(error);

    }
    else
        console.log(data.toString());
});



console.log("Termineted");

