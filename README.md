<strong>BEGIN API</strong><br>
run `mkdir api`<br>
run `npm install json-server`<br>

edit package.json<br>
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

create file named `db.json`<br>

edit db.json<br>
```json
{
  "books": []
}
```
run`npm start`<br>
<strong>END API</strong></br>


then cd.. <br>
then cd client<br>

run`npm start`<br>
