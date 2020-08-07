#!/bin/bash

# Normally I wouldn't write anything in bash, but since this is a solo project, and I am working
# on my own, I took the short route.

yarn build
gcloud app deploy app.yaml
