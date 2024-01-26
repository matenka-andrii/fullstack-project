import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import mongoose from 'mongoose';
import schema from "./graphql";
import 'dotenv/config';

async function bootstrap() {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,
        csrfPrevention: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
        ],
    });

    await server.start();

    await mongoose.connect(process.env.MONGODB_URL,);

    app.use(
        '/graphql',
        cors(),
        bodyParser.json(),
        expressMiddleware(server),
    );

    const port = process.env.PORT ?? 5000;
    await new Promise((resolve) => httpServer.listen({ port }, resolve));

    console.log(`Server ready at http://localhost:${port}`);
}

bootstrap().catch(err => console.error(err));
