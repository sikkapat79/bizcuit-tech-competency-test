#!/bin/bash

set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $APP_USER WITH PASSWORD '$APP_PASSWORD';
  CREATE DATABASE $APP_DATABASE;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DATABASE TO $APP_USER;
EOSQL