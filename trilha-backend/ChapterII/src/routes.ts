import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "NODEJS",
    educator: "Kaio",
    duration: 11,
  })

  CreateCourseService.execute({
    name: "REACTJS",
    educator: "Kaio",
  })

  return response.json({message: "Funfou!"})
}
