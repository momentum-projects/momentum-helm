# Backend README

## Express Server Run Command

`npx ts-node index.ts`

## GraphQL Example Query

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ allProfiles { firstName, experience } }"}' \
http://localhost:4000/graphql
```

## Nested Query for Connections Testing

```graphql
query {
  getConnections(profileId: 1) {
    connectedToId
    connectedFromId
    connectedToProfile {
      connections {
        connectedToProfile {
          firstName
        }
      }
      firstName
    }
    connectedFromProfile {
      firstName
      connections {
        connectedToProfile {
          firstName
        }
      }
    }
  }
}
```
