const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5952b8e4db3d079bce59dd95')
// },{
//   $set:{
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((res) => {
//   console.log(res);
// });
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('595296334a6f0c0a98d86189')
},{
  $set: {
    name: 'Dusia'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: true
}).then((res) => {
  console.log(res);
});


  //db.close();
});
