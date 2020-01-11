const fs = require('fs');
const chalk = require('chalk');

const readNote = title => {
  const notes = loadNotes();
  const foundNode = notes.find(note => note.title === title);
  if(foundNode) {
    console.log(chalk.green('title:', foundNode.title));
    console.log('body:', foundNode.body)
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }

};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log('Title:', note.title);
  })
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  debugger;
  if(!duplicateNote) {
    notes.push({title: title, body: body});
    saveNotes(notes);
    console.log(notes);
    console.log(chalk.green.inverse('Note saved!'));
  } else {
    console.log(chalk.red.inverse('Note takken!'));
  }

};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const clearedNotes = notes.filter(note => note.title !== title);

  if(notes.length !== clearedNotes.length) {
    saveNotes(clearedNotes);
    console.log(chalk.green.inverse('Note removed!'));
  }
  else console.log(chalk.red.inverse('No note found!'));
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes,
  readNote,
};