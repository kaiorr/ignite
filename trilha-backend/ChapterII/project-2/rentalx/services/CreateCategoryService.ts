import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  // Dependency Inversion Principle
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlReadyExists = this.categoryRepository.findByName(name);

    if (categoryAlReadyExists) {
      throw new Error("Category already exists");
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
