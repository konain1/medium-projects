const fs = require('fs');
const path = require('path');


function organizefn(dirpath){
     
    let destpath;
    if(dirpath === undefined){
        console.log("please enter a valid path")
        return;

    }else {
        let pathExits = fs.existsSync(dirpath);
        // console.log(pathExits);

        if(pathExits === true){

             destpath = path.join(dirpath,'organized_files');

                    if(fs.existsSync(destpath) == false){
                        
                        fs.mkdirSync(destpath);
                    }
                    else {
                        console.log('this folder is Already exists');
                    }
            


        }
        else {
            console.log("this path not exists on your system")
        }
        
    }
    organizedHelp(dirpath,destpath);

    
}


function organizedHelp(src,dest){
    let childNames = fs.readdirSync(src);

    // console.log(childNames)

    for(let i =0; i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i]);
        // console.log(childAddress)
        
        let isFiles = fs.lstatSync(childAddress).isFile();
        // console.log(childAddress+" "+isFiles);

        if(isFiles === true){
            let fileCategory = getcategory(childNames[i]);// get the file category type

            // console.log(childNames[i]+" belongs to = "+fileCategory );
            sendFiles(childAddress,dest,fileCategory);
        }
        
    }
}

function getcategory(names){
    let ext = path.extname(names);

    ext = ext.slice(1);
    // console.log( "matching " +ext);
    


    for(let t in types){
        let cTypecat = types[t];
        
        for(let i = 0;i<cTypecat.length;i++ ){
            if(ext == cTypecat[i]){
                return t;
            }
        }
    }
    return 'others'
    }


    function sendFiles(srcfilepath,dest,fileCategory){

        let catpath = path.join(dest,fileCategory);

        if(fs.existsSync(catpath)==false){
            fs.mkdirSync(catpath);
            //making folder of file type   example document,media
        }

        let filename = path.basename(srcfilepath);

        let destfilePath = path.join(catpath,filename);
        // console.log(destfilePath)

        fs.copyFileSync(srcfilepath,destfilePath);

        fs.unlinkSync(srcfilepath);
    }

    module.exports = {
        organizekey:organizefn
    }