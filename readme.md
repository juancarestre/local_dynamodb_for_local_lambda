start dynamodb local
'''
docker-compose -f .\docker-compose-dynamodb-local.yaml up 
'''

localexecution
'''
sam local invoke --docker-network localdynamodb_dynamodb-local-network HelloWorldFunction
'''