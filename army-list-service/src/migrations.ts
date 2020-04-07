import dbSetup from './dbSetup';
import { getEmojiLog } from './utils/getEmojiLog';

const migration = async (): Promise<void> => {
  const connection = await dbSetup();

  if (process.env.TYPEORM_SYNCHRONIZE === 'false') {
    console.log(getEmojiLog('🕺', 'Running migrations...'));

    if (!connection.migrations.length) {
      console.log(getEmojiLog('😱', 'No migrations to run'));
    }

    connection.migrations.forEach(migration => {
      console.log(getEmojiLog('🤔', `name: ${migration.name}`));
    });

    await connection.query('PRAGMA foreign_keys=OFF;');
    await connection.runMigrations({ transaction: 'none' });
    await connection.query('PRAGMA foreign_keys=ON;');
    console.log(getEmojiLog('🎉', 'Migrations complete!'));
  }
};

migration();
