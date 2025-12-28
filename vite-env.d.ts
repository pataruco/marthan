interface ImportMetaEnv {
  readonly VITE_PUBLIC_TIMESTAMP: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// GTM Types
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }

  function gtag(...args: unknown[]): void;
}

export {};
