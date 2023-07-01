## About 

The frontend of multi attendance zap project.

## Instructions to run project

- Clone project
- Execute command **npm i** to install all modules the project needs.
- Execute command **npm run dev** to run application dev mode.
- Execute command **npm run build** to build project to deploy code in production. TIP: After executed command is generated directory *dist/* where you have all code to deploy in production.
- Execute command **npm run test** to run tests in project.


## The project structure

```
- tests/          -> Where you find tests code.
- src/
    - adapters/   -> Where you find code interact external services our libs. For example: firebase(firestore) in this application is websocket server put one moment you need change for another solution you can do this more simple.
    - assets/     -> Where you find static files like: css and images
    - components/ -> Where you find React.js components of application can be reused for 2 or more components.
    - models/     -> Where you find types or class represent you data model in React.js application.
    - pages/      -> Where you find React.js component represent one page in application. For example: login page.
    - services/   -> Where you find code responsable interact api and external service. TIP: services sometimes can use code in *adapters* directory. 
    - routes.tsx  -> Where you find code responsable set routes in React.js application.
```


## How to work with Git and Github

- Branch **master** code go to production
- Branch **staging** code go to staging. Warn: in future can have staging environment to validate if feature is ok before send production.
- Branch **develop** all new feature created based this branch.

### Rules 

- To write commit message in english
- Never send your directly to branchs: **master**, **staging** and **develop**
- Always you complete your feature open pull request to branch **develop**
- When create branch for new feature you need use this pattern: feature/shor_description_about_task


## Links helpful

| About  |  Language | Links  | 
|---     |---        |---     |
|   Adapter pattern     |    English       |    [Click here](https://refactoring.guru/design-patterns/adapter/typescript/example)    |



