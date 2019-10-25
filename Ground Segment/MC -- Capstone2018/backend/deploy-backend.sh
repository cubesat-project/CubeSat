echo "Packaging Backend..."
sam package --output-template-file packaged.yaml --s3-bucket western-cubesat-backend
echo "Done"

echo "Deploying Backend..."
sam deploy --template-file packaged.yaml --stack-name cubesat-backend --capabilities CAPABILITY_IAM --region us-east-2
echo "Done"

read -p "Press Any Key To Continue"