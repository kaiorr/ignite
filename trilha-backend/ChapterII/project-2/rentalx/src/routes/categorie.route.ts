import {Router} from 'express'
import {v4 as uuidV4} from 'uuid'

const categoriesRouter = Router()

const categories = []

 categoriesRouter.get('/', (req, res) => {
   return res.status(200).json().send()
 })

categoriesRouter.post('/', (req, res) => {
  const {name, description} = req.body

  const category = {
    id: uuidV4(),
    name,
    description
  }

  categories.push(category)

  console.log(req.body)
  return res.status(201).json(category).send()
})

export {categoriesRouter}
