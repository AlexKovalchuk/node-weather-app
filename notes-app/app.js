const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');



yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    console.log(chalk.blue('Title:', argv.title));
    console.log(chalk.green('Body:', argv.body));
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    console.log(chalk.yellow('Remove an existing note'));
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Show list of commands',
  handler() {
    console.log(chalk.green('Your notes:'));
    notes.listNotes();
  }
});
yargs.parse();

// console.log('Yargs:', yargs.argv);
