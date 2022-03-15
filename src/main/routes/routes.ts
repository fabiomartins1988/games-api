/*import { Router } from 'express';

const router = Router();

export = router;*/

import { Router } from  'express'
import { gameController } from '../controller/game.controller'

const router: Router = Router()

router.get('/games', gameController.getGames)

export { router };