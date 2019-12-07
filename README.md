<strong>BEGIN API</stron>
run `mkdir api`
run `npm install json-server`

edit package.json

``` json
{
  "name": "api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {"start": "json-server -p 3001 -w db.json"},
  "license": "MIT",
  "dependencies": {
    "json-server": "^0.15.1"
  }
}
```

create file named `db.json`

edit db.json
```json
{
  "books": []
}
```
run`npm start`
<strong>END API</stron>


then cd.. 
then cd client

run`npm start`
