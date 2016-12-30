import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

createDb() {
    let users = [
      {
        firstName: "Pesho",
        lastName: "Ivanov",
        email: "pesho@pesho.com",
        password: "pesho123"
      },
      {
        firstName: "Gosho",
        lastName: "Todorov",
        email: "gosho@gosho.com",
        password: "gosho123"
      },
      {
        firstName: "Ivan",
        lastName: "Ivanov",
        email: "ivan@ivan.com",
        password: "ivan123"
      }
    ];
    return {users};
  }
}
