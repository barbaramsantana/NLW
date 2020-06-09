import express from 'express';

import PointsController from './controllers/pointsController';
import ItensController from './controllers/itensController';

//index, show, create, update, delete
const routes = express.Router();
const pointscontroller = new PointsController();
const itenscontroller = new ItensController();

routes.get('/itens', itenscontroller.index);

routes.post('/points', pointscontroller.create);
routes.get('/points', pointscontroller.index);
routes.get('/points/:id', pointscontroller.show);

export default routes;