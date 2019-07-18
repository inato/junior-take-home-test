import knex from "knex";
import config from "../knexfile";

export const queryBuilder = knex(config);
