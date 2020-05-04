# Installing-Dependencies

> Navigate to the root directory and run the following scripts to run locally

- `npm install` - install dependencies
- `npm start-dev` - start the server in production

## Technologies-Used

> Back-End

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [mongooseODM](https://mongoosejs.com/)

> Front-End

- [React.js](http://reactjs.org)
- [Redux](https://redux.js.org/)

# DB is hosted on the MongoDB Atlas

in the config directory, create a local.js file and include the following code:

```
module.exports = {
  server: {
    dbUri:
      'mongodb+srv://goTenna:<PASSWORD>@cluster0-e7mcp.mongodb.net/test?retryWrites=true&w=majority',
  },
};
```

The password is included in the email containing the link to this repo. Replace `<PASSWORD>` with that password

# readfile.js: ETL

Although there are only 50 documents in the collection provided, I wanted to share an ETL process I developed, in the event that the csv file contains much more data. On line 41

```
if (batch.length === 50)
```

, I would change that integer to something more suitable to the number of documents being loaded.

In `src/utils/transformCsv.js`, the 'filepath' property of the argument object can be adjusted to call a much larger csv for testing purposes.

To test this file's functionality, set up the DB connection to a different mongo server then, from the project's root directory run the command

```
node ./src/utils/transformCsv.js
```

# API

## Routes

> Listed are available routes that can be handled by the API.

| Request Type | Endpoint                         | Purpose                             | status |
| ------------ | :------------------------------- | :---------------------------------- | :----- |
| GET          | /gotenna/photos                  | finds all photos from DB unfiltered | 200    |
| GET          | /gotenna/photos?pageN={}&size={} | shows paginated photos              | 200    |
| GET          | /gotenna/photos?w={}&h={}        | filters photos based on dimensions  | 200    |

## query parameters

| key   |                  value                   |
| ----- | :--------------------------------------: |
| w     |               photo width                |
| h     |               photo height               |
| size  |   number of items to display per page    |
| pageN | which page of pagination to be displayed |

# Future Improvements

## frontend

- improve pagination component ui
- improve css especially for button, filter, and pagination alignment
- split renderPhotosController into utility functions
- after setting filters, you currently need to refresh to clear filters
- in order to paginate with 10 photos at a time, you first need to select a different number, then come back to 10
- in order to filter by 100 X 100, you first need to switch to different dimensions, then switch back
- the properties nested in redux store need to be fixed so that they are more accessible/readable
- add zoom functionality on each picture

## backend

- to properly scale this project, I would add multiple ec2 servers
- setup Docker Swarm for load balancing
- use Redis to cache recently loaded images
- add authentication, hashing user information from a `/users` endpoint

## testing

- add local unit and integration testing with artillery
- add load testing with loader.io
