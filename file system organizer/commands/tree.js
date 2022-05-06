
let fs = require('fs');

let path = require('path');


 // tree function

 let indent = " ";

 function treefn(dirpath){

       

    if(dirpath == undefined){
        console.log("please enter a valid command ");
        return;
    }else {
        let doesExist = fs.existsSync(dirpath);
        if(doesExist == true){
            treeHelper(dirpath,indent); // indent defined at the top 
        }
    }
}



  
function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();
    // here we have checked wheter the targetPath is a file or a folder
  
    if (isFile == true) {
      let fileName = path.basename(targetPath);
      console.log(indent + "├──" + fileName);
      // this will display the files
    } else {
      let dirName = path.basename(targetPath);
      console.log(indent + "└──" + dirName);
      // this will display the folders
  
      let children = fs.readdirSync(targetPath);
      //console.log(children)
      // here we took out all the children of test folder
  
      for (let i = 0; i < children.length; i++) {
        let childPath = path.join(targetPath, children[i]);
  
        //console.log(childPath)
        treeHelper(childPath, indent + "\t");
        // using Recursion to repeat the process for all files and Folders
      }
    }
  }
module.exports = {
    treekey:treefn
}