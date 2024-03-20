import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
export default router;


/*
index -> List all users => GET
store/create -> create a new user => POST
delete -> delete user => DELETE
show -> show user => GET
update -> update user => PATCH or PUT
*/
