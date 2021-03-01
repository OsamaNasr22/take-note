const fs = require('fs')
const chalk = require('chalk')

function listNotes(){
 const notes = loadNotes();
 console.log(chalk.green.bold("Your notes:"));
 notes.forEach(note => console.log(note.title))
}
function readNote(title){
 const notes= loadNotes();
 const note = notes.find(note => note.title === title)
 if (!note){
  console.log(chalk.red.inverse('note is not found'))
 }else {
  console.log(chalk.blue(note.title)+":" , note.body)
 }
}

function addNote(title, body){
 const notes = loadNotes();
 const duplicatedNote = notes.find((note) => note.title === title)
 if (!duplicatedNote ){
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

function removeNote(title){
 const notes = loadNotes();
 const remainsNotes = notes.filter((note) => note.title !== title)
 if (notes.length !== remainsNotes.length){
  saveNotes(remainsNotes)
  console.log(chalk.green.inverse(`${chalk.bold(title)} note is removed`))
 }else{
  console.log(chalk.red.inverse('this note not found'))
 }
}
module.exports = {
 listNotes, addNote, removeNote, readNote
};
