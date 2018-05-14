import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Batman', home: 'Gotham' },
    { id: 2, name: 'Superman', home: 'Metropolis' },
    { id: 3, name: 'Wonder Woman', home: 'Themyscira' },
    { id: 4, name: 'Flash', home: 'Central City' },
    { id: 5, name: 'Green Lantern', home: 'Coast City' }
    ];
    return {heroes};
  }
}