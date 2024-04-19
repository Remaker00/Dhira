const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    salary: {
        type: Number,
    },
    department:{
        type:String,
    }
});


module.exports = mongoose.model('Emp', EmpSchema);
