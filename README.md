# DiscordBot

A small Discord bot (commands-based) using discord.js. This repository contains the bot entrypoint (`index.js`), a command deployer (`deploy-commands.js`), and several example commands under `commands/utility/`.

## What this project contains

- `index.js` — bot entrypoint.
- `deploy-commands.js` — script to register slash commands with Discord (uses `config.json` for tokens).
- `config.json` — local configuration (bot token, clientId, guildId). **Do not commit this file with real tokens.**
- `commands/utility/` — example command files: `ping.js`, `server.js`, `user.js`.

## Prerequisites

- Node.js >= 16.9.0 (recommend Node 18+)
- npm (comes with Node)

This project uses `discord.js` (v14). Confirmed from `package.json`.

## Installation

1. Clone the repo (if you haven't already):

	 git clone https://github.com/veeoid/DiscordBot.git
	 cd DiscordBot

2. Install dependencies:

```bash
npm install
```

## Configuration

This project expects a `config.json` at the project root with at least the bot token and IDs. Do NOT commit your real token to source control. Example `config.json` (replace placeholders):

```json
{
	"token": "YOUR_BOT_TOKEN",
	"clientId": "YOUR_CLIENT_ID",
	"guildId": "YOUR_GUILD_ID"
}
```

Recommended: add `config.json` to `.gitignore` so you don't accidentally push secrets.

## Registering/updating slash commands

If the project contains `deploy-commands.js`, run it to register or update slash commands for your application (usually against the configured `guildId` when testing):

```bash
node deploy-commands.js
```

Watch the console output for success/failure messages.

## Running the bot

Start the bot with:

```bash
npm start
# or
node index.js
```

Check console logs for errors. If the bot doesn't appear online, verify the token in `config.json` and make sure the bot is invited to your server with the required scopes and permissions.

## Commands

Under `commands/utility/` you'll find examples:

- `ping.js` — reply with pong and latency
- `server.js` — server info
- `user.js` — user info

These are examples for the slash-command handler used by this project.

## Security & best practices

- NEVER commit your bot token. Treat it like a password.
- Consider using environment variables for production builds instead of a `config.json` file.
- Rotate your token immediately if it ever leaks.

## Troubleshooting

- "Invalid token" or auth errors: double-check `config.json` and ensure the token is valid.
- Commands not showing: re-run `node deploy-commands.js`, or wait a few minutes for global commands to propagate.
- Permission/intents issues: if you use privileged intents (like members), ensure they're enabled in the Developer Portal and requested when logging in.

## License

This repo uses the ISC license (see `package.json`).

## Notes

I read your `package.json` and `config.json` to tailor the README. I did not print any secrets here. If you'd like, I can:

- Add a `.gitignore` entry for `config.json` if it's not present
- Replace `config.json` usage with environment-variable support
- Add a CONTRIBUTING or quick tests/examples for commands

If you want any of those, tell me which and I'll implement them next.
