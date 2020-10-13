# Testing design review

Designs uploaded to the test environment are not ordinarily reviewed. This is inconvenient, as [webhook](webhooks.md) events are
triggered by review events, and listening for these events is necessary for most integrations.

In order to make writing and testing these integrations easier, it is possible for users to automatically trigger review
events based on the design title.

| Submitted Title                       |                   Automatic review |
| ------------------------------------- | ---------------------------------- |
| `testing:hold`                        | Hold                               |
| `testing:licensorreview`              | Pending Licensor Review            |
| `testing:licensorrejected`            | Rejected By Licensor               |
| `testing:adminrejected`               | Rejected by Affinity               |
| `testing:rejectedfinal`               | Rejected without Changes Permitted |
| `testing:adminapprovedwithchanges`    | Affinity Approved with Changes     |
| `testing:licensorapprovedwithchanges` | Licensor Approved with Changes     |
| `testing:adminapproved`               | Approved by Affinity               |
| `testing:licensorapproved`            | Approved by Licensor               |


By submitting a design with one of the above titles, the design is automatically moved into the corresponding
state, as if a user had reviewed it, and an appropriate webhook event is triggered.

The title is case-insensitive and whitespace-insensitive. This only works within the test environment (e.g., you cannot
force a design to be approved in the production environment).
