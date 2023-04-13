

const fs = require("fs");


// fs.appendFile("./New_js_folder/Text.txt", " My aggrigate percentage is 70.",(error)=>{
//     if (error){
//         console.log("error" +error);

//     }
//     else{
//         console.log("Saved");
//     }
// })


// File unlink or delete : 

fs.unlink("./NText.txt",(error)=>{
    if (error){
        console.log("error" +error);

    }
    else{
        console.log("Delete");
    }
})
