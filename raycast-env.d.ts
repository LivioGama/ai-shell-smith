/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Provider - AI provider to use */
  "provider": "openai" | "perplexity" | "ollama",
  /** OpenAI API Key - Required for OpenAI models. Get yours at https://platform.openai.com/api-keys */
  "apiKey"?: string,
  /** Perplexity API Key - Required for Perplexity. Get yours at https://www.perplexity.ai/api-platform */
  "perplexityApiKey"?: string,
  /** Context7 API Key - Optional. Fetches up-to-date documentation for better command generation. Get yours at https://context7.com/dashboard */
  "context7ApiKey"?: string,
  /** Web Search - Enable web search (uses GPT-5 Search, only for OpenAI) */
  "webSearch": boolean,
  /** OpenAI Model - Model to use when OpenAI is selected as provider */
  "openaiModel": "gpt-5.4-nano" | "gpt-5.4-mini",
  /** OpenAI URL - Base URL for OpenAI-compatible endpoints (leave empty for api.openai.com) */
  "openaiUrl"?: string,
  /** OpenAI Custom Model - Override model name when using custom OpenAI-compatible endpoints — takes priority if OpenAI URL is set */
  "openaiModelCustom"?: string,
  /** Ollama Model - Model to use when Ollama is selected as provider */
  "ollamaModel": "gpt-oss:20b-cloud" | "gpt-oss:120b-cloud",
  /** Ollama URL - Base URL for Ollama API — with or without /v1 */
  "ollamaUrl": string,
  /** Ollama API Key - Optional API key for authenticated Ollama instances */
  "ollamaApiKey"?: string,
  /** Terminal Application - Leave empty to auto-detect your default terminal */
  "terminal": "auto" | "Warp" | "iTerm2" | "Ghostty" | "WezTerm" | "Alacritty" | "Kitty" | "cmux" | "Terminal"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {
  /** Create a new Next.js project... */
  "prompt": string
}
}

