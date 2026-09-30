# Ralph Loop Runner

A lightweight Node.js runner that executes a self-improvement loop against the Anthropic Claude API. Designed for automated iteration in CI or local development environments.

## Overview

Ralph Loop Runner sends an initial prompt to Claude and logs the response. It is intended as a foundation for self-improving coding agents that can analyze and enhance their own capabilities within a controlled sandbox.

## Features

- Direct Anthropic Messages API integration (Claude 3.5 Sonnet)
- Configurable system prompt for self-improvement behavior
- Environment-variable based API key handling
- GitHub Actions workflow for automated execution on push or manual trigger

## Requirements

- Node.js 18 or later
- An Anthropic API key

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kmkirk83/Ralph-loop-runner.git
   cd Ralph-loop-runner
   ```

2. Set the Anthropic API key:

   ```bash
   export ANTHROPIC_API_KEY=your_api_key_here
   ```

3. Run the loop:

   ```bash
   node ralph-loop.js
   ```

## GitHub Actions

The included workflow (`.github/workflows/ralph-self-improve.yml`) runs the loop on every push to `main` or via manual dispatch. Store the API key as a repository secret named `ANTHROPIC_API_KEY`.

## Project Structure

```
.
├── ralph-loop.js                 # Main runner script
├── .github/workflows/
│   └── ralph-self-improve.yml    # CI workflow
└── README.md
```

## License

This project is provided as-is for personal and experimental use.
