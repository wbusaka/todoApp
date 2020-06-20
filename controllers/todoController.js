let bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let mongoose = require('mongoose')

//connect to the database
mongoose.connect('mongodb://test:test2020@ds031319.mlab.com:31319/todo', {useNewUrlParser: true, useUnifiedTopology: true})

//create a schema
let todoSchema = new mongoose.Schema({
    item: String
})

//create a model
let Todo = mongoose.model('Todo', todoSchema)

/*let itemOne = Todo({item: 'Buy books'}).save((err)=> {
    if(err){
        throw err
    }
    console.log('item saved')
})*/

module.exports = (app)=> {

    app.get('/todo', (req, res)=> {
        //get data from mongodb and pass it to view
        Todo.find({}, (err, data)=> {
            if(err) throw err
            res.render('todo', {todos: data})
        })
    })

    app.post('/todo', urlencodedParser, (req, res)=> {
        //get data from view and pass it mongodb
        let newTodo = Todo(req.body).save( (err, data)=>{
            if(err) throw err
            res.json({todos: data})
        })        
    })

    app.delete('/todo/:item', (req, res)=> {
        //delete 
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data)=> {
            if(err) throw err
            res.json({todos: data})
        })
        })
}