# Backend README

## GraphQL Server Run Command
`npx ts-node index.ts`

## GraphQL Example Query

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ allProfiles { firstName, experience } }"}' \
http://localhost:4000/graphql
```