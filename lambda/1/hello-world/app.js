const AWS = require('aws-sdk');

let endpoint
if (process.env.AWS_SAM_LOCAL) {
    endpoint = 'http://dynamodb-local:8000'
}

const ddb = new AWS.DynamoDB({ endpoint });
exports.lambdaHandler = async (event, context) => {
    var params = {
        TableName: 'demo-customer-info',
        Key: {
            customerId: {
                "S": "1111"
            },
        },
    };
    return ddb.getItem(params).promise()
        .then(data => data.Item)
        .catch(err => {
            console.log("Error", err);
            return err
        });
};