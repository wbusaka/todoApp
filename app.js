let express = require('express')
let app = express()
let todoController = require('./controllers/todoController')

//template
app.set('view engine', 'ejs')

//static files
app.use(express.static(__dirname + '/public'))

//fire controllers
todoController(app)

//listen to port
app.listen(3000)
console.log('listening to port 3000')   