const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherMoodSchema = new Schema ({
    added: { type: Date },
    location: {type: String },
    temperature: {type: String },
    mood: {type: String }
})

WeatherMoodSchema.pre('save', function(next) {
    const now = new Date();
    this.added = now;
})

module.exports = mongoose.model('WeatherMood', WeatherMoodSchema);