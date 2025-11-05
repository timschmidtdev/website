#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Copying CNAME..."
cp CNAME dist/

echo "Removing old build files from root..."
# Remove old HTML and asset files, but keep source files
find . -maxdepth 1 -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -delete 2>/dev/null || true
rm -rf assets 2>/dev/null || true

echo "Copying new build files to root..."
cp -r dist/* .
cp dist/.* . 2>/dev/null || true

echo "Cleaning up..."
rm -rf dist

echo "✓ Deployment ready! You can now commit and push."
