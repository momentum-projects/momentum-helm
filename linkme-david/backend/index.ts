import { PrismaClient } from "@prisma/client";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

const prisma = new PrismaClient();
const port = 4000
const typeDefs = `
  type Profile {
    id: Int!
    experience: [String]
    firstName: String
    lastName: String
    title: String
  }

  type Query {
    allProfiles: [Profile!]!
  }
`;

const resolvers = {
  Query: {
    allProfiles: () => {
      return prisma.profile.findMany();
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(port, () => {
  console.log(`🚂 Express is running on port ${port}!`)
});
