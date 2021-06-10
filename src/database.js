const mongoose = require('mongoose');
const URI =
  'mongodb+srv://davidduarte:v25798979D@cluster0.bumch.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Db is connected'))
  .catch((err) => console.error(err));
