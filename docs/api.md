# API Documentation

The Affinity API is a paid service that exposes a
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)ful API to third-party customers to automate
actions such as design uploads.

JSON is returned by all API responses. All API requests must be made over HTTPS. HTTP requests will be ignored.

## Authentication

To make requests to the Affinity API, you must authenticate by including your secret API key
in the request.

Assuming API access is enabled on your account, you may read and reset your API key
in the [account profile](https://affinity-gateway.com/profile/edit) section of the
Affinity Gateway, under the API tab.

## Endpoint Documentation

Endpoints are documented by the [Affinity API specification](http://apidocs.affinitygateway.com/).

## Webhooks

[Webhook documentation is located here](webhooks.md).
