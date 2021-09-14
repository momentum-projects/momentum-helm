# Express

## Web serving intro

run `npm build --optimize` in your __Angular__ project directory. Then `cd dist/<projectname>`. From there, run `python3 -m http.server` (if that doesn't work, try removing the `3` from python and trying again)

Now, we're going to `curl` some files. Try: `curl http://localhost:8000/index.html`

## Minimal project

Make a new directory, and change into it

`mkdir express-mini-<name>; cd express-mini-<name>`

then:

`npm init`

Entry point: `index.js`

`npm install express`

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## Setup (using TypeORM to generate our project)

typeorm init --name linkback-david --database postgres --express
