import { Router } from 'express'
import TaskController from '../../controllers/task/task.controller'
import authMiddleware from '../../middleware/auth.middleware'

const taskRoutes = Router()

//taskRoutes.post('/', TaskController.store)
//taskRoutes.get('/', TaskController.index)
//taskRoutes.get('/:id', TaskController.show)
//taskRoutes.delete('/:id', TaskController.delete)
//taskRoutes.put('/:id', TaskController.update) // usamos o put para atualizar todos os campos


taskRoutes.get('/', authMiddleware, TaskController.index)
taskRoutes.get('/:id', authMiddleware, TaskController.show)
taskRoutes.post('/', authMiddleware, TaskController.store)
taskRoutes.put('/:id', authMiddleware, TaskController.update)
taskRoutes.delete('/:id', authMiddleware, TaskController.delete)

export default taskRoutes

