import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: ['dist/**/*entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(options);

export default dataSource;

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'sqlite',
//         database: 'db.sqlite',
//         entities: ['dist/**/*entity.js'],
//         migrations: ['dist/db/migrations/*.js'],
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
