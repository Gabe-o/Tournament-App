#!/bin/bash

echo "Running migration commands"
flask db init
flask db upgrade

exec "$@"