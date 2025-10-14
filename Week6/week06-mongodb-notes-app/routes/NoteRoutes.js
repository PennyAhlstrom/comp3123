const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.notesTitle || !req.body.notesDescription) {
        return res.status(400).send({
            message: "Note title and description cannot be empty"
        });
    }
    //TODO - Write your code here to save the note
    try {
        // Create a new Note
        const note = new noteModel({
            notesTitle: req.body.notesTitle,
            notesDescription: req.body.notesDescription,
            priority: req.body.priority || 'MEDIUM'
        });

        // Save Note to database
        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the note."
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    // Validate request (optional for GET, can be removed)
    try {
        //TODO - Write your code here to returns all note
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    // Validate request (optional for GET)
    try {
        //TODO - Write your code here to return only one note using noteid
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }
        res.send(note);
    } catch (err) {
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.notesTitle || !req.body.notesDescription) {
        return res.status(400).send({
            message: "Note title and description cannot be empty"
        });
    }
    try {
        //TODO - Write your code here to update the note using noteid
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            {
                notesTitle: req.body.notesTitle,
                notesDescription: req.body.notesDescription,
                priority: req.body.priority || 'MEDIUM',
                dateUpdated: Date.now()
            },
            { new: true } // return the updated document
        );

        if (!updatedNote) {
            return res.status(404).send({ message: "Note not found with id " + req.params.noteId });
        }

        res.send(updatedNote);
    } catch (err) {
        res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    //Debugging
    console.log('Deleting ID:', req.params.noteId);
    console.log('Length:', req.params.noteId.length);
    
    // Validate request (optional for DELETE)
    try {
        //TODO - Write your code here to delete the note using noteid
        const note = await noteModel.findByIdAndRemove(req.params.noteId);
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({ message: "Note deleted successfully!" });
    } catch (err) {
        res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
});

module.exports = noteRoutes;
