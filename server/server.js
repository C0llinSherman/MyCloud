const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
var cors = require("cors")
const app = express();
const port = 8080;
app.use(cors())
app.use(bodyParser.json())

const entityMap = {
    users: './users.json',
    feedback: './feedback.json'
}

function getEntity(entityName) {
    let path = entityMap[entityName]
    const entityJSON = fs.readFileSync(path)
    return JSON.parse(entityJSON)
}

app.post("/sign-up", (req, res) => {
    const users = getEntity('users')
    const signUpForm = req.body
    const { password, confirmPassword, ...user } = signUpForm
    const hash = btoa(`${user.username}${password}`);
    users[hash] = user
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2))
    res.send({
        data: user,
        status: 'success'
    })
})

app.post('/login', (req, res) => {
    const users = getEntity('users')
    const { username, password } = req.body
    const hash = btoa(`${username}${password}`);
    const foundUser = users[hash];
    res.send({
        data: foundUser,
        status: !!foundUser ? "success" : "error",
        message: !!foundUser ? "" : "No user found"
    })
})

app.post('/feedback', (req, res) => {
    let feedbackArray = []
    let feedback = getEntity('feedback')
    for (let i = 0; i < feedback.length; i++) {
        feedbackArray.push(feedback[i])
    }
    feedbackArray.push(req.body)
    fs.writeFileSync('./feedback.json', JSON.stringify(feedbackArray, null, 2))
    res.send({
        data: req.body,
        status: 'success'
    })
})
app.get('/get-feedback', (req, res) => {
    let feedback = getEntity('feedback')
    res.send({
        data: feedback,
        status: 'success'
    })
})

app.listen(port, () => {
    console.log(`server started at http//localhost:${port}`)
})