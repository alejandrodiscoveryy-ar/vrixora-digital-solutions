export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

declare global {
  interface Window {
    __vrixoraPwaInstallPrompt?: BeforeInstallPromptEvent | null;
    __vrixoraPwaInstallInitialized?: boolean;
  }
}

export function initializePwaInstallPrompt() {
  if (
    typeof window === "undefined" ||
    window.__vrixoraPwaInstallInitialized
  ) {
    return;
  }

  window.__vrixoraPwaInstallInitialized = true;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    window.__vrixoraPwaInstallPrompt =
      event as BeforeInstallPromptEvent;
  });

  window.addEventListener("appinstalled", () => {
    window.__vrixoraPwaInstallPrompt = null;
  });
}

export function getPwaInstallPrompt() {
  if (typeof window === "undefined") return null;
  return window.__vrixoraPwaInstallPrompt ?? null;
}

export function clearPwaInstallPrompt() {
  if (typeof window !== "undefined") {
    window.__vrixoraPwaInstallPrompt = null;
  }
}
