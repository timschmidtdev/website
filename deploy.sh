#!/bin/bash

# Build the site
npm run build

# Copy CNAME to dist
cp CNAME dist/

echo "Build complete! The site is ready in the dist/ folder."
echo "To deploy: Copy contents of dist/ to the repo root and commit."
