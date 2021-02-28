const fs = require('fs')

function getNotes(){
 return  fs.readFileSync('notes.txt','utf8')
}

function addNote(title, body){
 const notes = loadNotes();
 console.log(notes)
 const duplicatedNotes = notes.filter((note) => note.title === title)
 console.log(duplicatedNotes.length)
 if (duplicatedNotes.length === 0 ){
 notes.push({
  title : title,
  body : body
 })
  saveNotes(notes)
  console.log('added successfully!');
 }else {
  console.log("this title already taken")
 }

}

function loadNotes(){
 try{
  const notes = fs.readFileSync('notes.json', 'utf8')
  return JSON.parse(notes)
 }catch (e){
  return  [];
 }
}

function saveNotes(notes){
 const saveNotes = JSON.stringify(notes)
 fs.writeFileSync('notes.json', saveNotes);
}
module.exports = {
 getNotes, addNote
};
