const yargs = require("yargs");

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
        console.log('Add command ', title)
    }
})

yargs.command({
    command: 'list',
    discribe: 'print all notes',
    handler(){
        console.log('List note')
    }
})

yargs.parse()