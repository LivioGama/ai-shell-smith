export type ShellBuddyArguments = {
  prompt?: string;
};

export type CommandHistoryItem = {
  prompt: string;
  command: string;
};

export type KnownPrompts = {
  [prompt: string]: string;
};

export type CommandPreferences = {
  provider: "openai" | "ollama" | "perplexity";
  openaiModel: string;
  openaiModelCustom: string;
  ollamaModel: string;
  apiKey: string;
  perplexityApiKey: string;
  context7ApiKey: string;
  openaiUrl: string;
  ollamaUrl: string;
  ollamaApiKey: string;
  webSearch: boolean;
  terminal?:
    | "auto"
    | "Warp"
    | "iTerm2"
    | "Ghostty"
    | "WezTerm"
    | "Alacritty"
    | "Kitty"
    | "cmux"
    | "Terminal";
};

export type Context = {
  os: string;
  shell: string;
  cwd: string;
  repoRoot: string;
};
