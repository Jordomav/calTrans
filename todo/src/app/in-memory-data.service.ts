import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const lists = [
      { id: 1, task: 'Take out the trash', status: false },
      { id: 2, task: 'Clean the bathroom', status: false },
      { id: 3, task: 'Pay the bills', status: false },
      { id: 4, task: 'Take kids to school', status: false }
    ];

    return {lists};
  }
}