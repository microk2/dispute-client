## Installation

1)  [Node.js](https://nodejs.org/) v18.13.0 or above.
2)  Open a terminal and run ```npm install -g yarn``` to install Yarn packet manager.
3)  Run ```yarn install``` to install all dependencies.
4)  Copy the ```.env.txt``` file and remove the .txt ending of the new file. Fill in the fields that are missing with your settings.
5)  Build source files by using ```yarn run build```. Check package.json for more scripts.
6)  Start the server in development mode with ```yarn run start-dev``` or ```yarn run start-dev-full``` (the last one will also clean previous build files and build again the source)
7)  Start the server in production mode with ```yarn run start-prod``` or ```yarn run start-prod-full``` (the last one will also clean previous build files and build again the source)
8)  The main script getting the request is in src/index.ts

## Example webhook content

You will get an object having the structure of src/interfaces.ts IPartnerDisputePayload. Notice the ```?``` sign from some of the fields. This means the field may be possible missing so you have to check if it exists before using it.
Here is an example of a dispute object:
```
{
  dispute_id: "PP-R-TEST-1234567",
  create_time: "2023-08-23T15:48:02.042Z",
  update_time: "2023-08-23T15:53:26.059Z",
  event_type: "CUSTOMER.DISPUTE.CREATED",
  reason: "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
  status: "WAITING_FOR_SELLER_RESPONSE",
  messages: [
    {
      posted_by: "BUYER",
      time_posted: "2023-08-23T15:48:02.042Z",
      content: "I didn't receive my product!"
    },
    {
      posted_by: "SELLER",
      time_posted: "2023-08-24T15:48:02.042Z",
      content: "Thank you for contacting us. We will check what went wrong."
    },
    {
      posted_by: "BUYER",
      time_posted: "2023-08-25T15:48:02.042Z",
      content: "I want a refund."
    },
    {
      posted_by: "SELLER",
      time_posted: "2023-08-26T15:48:02.042Z",
      content: "We have refunded your money. Sorry for the inconvenience."
    },
  ],
  product_id: 173,
  product_name: "15000 Tokens",
  dispute_amount: "10.00",
  dispute_currency: "EUR",
  payer_id: "TST12345",
  payer_email: "test@test.com",
  code: "TSTCODE12345",
  code_used: 1
}
```
