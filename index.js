const yargs = require("yargs");
const {addNote, printNotes, remove} = require('./notes.controller')

yargs.command({
    command: 'add',
    discribe: 'add new note to list',
    builder:{
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({title}){
        addNote(title)
    }
})

yargs.command({
    command: 'list',
    discribe: 'print all notes',
    async handler(){
        const notes = await printNotes()
        console.log('List note: ', notes)
    }
})

yargs.command({
    command: 'remove',
    discribe: 'remove element by ID',
    builder: {
        id: {
            type: 'string',
            discribe: 'id of exist note',
            demandOption: true
        }
    },
    async handler({id}){
        remove(id)
    }
})

yargs.parse()