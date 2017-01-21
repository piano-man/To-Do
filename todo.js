var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var tasks = [
{
	term: "eat"
	defined: "most important task of the day"

},
{
	term: "sleep"
	defined: "very important task"
},
{
	term: "play"
	defined: "very very important task"
}
];
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`)
	next()
})
app.use(express.static('/home/gaganjeet/Project1/public'))
app.get('/task-api',function(req,res){
	res.json(tasks)
})
app.post('/task-api',function(req,res){
	tasks.push(req.body)
	res.json(tasks)
})
app.delete('/task-api/:term',function(req,res){
	tasks = tasks.filiter(function(definition){
		return definition.term.toLowerCase()!= req.params.term.toLowerCase()
			})
})
app.use(cors())
app.listen(3003)
console.log('app running on port 3003')
module.exports = app
 