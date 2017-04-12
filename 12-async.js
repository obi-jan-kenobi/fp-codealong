const fs = require('fs')
const Task = require('data.task')
const Async = require('control.async')(Task)

const readFile = filename => 
  Task.of((reject, result) => 
  fs.readFile(filename, 'utf-8', (err, data) => 
  err ? reject(err) : result(data)))

console.log(Task)

readFile('metamorphosis.txt').fork((err, text) => err ? console.log(err) : console.log(text))
