const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    notesTitle: {
        type: String,
        required: [true, 'Note title is required'],
        trim: true
    },
    notesDescription: {
        type: String,
        required: [true, 'Note description is required'],
        trim: true
    },
    priority: {
        type: String,
        enum: {
            values: ['HIGH', 'MEDIUM', 'LOW'],
            message: 'Priority must be HIGH, MEDIUM, LOW'
        },
        default: 'MEDIUM',
        uppercase: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Note', NotesSchema);