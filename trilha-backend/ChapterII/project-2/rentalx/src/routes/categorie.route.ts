import {Router} from 'express'
import {CategoryRepository} from '../../repositories/CategoryRepository'

const categoriesRouter = Router()
const categoriesRepository = new CategoryRepository()

 categoriesRouter.get('/', (req, res) => {
   return res.status(200).json().send()
 })

categoriesRouter.post('/', (req, res) => {
  const {name, description} = req.body

  categoriesRepository.create({name, description})

  return res.status(201).send()
})

export {categoriesRouter}
