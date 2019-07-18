# Setup

## Pre-requisites

- node
- yarn
- docker

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
