import {Category} from '../model/Category'

interface ICreateCategoryDTO {
  name:string,
  description: string
}

class CategoryRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }
  create({name, description}: ICreateCategoryDTO): void {
    const category = new Category()

    //para acessar o const do category
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    this.categories.push(category)
  }
}

export {CategoryRepository}
