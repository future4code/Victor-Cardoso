import { Router } from 'express';
import getBand from '../controller/band/getBand';
import registerBand from '../controller/band/registerBand';

const bandRoutes = Router();

bandRoutes.post('/bands', registerBand);
bandRoutes.get('/bands/search', getBand);

export default bandRoutes;
