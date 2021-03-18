import express from 'express'
import {categoriesRouter} from './routes/categorie.route'

const app = express()

app.use(express.json())
app.use(categoriesRouter)


app.listen(3333, () => console.log("Server is running"))
