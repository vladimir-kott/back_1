const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notePath = path.join(__dirname, 'db.json')


async function addNote(title){
    //const notes = require('./db.json')
    const notes = await getNotes()
    const note={
        title,
        id: Date.now().toString() 
    }
    notes.push(note)
    await fs.writeFile(notePath, JSON.stringify(notes))
    console.log(chalk.bgGreen('note was added'))
}

async function printNotes(){
    const notes = await getNotes()
    console.log(chalk.bgBlue('Yor notes:'))
    notes.forEach(n => {
        console.log(chalk.bgBlue(n.id + ' ' + n.title))
    });
}

async function remove (id){
    const notes = await getNotes()
    const index = notes.findIndex(n => {
        return n.id === id
    })
    notes.splice(index, 1)
    await fs.writeFile(notePath, JSON.stringify(notes))
    console.log(chalk.bgYellow('You note was deleted'))
}

async function getNotes(){
    const notes = await fs.readFile(notePath, {encoding: 'utf-8'})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes):[]
}

module.exports = {
    addNote, printNotes, remove
}