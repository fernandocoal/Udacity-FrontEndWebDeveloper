# News Article NLP

A project to test my abilities on:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Instructions
### How to run
`cd` into your new folder and run:
- `npm install`
- `npm run build-dev` (for development mode)
- `npm run build-prod` (for production mode)
- App set up to run on localhost: 8080. Feel free to run in another localhost modifying the index/server.

## Configurations

2 webpack config files for both development modes as mentionned above.

There is also the package.json to manage the dependencies


#### Setting up the API

API coming from Text Analysis SDKs - aylien. To sign up and get your own API Key go [here](https://developer.aylien.com/signup).

- [ ] Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

#### Environment Variables
- [ ] In this project we set up ```npm install dotenv``` which contains the:
```

  - API_ID=**************************
  - API_KEY=**************************

