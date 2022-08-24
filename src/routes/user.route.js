/** @format */

// Import express
import * as express from 'express';
// Import Product Controller
import { addUser, userLogin } from '../controllers/user.controller';

// Init express router
const router = express.Router();

// Route create a new product
router.post('/newUser', addUser);
router.post('/login', userLogin);

// export router
export default router;
