import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
export default router;

/*
index -> List all users => GET
store/create -> create a new user => POST
delete -> delete user => DELETE
show -> show user => GET
update -> update user => PATCH or PUT
*/
