import { PrismaClient } from "@prisma/client";
import express, { NextFunction, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import jwt from "express-jwt";
import QueryString from "qs";
import path from "path";

const expressPlayground =
  require("graphql-playground-middleware-express").default;

const prisma = new PrismaClient({
  log: ["query"],
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
    getConnections: (_: any, { profileId }: { profileId: number }) => {
      return prisma.connection.findMany({
        where: {
          connectedFromId: profileId,
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
    },
  },
  Connection: {
    connectedFromProfile: (parent: any) => {
      return prisma.profile.findUnique({
        where: {
          id: parent?.connectedFromId,
        },
      });
    },
    connectedToProfile: (parent: any) => {
      return prisma.profile.findUnique({
        where: {
          id: parent?.connectedToId,
        },
      });
    },
  },
  Mutation: {
    createProfile: async (
      _: any,
      data: {
        firstName: string;
        lastName: string;
        title: string;
        experience: string;
      }
    ) => {
      await prisma.profile.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          title: data.title,
          experience: [data.experience],
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
let corsOptions = {
  origin: process.env.CORS_ALLOW,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
dotenv.config();
const JWT_SECRET = Buffer.from(process.env.JWT_SECRET as string, "base64");

app.post("/login", express.json(), (req, res) => {
  if (req.body.email == "david" && req.body.password == "secret") {
    const userId = 1;
    const token = jsonwebtoken.sign({ sub: userId }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } else {
    res.sendStatus(401);
  }
});

const authenticationMiddleware = (
  req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>>,
  next: NextFunction
) => {
  if((req?.user as {sub: number})?.sub > 0) {
    next()
  } else {
    res.status(401).json({"error": "unauthorized"});
  }
};

app.use(
  "/graphql",
  jwt({ secret: JWT_SECRET, algorithms: ["HS256"], credentialsRequired: false }),
  authenticationMiddleware,
  graphqlHTTP({
    schema,
  })
);

app.get(
  "/playground",
  expressPlayground({
    endpoint: "/graphql/",
  })
);

const FRONTEND_PATH = __dirname + '/dist/'
app.use(express.static(FRONTEND_PATH));
app.get('*', function (_, response) {
  response.sendFile(path.resolve(FRONTEND_PATH + 'index.html'));
});

app.listen(port, () => {
  console.log(
    `Serving the GraphQL Playground on http://localhost:${port}/playground`
  );
});
