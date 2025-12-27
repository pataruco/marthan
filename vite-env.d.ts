type ViteTypeOptions = {};

interface ImportMetaEnv {
	readonly VITE_PUBLIC_TIMESTAMP: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
