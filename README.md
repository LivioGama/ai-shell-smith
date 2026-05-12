# AI Shell Smith

Create shell commands from natural language descriptions. Supports OpenAI, Perplexity, and Ollama, with optional Context7 integration for up-to-date documentation. Ships as both a Raycast extension and a standalone CLI.

## How it works

1. Type a natural language prompt: `rename a docker volume to hello`
2. AI Shell Smith generates the corresponding shell command
3. Copy to clipboard (`Cmd+Return`) or execute in Terminal (`Cmd+T`)

**⚠️ Always verify commands before executing — especially destructive ones.**

## Setup (Raycast)

### Quick Start

1. Install the extension from [Raycast Store](https://raycast.com) or build from source
2. Open preferences (`Cmd+,` → AI Shell Smith)
3. Add API key for your preferred provider

### Provider Setup

- **OpenAI**: Get key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Perplexity**: Get key at [perplexity.ai/api](https://www.perplexity.ai/api)
- **Ollama**: Run locally at `http://localhost:11434` or configure custom URL
- **Context7** (optional): Enhanced documentation lookup at [context7.com](https://context7.com)

## Features

- **Multiple Providers**: OpenAI (gpt-5.4-nano, gpt-5.4-mini, gpt-5-search), Perplexity (sonar-pro), Ollama (gpt-oss-20b, gpt-oss-120b)
- **Smart Caching**: In-memory LRU with 60s TTL — repeated prompts return instantly
- **Command History**: Persisted locally with keyboard shortcuts
- **Web Search**: Optional real-time web search via GPT-5 (OpenAI only)
- **Documentation Lookup**: Optional Context7 integration fetches latest docs before generation
- **Custom Endpoints**: Support for OpenAI-compatible APIs and self-hosted Ollama

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Copy Command | `Cmd+Return` |
| Execute in Terminal | `Cmd+T` |
| Delete from History | `Cmd+Shift+X` |
| Change Provider | `Cmd+L` |

## CLI Usage

For programmatic use or shell integration, AI Shell Smith includes a CLI:

```bash
OPENAI_API_KEY=sk-... bun run src/cli.ts "list files in current directory"
```

See [ENGINE.md](./ENGINE.md) for detailed CLI documentation and library integration.

## Architecture

- **engine.ts**: Core LLM integration and prompt conversion
- **cache.ts**: In-memory result caching
- **history.ts**: Command history management
- **context.ts**: System context detection

See [ARCHITECTURE.md](./ARCHITECTURE.md) for deep dive.

## Notes

- Minimum prompt length: 2 characters
- All API calls consume your provider's token quota
- History is stored locally in Raycast's storage
- Works on macOS only (uses AppleScript for Terminal integration)
