/** @format */

// Import express
import * as express from 'express';
// Import Product Controller
import {
  createNewNote,
  fetchAllNote,
  updateANote,
  deleteANote,
} from '../controllers/note.controller';
import { authenticate, authorize } from '../middleware/auth';
// Init express router
const router = express.Router();

// Route create a new product
router.post('/addNote', authenticate, authorize, createNewNote);

router.get('/viewNotes', fetchAllNote);

router.patch('/updateNote/:id', updateANote);

router.delete('/deleteNote/:id', deleteANote);

// export router
export default router;
