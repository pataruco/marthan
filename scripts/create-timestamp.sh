#!/bin/bash

set -e pipefail

# Generate a timestamp in the format YYYY-MM-DDTHH:MM:SSZ
timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

rm .env || echo 'no .env'

echo VITE_PUBLIC_TIMESTAMP=$(date +%s) >> .env

echo 'Timestamp created ⏱'
