import { prisma } from '@prisma/client';
import { Router } from 'express'
import { CreateClientController } from   '../modules/Create/CreateClientController';
import { ListClientController } from '../modules/List/ListClientController';
import {ListClientByIdController} from '../modules/ListById/ListClientByIdController';
import {DeleteClientByIdController} from '../modules/DeleteById/DeleteClientByIdController'
import { CreateDeliveryManController } from   '../modules/Create/CreateDeliveryManController';
import {DeleteDeliveryManByIdController} from '../modules/DeleteById/DeleteDeliveryManByIdController';
import { ListDeliveryManController } from '../modules/List/ListDeliveryManController';
import {ListDeliveryManByIdController} from '../modules/ListById/ListDeliveryManByIdController';
import { CreateEmployeeController } from   '../modules/Create/CreateEmployeeController';
import {DeleteEmployeeByIdController} from '../modules/DeleteById/DeleteEmployeeByIdController'
import { ListEmployeeController } from '../modules/List/ListEmployeeController';
import {ListEmployeeByIdController} from '../modules/ListById/ListEmployeeByIdController';

const routes = Router();


const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const listClientByIdController = new ListClientByIdController();
const deleteClientByIdController = new DeleteClientByIdController();
const createDeliveryManController = new CreateDeliveryManController();
const deleteDeliveryManByIdController = new DeleteDeliveryManByIdController();
const listDeliveryManController = new ListDeliveryManController();
const listDeliveryManByIdController = new ListDeliveryManByIdController();
const createEmployeeController = new CreateEmployeeController();
const deleteEmployeeByIdController = new DeleteEmployeeByIdController();
const listEmployeeController = new ListEmployeeController();
const listEmployeeByIdController = new ListEmployeeByIdController();

routes.post('/clients', createClientController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);
routes.post('/employee', createEmployeeController.handle);

routes.get("/client",listClientController.handle);
routes.get("/client/:id",listClientByIdController.handle);
routes.get("/deliveryman",listDeliveryManController.handle);
routes.get("/deliveryman/:id",listDeliveryManByIdController.handle);
routes.get("/employee",listEmployeeController.handle);
routes.get("/employee/:id",listEmployeeByIdController.handle);


routes.delete("/client/:id",deleteClientByIdController.handle);
routes.delete("/deliveryman/:id",deleteDeliveryManByIdController.handle);
routes.delete("/employee/:id",deleteEmployeeByIdController.handle);


export { routes }