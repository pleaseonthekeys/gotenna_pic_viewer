## install dependencies

```
npm install
```

## start dev server on http://localhost:3001

```
npm start
```

## build production

```
npm build:prod
```

## DB is hosted on the MongoDB Atlas

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

## readfile.js: ETL

Although there are only 50 documents in the collection provided, I wanted to share an ETL process I developed, in the event that the csv file contains much more data. On line 41

```
if (batch.length === 50)
```

, I would change that integer to something more suitable to the number of documents being loaded.

In `src/utils/transformCsv.js`, the 'filepath' property of the argument object can be adjusted to call a much larger csv for testing purposes

## improvements

- filter by size on the server side
- improve pagination ui
- split renderPhotosController into utility functions
- after setting filters, you currently need to refresh to clear filters
