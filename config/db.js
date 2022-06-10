

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const mongoatlasUrl = "mongodb://localhost:27017";
mongoose.connect(mongoatlasUrl, {
useNewUrlParser: true,
useUnifiedTopology: true,
retryWrites: false
})
.then(() => console.log('Connection to MongoDB successful'))
.catch((err) => console.error(err));

