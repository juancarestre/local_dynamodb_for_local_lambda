aws dynamodb --endpoint-url http://localhost:8000 create-table --table-name demo-customer-info --attribute-definitions AttributeName=customerId,AttributeType=S --key-schema AttributeName=customerId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
aws dynamodb put-item --endpoint-url http://localhost:8000 --table-name demo-customer-info --item '{\"customerId\": {\"S\": \"1111\"}, \"email\": {\"S\": \"email@something.com\"}}'