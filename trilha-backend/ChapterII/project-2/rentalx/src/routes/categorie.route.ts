import {Router} from 'express'
import {Category} from '../../model/Category'

const categoriesRouter = Router()

const categories: Category[] = []

 categoriesRouter.get('/', (req, res) => {
   return res.status(200).json().send()
 })

categoriesRouter.post('/', (req, res) => {
  const {name, description} = req.body
  const category = new Category()

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  categories.push(category)

  console.log(req.body)
  return res.status(201).json(category).send()
})

export {categoriesRouter}
