import {Router} from 'express'
import {CategoryRepository} from '../../repositories/CategoryRepository'
import {CreateCategoryService} from '../../services/CreateCategoryService'

const categoriesRouter = Router()
const categoriesRepository = new CategoryRepository()

categoriesRouter.post('/', (req, res) => {
const {name, description} = req.body

const createCategoryService = new CreateCategoryService(categoriesRepository)

createCategoryService.execute({name, description})

  return res.status(201).send()
})

categoriesRouter.get('/', (req, res) => {

  const allCategories = categoriesRepository.list()
  return res.json(allCategories)
})

export {categoriesRouter}
