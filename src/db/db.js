// nodejs or mongodb ko database se connect krta h 
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/prectice')
.then(()=>{
    console.log('db connected');
})
.catch((err)=>{
    console.log(err); 
})
