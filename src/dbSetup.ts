import { Container } from 'typedi';
import {
  Connection,
  createConnection,
  useContainer,
  ConnectionOptions,
} from 'typeorm';
import { getEmojiLog } from './utils/getEmojiLog';
import { connectionOptions } from './config/config';

export const dbSetup = async (): Promise<Connection> => {
  console.log(getEmojiLog('🐬', 'Setting up database...'));
  useContainer(Container);

  const connection = await createConnection(
    connectionOptions as ConnectionOptions,
  ).catch(e => {
    console.error(e);
  });

  if (!connection) {
    throw new Error(getEmojiLog('💥', 'Failed to connect'));
  }

  console.log(getEmojiLog('🎉', 'Database connected!'));

  if (process.env.TYPEORM_SYNCHRONIZE === 'false') {
    console.log(getEmojiLog('🕺', 'Running migrations...'));

    if (!connection.migrations.length) {
      console.log(getEmojiLog('😱', 'No migrations to run'));
    }

    connection.migrations.forEach(migration => {
      console.log(getEmojiLog('🤔', `name: ${migration.name}`));
    });

    await connection.runMigrations({ transaction: 'none' });
    console.log(getEmojiLog('🎉', 'Migrations complete!'));
  }

  return connection;
};

export default dbSetup;
