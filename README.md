# Context

In this take-home test, you have to improve a web application made of 3 main components:

- a front-end application, located in the [src](https://github.com/inato/junior-take-home-test/tree/master/src) directory, and executed in your browser
- a web server, located in the [api](https://github.com/inato/junior-take-home-test/tree/master/api) directory
- a relational database

# Setup

## Pre-requisites

- [git](https://git-scm.com/doc)
- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/lang/en/docs/install)
- [docker](https://docs.docker.com/install/)

## Install

### Install packages

```sh
yarn install
```

### Start database

You won't need to modify the database, but you need to start it to have some data to serve. In order to make things easier we created a docker container which hosts the database.

```sh
docker-compose up -d db
```

### Create database schema

This command initializes the database schema, it creates the tables and columns.

```sh
yarn migrate
```

### Insert data

This command insert some demo data in your database to ensure you'll get some results for your queries.

```sh
yarn insertData
```

### Export schema
This command exports the GraphQL schema to a file named `schema.graphql`

```sh
yarn exportSchema
```

### Compile queries

```sh
yarn relay
```

# Run in watch mode

## Using yarn
This command launches both the API and the front-end, and will restart them when one file changes.
This command also watches for changes in the graphQL schema and will export the new schema whenever it's needed.

```sh
yarn watch
```

## Using docker
This command launches a docker container with the PostgreSQL table used by the API

```sh
docker-compose up -d app
```

# Instructions

- [ ] Clone this repository (do **not** fork it)
- [ ] Implement the features described in the [issues](https://github.com/inato/junior-take-home-test/issues)
- [ ] Publish it on GitHub (or equivalent)
- [ ] Send us the link and tell us approximatively how much time you spent on this assignment

## Related documentation

You will find below the documentation related to each tool/framework/language used in our tech stack.
Please not that you **do not need to read all these docs before diving in the code**. Looking at existing code and occasionally
confirm assumptions by looking at the documentation should be enough for this take home test.
- Language: [TypeScript](https://www.typescriptlang.org/)
- Database: [pg](https://www.postgresql.org/docs/)
- SQL query builder: [knex](https://knexjs.org/)
- Web server: [express](https://expressjs.com/)
- API: [GraphQL](https://graphql.org/learn/) and [Relay](https://relay.dev/)
- UI: [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)
