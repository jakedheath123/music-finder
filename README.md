# Music Finder

## Overview
   
   A React application incorporating Apollo and GraphQL to query data from a third party RESTful API. This project has an express-graphql server with Node, along with a built schema of all GraphQL queries to allow data requests using the created queries in the React application. 
   
## Demo

![](demo.gif)
    
## Description
   
 Music Finder is an application that provides the user with an entire library of music artists at their fingertips, all from the Deezer music service provider. The top 10 most popular artists over the past week are displayed as soon as visiting the site, with the option to search for an artist of the users choosing. Upon clicking the artists picture the user is then taken to that artists own page, which includes their top 5 tracks with a preview of each, comments from fans all around the world and each album released to date. Albums can also be interacted with to display all the tracks present.
   
## Getting Started
These instructions will provide you with a copy of the project on your local machine.

### Prerequisites
      
Node.js version needs to be 12.13.1 or higher. 

React version needs to be 16.13.1 or higher.
      
Dependencies that need to be installed to run the application:

- Server
``` 
 axios: ^0.19.2
 concurrently: ^5.2.0
 cors: ^2.8.5
 express: ^4.17.1
 express-graphql: ^0.9.0
 graphql: ^15.2.0
```   
- Client
``` 
@apollo/react-hooks: ^3.1.5
@reach/router: ^1.3.4
@testing-library/jest-dom: ^4.2.4
@testing-library/react: ^9.5.0
@testing-library/user-event: ^7.2.1
apollo-boost: ^0.4.9
graphql: ^15.2.0
react: ^16.13.1
react-dom: ^16.13.1
react-scripts: 3.4.1
```   

### Installation
    
Using the command terminal, navigate to the directory where you want the repository to be saved. Make a clone of the project by copy/pasting the below in your terminal:
```
git clone https://github.com/jakedheath123/music-finder.git
```      
Move into the app folder like so:
```
cd music-finder
```
Install the project dependencies:
```
npm install
```
After installation, go into the `client` folder, then into the `src` folder, open `index.js` and change the following line from:
```
 uri: "/graphql"
```
to
```
 uri: "http://localhost:5000/graphql"
```

After that run command npm run dev as below and a test server will run on localhost:5000, and development environment for the React application on localhost:3000:
```
npm run dev
```
## Built With
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Express-GraphQL](https://github.com/graphql/express-graphql)
- [Axios](https://www.npmjs.com/package/axios)
- [Heroku](https://www.heroku.com/)
- HTML / HTML5
- Media Queries


## Links

Please click here for deployed website:
[Heroku](https://music-finder-project.herokuapp.com/)
        
## Authors
        
- Jake Heath - *Initial work* - [GitHub](https://github.com/jakedheath123)
        
