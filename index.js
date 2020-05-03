const app = require('./src/utils/app');
const db = require('./src/utils/db');

const port = 3001;

async function initialize() {
  try {
    await db.connectDb();
    console.log('connected to database');
    app.listen(port, () => console.log(`App is listening on port ${port}`));
  } catch (e) {
    console.error('failed to initialize', e);
  }
}

initialize();
