echo "Regenerating directories from ./build..."

cd `dirname $0`
rm -rf _spec _data schemas
cp -R build/_spec .
cp -R build/_data .
cp -R build/schemas .