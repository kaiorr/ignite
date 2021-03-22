import {Router} from 'express'
import {CategoryRepository} from '../../repositories/CategoryRepository'

const categoriesRouter = Router()
const categoriesRepository = new CategoryRepository()

categoriesRouter.post('/', (req, res) => {
  const {name, description} = req.body

  categoriesRepository.create({name, description})

  return res.status(201).send()
})

categoriesRouter.get('/', (req, res) => {

  const allCategories = categoriesRepository.list()
  return res.json(allCategories)
})

export {categoriesRouter}
