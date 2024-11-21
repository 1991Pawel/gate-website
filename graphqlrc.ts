import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
	overwrite: true,
	documents: "src/graphql/*.graphql",
	generates: {
		"./src/gql/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
				fragmentMasking: false,
			},
		},
	},
	ignoreNoDocuments: true,
};

// eslint-disable-next-line import/no-default-export
export default config;
