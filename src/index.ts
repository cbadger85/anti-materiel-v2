import 'reflect-metadata';
import dbSetup from './dbSetup';
import server from './server';
import { getEmojiLog } from './utils/getEmojiLog';
import { serverConfig } from './config/config';

export default (async function Main() {
  console.log(getEmojiLog('🔗', 'Initializing app...'));

  await dbSetup();

  const app = await server();

  app.listen(serverConfig.port, () => {
    console.log(
      getEmojiLog('👂', `App is listening on port: ${serverConfig.port}`),
    );
  });
})().catch(e => {
  console.log(getEmojiLog('🙀', 'app failed...'));
  console.error(e);
});
