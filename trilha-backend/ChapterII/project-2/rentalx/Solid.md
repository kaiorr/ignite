
## S.O.L.I.D
---
 - LSP - Liskov Substitution Principle
---

## No projeto

- Atualmente o repositório está na memória e para alterar esse comportamento em caso de alteração para um banco de dados.
  - Implementar um contrato entre o repositório e serviço através de uma interface:
      ```bash
      *import
        interface ICreateCategoryDTO {
          name: string
          description: string
        }

        interface ICategoriesRepository {
          findByName(name: string): Category
          list(): Category[]
          create({name: string, description: string}: ICategoryDTO): void
        }

   - Implementar por exemplo, PostgresCategoriesRepository:

          class PostgresCategoriesRepository implements ICategoriesRepository {
            findByName(name: string): Category {
              console.log(name)
              return null
            }
            list(): Category[] {
              return null
            }
            create({name: string, description: string}: ICreateCategoryDTO): void {
              console.log(name, description)
            }
          }

  - Implementar o subtipo no respositório CategoriesRepository

        class CategoriesRepositoru implements ICategoriesRepository


   - Implementar ICreateCategoryDTO no CreateCategoryService

          class CreateCategoryService {
            constructor (private categoriesRespository: ICategoriesRepository)
          }
    ```
