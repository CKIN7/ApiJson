import express, { json } from 'express';
import { storeRouter } from './routes/storeRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 1234;
app.disable('x-powered-by');
app.use(json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
});

app.use('/api', storeRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT} `);
});
