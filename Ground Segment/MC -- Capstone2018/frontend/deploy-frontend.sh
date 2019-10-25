# Build and Deploy Angular Frontend
echo "Building Angular Frontend..."
(cd ./frontend/mission-ops ; ng build --prod --aot)
echo "Done"

echo "Pushing to AWS..."
aws s3 cp ./frontend/mission-ops/dist/mission-ops s3://western-cubesat-frontend --recursive
echo "Done"

read -p "Press Any Key To Continue"