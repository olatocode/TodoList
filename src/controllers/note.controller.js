/** @format */
import Note from '../models/note.model';

const createNewNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const Note_Created = await Note.create({
      title,
      description,
    });
    return res.status(201).json({
      message: 'Note created successfully',
      Note_Created,
    });
  } catch (error) {
      console.log(error)
    return res.status(500).json({
      message: error.message,
    });
  }
};

// This function shows all Note created by users
const fetchAllNote = async (req, res) => {
  try {
    const showAll_Note = await Note.find();

    return res.status(200).json({
      message: 'Notes shown successfully',
      showAll_Note,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// This function is used for updating a Note created
const updateANote = async (req, res) => {
  try {
    const { id } = req.params;
    const Note_Updated = await Note.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      message: 'Note updated Successfully',
      Note_Updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// This function is used for deleting a Note created
const deleteANote = async (req, res) => {
  try {
    const { id } = req.params;
    const Note_Deleted = await Note.deleteOne({ _id: id });
    return res.status(200).json({
      message: 'Note deleted Successfully',
      Note_Deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { createNewNote, fetchAllNote, updateANote, deleteANote };
