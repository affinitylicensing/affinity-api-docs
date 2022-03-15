# Affinity Webhooks

Webhooks send you notifications about events that happen in the Affinity Gateway. Instead of setting up your application to poll an HTTP endpoint to check for a event, webhooks send your application an HTTP request when an event occurs.

For example, instead of repeatedly requesting the `/designs/{id}` endpoint for a given design to check if it has been reviewed, you may set up a webhook with the design.reviewed event to send a request to your own application at a specified URL, which processes that event.

Webhook Format
A webhook is a POST request to the configured URL with a JSON body in the following format:
```json
{
	"type": "design.reviewed",
	"created": "2017-05-31T13:08:06-07:00",
	"payload": {
	  ...
	}
}
```

## Configuring Webhook Settings
Assuming API access is enabled on your account, webhooks are configured in your
[account profile](https://affinity-gateway.com/profile/edit) section of the Affinity Gateway,
under the API tab.
 
In the Webhook URLs block, you may choose URL(s) to POST to for each event. You will need to set this
before processing webhooks.

## Verifying A Webhook
On each webhook request we send, we include an HMAC signature of the request.
You may optionally verify this signature to confirm that events are being sent from Affinity rather than a third party.

This signature is a SHA256 HMAC signature of the raw request body and the "Webhook Signature Key" listed in the API tab
of your [account profile](https://affinity-gateway.local/profile/edit).

## Triggering test webhook events

When working with the test environment ("stage"), you can trigger automatic design review and webhook events by
submitting the design with a special title. [See here for details](testing-design-phases.md).

## Event Types

| Event name | Description |
| ---------- | ----------- |
| `design.reviewed` | A review action has completed on a product design. Includes the design object. |


## Test Designs Webhook Requests

Designs will not be reviewed in the test environment as they would be in production. You can, instead, submit
designs and design iterations with specially-named titles that trigger automatic review in the test environment:

| Title | Review State |
| ---------- | ----------- |
| testing:AdminApproved | Approved by Affinity |
| testing:LicensorApproved | Approved By Licensor |
| testing:Hold | On Hold |
| testing:LicensorReview | Pending Licensor Review |
| testing:LicensorRejected | Rejected By Licensor |
| testing:AdminRejected | Rejected By Affinity |
| testing:RejectedFinal | Rejected without Resubmissions |
| testing:AdminApprovedWithChanges | Approved By Affinity With Changes |
| testing:LicensorApprovedWithChanges | Approved By Licensor With Changes |

A comprehensive list of design states with descriptions is available [here](design-phases.md). 