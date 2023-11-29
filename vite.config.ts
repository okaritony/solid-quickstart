import solid from "solid-start-netlify";
import netlify from "solid-start-netlify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: netlify() })],
});
