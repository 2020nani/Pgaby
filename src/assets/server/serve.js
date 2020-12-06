const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/encomendas').get((request, response) => {
  response.send(COURSES);
});

app.route('/encomendas').post((request, response) => {
  let encomenda = request.body;
  Encomendas.push(encomenda);
  
  console.log(encomenda)
  response.status(201).send(encomenda);
  
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var Encomendas = [
    
];
