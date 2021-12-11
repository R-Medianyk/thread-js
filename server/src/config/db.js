import { ENV } from '../common/enums/enums';

const {
  DATABASE: database,
  USERNAME: username,
  PASSWORD: password,
  HOST: host,
  PORT: port,
  CLIENT: client,
  DEBUG: debug
} = ENV.DB;

const knexConfig = {
  client,
  connection: {
    user: username,
    port,
    host,
    database,
    password
  },
  migrations: {
    directory: '../data/migrations',
    tableName: 'knex_migrations'
  },
  debug
};

export { knexConfig };
