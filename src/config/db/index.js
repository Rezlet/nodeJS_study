const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.Promise = global.Promise;
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail');
    }
}

module.exports = { connect };
