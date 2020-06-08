const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherMoodSchema = new Schema ({
    added: { type: Date },
    location: {type: String },
    temperature: {type: Number },
    mood: {type: String }
})

module.exports = mongoose.model('WeatherMood', WeatherMoodSchema);