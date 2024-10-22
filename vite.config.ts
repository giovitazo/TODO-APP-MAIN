import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./", // This ensures that all paths are relative to the current HTML file's location
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"), // Ensure to use 'resolve' to create the correct path
		},
	},
	plugins: [react()],
});
