// Tools
import { makeExecutableSchema } from "@graphql-tools/schema";
// Types
import commonTypes from "../../common.types";
import clientsTypes from "./clients.types";
// Resolvers
import clientsResolvers from "./clients.resolvers";

const clientsSchema = makeExecutableSchema({
    typeDefs: [commonTypes, clientsTypes],
    resolvers: clientsResolvers,
});

export default clientsSchema;