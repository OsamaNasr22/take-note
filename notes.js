const fs = require('fs')
function getNotes(){
 return  fs.readFileSync('notes.txt','utf8')
}
module.exports = getNotes;
