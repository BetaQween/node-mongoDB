// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);//посмотреть ключ

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({  в таблицу Юзер добавляем запись
    //   text: 'Something to do',
    //   completed: false
    //   }, (err, res) => {
    //   if(err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //   name: 'Liza',
    //   age: 34,
    //   location: 'Israel'
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to insert User', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

  db.close();
});
