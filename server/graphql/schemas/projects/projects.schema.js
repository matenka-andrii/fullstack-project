// Tools
import { makeExecutableSchema } from "@graphql-tools/schema";
// Types
import commonTypes from "../../common.types";
import projectsTypes from "./projects.types";
// Resolvers
import projectsResolvers from "./projects.resolvers";

const projectsSchema = makeExecutableSchema({
    typeDefs: [commonTypes, projectsTypes],
    resolvers: projectsResolvers
});

export default projectsSchema;