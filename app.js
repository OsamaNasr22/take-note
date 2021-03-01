const yargs = require('yargs')
const notes = require('./notes')

yargs.command( 'add', "add new note", {
  'body' : {
    alias : 'b',
    describe : "the body of the note",
    type : "string",
    demandOption : true
  },'title' : {
    alias : 't',
    describe : "the title of the note",
    type : "string",
    demandOption : true
  }
  }, argv => notes.addNote(argv.title, argv.body))

yargs.command('remove', 'remove specific note', {
    title:{
    alias: "t",
    demandOption : true,
    type: 'string'
  }}, argv => notes.removeNote(argv.title))

yargs.command('list','list your notes', {} , (argv) => notes.listNotes())

yargs.command('read', 'read a note',
  {
    title: {
      alias: "t",
      demandOption: true,
      type: "string"
    }
  }, argv => notes.readNote(argv.title))
yargs.parse()
