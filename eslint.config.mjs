import eslint from "@eslint/js";
import tselint from "typescript-eslint";

export default tselint.config(
  eslint.configs.recommended,
  ...tselint.configs.recommended,
  {
    ignores: ["node_modules/**/*", "*.mjs", "ci/*.js", "dist/**/*", "tests"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        project: "/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ["src"],
  }
);
