import {Router} from 'express'

const categoriesRouter = Router()

const categories = []

categoriesRouter.post('/categories', (req, res) => {
  const {name, description} = req.body

  categories.push({
    name,
    description
  })
  console.log(req.body)
  return res.status(201).json({message: "Created"}).send()
})

export {categoriesRouter}
