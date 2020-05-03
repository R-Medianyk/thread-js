import { Router } from 'express';
import * as authService from '../services/auth.service';
import * as userService from '../services/user.service';
import authenticationMiddleware from '../middlewares/authentication.middleware';
import registrationMiddleware from '../middlewares/registration.middleware';
import jwtMiddleware from '../middlewares/jwt.middleware';

const router = Router();

// user added to the request (req.user) in a strategy, see passport config
router
  .post('/login', authenticationMiddleware, (req, res, next) => authService.login(req.user)
    .then(data => res.send(data))
    .catch(next))
  .post('/register', registrationMiddleware, (req, res, next) => authService.register(req.user)
    .then(data => res.send(data))
    .catch(next))
  .get('/user', jwtMiddleware, (req, res, next) => userService.getUserById(req.user.id)
    .then(data => res.send(data))
    .catch(next));

export default router;
