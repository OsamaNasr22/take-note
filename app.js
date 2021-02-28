const yargs = require('yargs')
const notes = require('./notes')

yargs.command('read', "read note!", {}, () => console.log('read specific file'))
yargs.command('list', "list all notes!", {}, () => console.log('list all notes'))
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
  }, function(argv) {
  notes.addNote(argv.title, argv.body)
  }
)
yargs.parse()
