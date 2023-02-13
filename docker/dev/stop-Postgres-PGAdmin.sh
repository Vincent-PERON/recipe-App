#!/bin/bash

echo "Arret du docker PostgreSQL / PgAdmin"

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd ${__dir}
docker compose stop