import { PrismaClient } from "@prisma/client";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

const prisma = new PrismaClient();
const port = 4000;
const typeDefs = `
  type Profile {
    id: Int!
    experience: [String]
    firstName: String
    lastName: String
    title: String
    connections: [ProfileConnections]
  }

  type ProfileConnections {
    id: Int
    profile: Profile
    connection: Connection
    profileId: Int
    connectionId: Int
  }

  type Connection {
    id: Int!
    outboundId: Int
    inboundId: Int
    connections: [ProfileConnections]
  }

  type Query {
    allProfiles: [Profile!]!
  }

  type Query {
    oneProfile(id: Int!): Profile
  }

  type Query {
    getProfileConnections(profileId: Int!): [Connection]
  }

  type Query {
    getConnections(profileId: Int!): [Connection]
  }
`;

const resolvers = {
  Query: {
    allProfiles: () => {
      return prisma.profile.findMany();
    },
    oneProfile: (id: number) => {
      return prisma.profile.findUnique({
        where: {
          id: 1,
        },
      });
    },
    getProfileConnections: (profileId: number) => {
      return prisma.connection.findMany({
        where: {
          connections: {
            every: {
              profileId: { 
                equals: 1 
              },
            },
          },
        },
      });
    },
    getConnections: (profileId: number) => {
      return prisma.connection.findMany({
        where: {
          inboundId: {
            equals: 1,
          },
        },
      });
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
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(
    `🚂 Express is running on port http://localhost:${port}/graphql!`
  );
});
