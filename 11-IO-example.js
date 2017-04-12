const _ = require('./utility')
const {IO} = require('./11-IO')

const io_window = new IO(function () {
  return {
    prop: 'hello'
  }
})

io_window.map(win => win.innerWidth)

console.log(io_window.map(_.pluck('prop')).__value())
