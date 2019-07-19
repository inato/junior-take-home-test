# Related documentation

- Database: [pg](https://www.postgresql.org/docs/)
- SQL query builder: [knex](https://knexjs.org/)
- Web server: [express](https://expressjs.com/)
- API: [GraphQL](https://graphql.org/learn/) and [Relay](https://relay.dev/)
- UI: [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)

# Setup

## Pre-requisites

- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/lang/en/docs/install)
- [docker](https://docs.docker.com/install/)

## Install

### Install packages

```sh
yarn install
```

### Start database

```sh
docker-compose up -d
```

### Create database schema

```sh
yarn migrate
```

### Insert data

```sh
yarn insertData
```

### Print schema

```sh
yarn printSchema
```

### Compile queries

```sh
yarn relay
```

# Run in watch mode

```sh
yarn watch
```
