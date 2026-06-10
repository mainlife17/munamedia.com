/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_YM_ID?: string;
  readonly PUBLIC_SANITY_PROJECT_ID?: string;
  readonly PUBLIC_SANITY_DATASET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  mmTrack?: (event: string, payload?: Record<string, unknown>) => void;
}
