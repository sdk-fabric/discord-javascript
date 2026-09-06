
# discord-javascript

This [SDK](https://github.com/sdk-fabric/discord-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/discord

## Usage

```typescript
const client = Client::build('[access_token]');

// Get a channel by ID.
const response = await client.channel().get("channel_id");

// Update a channel's settings.
const response = await client.channel().update("channel_id", new ChannelUpdate());

// Delete a channel, or close a private message.
const response = await client.channel().delete("channel_id");

// Returns all pinned messages in the channel as an array of message objects.
const response = await client.channel().getpins("channel_id");

// Create a new invite object for the channel.
const response = await client.channel().createinvite("channel_id", new ChannelInvite());

// Retrieves the messages in a channel.
const response = await client.message().getall("channel_id", "around", "before", "after", 1);

// Retrieves a specific message in the channel.
const response = await client.message().get("channel_id", "message_id");

// Post a message to a guild text or DM channel.
const response = await client.message().create("channel_id", new Message());

// Edit a previously sent message.
const response = await client.message().update("channel_id", "message_id", new Message());

// Delete a message.
const response = await client.message().remove("channel_id", "message_id");

// Crosspost a message in an Announcement Channel to following channels.
const response = await client.message().crosspost("channel_id", "message_id");

const response = await client.message().getreactionsbyemoji("channel_id", "message_id", "emoji", 1, "after", 1);

const response = await client.message().deleteallreactions("channel_id", "message_id");

// Returns the user object of the requester's account.
const response = await client.user().getcurrent();

// Returns a user object for a given user ID.
const response = await client.user().get("user_id");
```
