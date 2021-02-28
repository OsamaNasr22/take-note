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
  }, function(argv) {
  notes.addNote(argv.title, argv.body)
  }
)
yargs.command('remove', 'remove specific note', {
  title:{
    alias: "t",
    demandOption : true,
    type: 'string'
  }
},function (argv) {
  notes.removeNote(argv.title)
  }
)
yargs.parse()
