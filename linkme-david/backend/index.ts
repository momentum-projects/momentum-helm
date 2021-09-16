import { PrismaClient } from "@prisma/client";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
const expressPlayground = require('graphql-playground-middleware-express')
  .default

const prisma = new PrismaClient({
  log: ["query"]
});
const port = 4000;
const typeDefs = `
  type Profile {
    id: Int!
    experience: [String]
    firstName: String
    lastName: String
    title: String
    connections: [Connection]
    incomingConnections: [Connection]
  }

  type Connection {
    connectedFromProfile: Profile
    connectedFromId: Int
    connectedToProfile: Profile
    connectedToId: Int
  }

  type Query {
    allProfiles: [Profile!]!
  }

  type Query {
    oneProfile(id: Int!): Profile
  }

  type Query {
    getConnections(profileId: Int!): [Connection]
  }

  type Mutation {
    createProfile(firstName: String, lastName: String, title: String, experience: String): Profile
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
    getConnections: (_: any, { profileId }: { profileId: number } ) => {
      return prisma.connection.findMany({
        where: {
          connectedFromId: profileId
        },
      });
    },
  },
  Profile: {
    connections: (parent: any) => {
      return prisma.profile
        .findUnique({
          where: { id: parent?.id },
        })
        .connections();
      }
  },
  Connection: {
    connectedFromProfile: (parent: any) => {
      return prisma.profile
        .findUnique({
          where: {
            id: parent?.connectedFromId,
          },
        });
      },
    connectedToProfile: (parent: any) => {
      return prisma.profile
        .findUnique({
          where: {
            id: parent?.connectedToId,
          },
        });
      },
  },
  Mutation: {
    createProfile: async (_:any, data: { firstName: string, lastName: string, title: string, experience: string }) => {
      await prisma.profile.create({ data: {
        firstName: data.firstName,
        lastName: data.lastName,
        title: data.title,
        experience: [data.experience]
      }});
    }
  }
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

app.get(
  '/playground',
  expressPlayground({
    endpoint: '/graphql/',
  }),
)

app.listen(port, () => {
  console.log(
    `Serving the GraphQL Playground on http://localhost:${port}/playground`,
  )
});
