/// <reference types="vite/client" />

interface ImportMetaEnv {
  // define env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob: (
    pattern: string,
    options?: {
      eager?: boolean;
      as?: string;
      import?: string;
      query?: string;
    }
  ) => Record<string, () => Promise<any>>;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}