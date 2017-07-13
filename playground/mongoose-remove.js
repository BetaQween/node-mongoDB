const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'5967af76cb644f1255df51d7'}).then((todo) => {
console.log(todo);
});
// Todo.findByIdAndRemove('5967af76cb644f1255df51d7').then((todo) => {
// console.log(todo);
// });
