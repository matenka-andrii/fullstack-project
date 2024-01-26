// Tools
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
// Schemas
import clientsSchema from "./schemas/clients/clients.schema";
import projectsSchema from "./schemas/projects/projects.schema";

const linkSchema = makeExecutableSchema({
    typeDefs: `
        type Query {
            _: Boolean
        }    
    `,
});

let schema = mergeSchemas({
    schemas: [
        linkSchema,
        clientsSchema,
        projectsSchema,
    ],
});

export default schema;