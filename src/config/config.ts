import dotenv from 'dotenv';

dotenv.config();

export const connectionOptions = {
  database: process.env.TYPEORM_DATABASE,
  type: process.env.TYPEORM_CONNECTION,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
};

export const serverConfig = {
  port: process.env.PORT,
};
