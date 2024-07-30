import { defineConfig } from "vite";

import solid from "vite-plugin-solid";
import tsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [solid(), tsconfigpaths()],
});
