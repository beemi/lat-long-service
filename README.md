# lat-long-service

Get Postcode details using https://expressjs.com/

# setup

```shell
npm install --save-dev babel-cli babel-preset-env jest supertest superagent
```

## routes

Get longitude and latitude from postcode

```shell
curl -X GET http://localhost:7000?postcode=SW1A 1AA
```

```shell
cur -X GET http://localhost:3000/postcode/SW1A 1AA
```

# tests

```shell
npm test
```

# Building your image

```shell
docker build -t lat-long-service .
```

## Your image will now be listed by Docker:
```shell
docker images
```

### Run the image
```shell
docker run -p 3000:3000 lat-long-service
```

## :e-mail: Contacts

Owner: [beemiraja@gmail.com](beemiraja@gmail.com)
