import { SpecificationsRepository } from '..//modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '..//services/CreateSpecificationService'
import { Router } from 'express'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(specificationsRepository)

  createSpecificationService.execute({ name, description })

  return  res.status(201).send()
})

export { specificationsRoutes }
