let express = require('express')
let app = express()
let todoController = require('./controllers/todoController')
//Heroku port declaration
let port = process.env.PORT || 3000
//template
app.set('view engine', 'ejs')

//static files
app.use(express.static(__dirname + '/public'))

//fire controllers
todoController(app)

//listen to port
app.listen(port)
console.log('listening to port 3000')   