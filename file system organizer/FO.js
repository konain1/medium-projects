const help = require('./commands/help')

const organizeModule = require('./commands/organize');
const tree = require('./commands/tree');


let input = process.argv.slice(2);  //  its take terminal command as a array

let fs = require('fs');
const { type } = require('os');

// let path = require('path');
const path = require('path');





let command = input[0];


let types = {media: ["mp4", "mkv", "mp3","png"],
archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
app: ["exe", "dmg", "pkg", "deb"],}

switch(command){

    case 'tree':
        tree.treekey(input[1]);
        break;
        
    case 'organize':
       organizeModule.organizekey(input[1]);
        break;
    case 'help':
       help.helpkey();
        break;
    default :
        console.log("invalid command");
        break;
}





