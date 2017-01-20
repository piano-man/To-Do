var express = require('express')
var cors = require('cors')
var app = express()
var tasks = [
{
	task: "eat"
	defined: "most important task of the day"

},
{
	task: "sleep"
	defined: "very important task"
},
{
	task: "play"
	defined: "very very important task"
}
];
app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`)
	next()
})
app.use(express.static('/home/gaganjeet/Project1/public'))
app.get('/task-api',function(req,res){
	res.json(tasks)
})
app.use(cors())
app.listen(3003)
console.log('app running on port 3003')
module.exports = app
 