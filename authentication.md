# Authentication

## Steps

1. [Generate Tokens](https://github.com/momentum-projects/momentum-helm/commit/180cd328ed9d2fa462e9e2ee2478ff3696750039) __⚠️ - don't put your secret into Git like this, instaed you should store your secret in your environment file__

## Authentication Exercise

1. Add a call to our Frontend application to submit "login" credentials. 
1. upon retreiving the credentials, store them in a variable that gets used when you make the graphql query to get the profiles
1. Finally, add the bearer token authentication to the GraphQL Playground

## Packages

1. [Node JSON Web Token](https://github.com/auth0/node-jsonwebtoken)
1. [Express JWT](https://github.com/auth0/express-jwt#retrieving-the-decoded-payload)

## Resources

1. [Express GET/POST/BODY Params](https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters)
1. [JWT Decoder](https://jwt.io/)