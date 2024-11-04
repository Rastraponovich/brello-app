import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    settings: { react: { version: "18.3" } },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      "react/forbid-prop-types": 2,
      "react/no-array-index-key": 1,
      "react/forward-ref-uses-ref": 1,
      "react/destructuring-assignment": 1,
      "react/jsx-props-no-spread-multi": 1,
      "react/forbid-foreign-prop-types": 1,
      "react/no-access-state-in-setstate": 2,
      "react/jsx-no-constructed-context-values": 1,
      "react/checked-requires-onchange-or-readonly": 1,
      "react/jsx-no-target-blank": [0, { allowReferrer: true }],
      "react/hook-use-state": [2, { allowDestructuredState: true }],
      "react/jsx-no-useless-fragment": [1, { allowExpressions: true }],
      // "react/jsx-one-expression-per-line": [1, { allow: "non-jsx" }],
      "react/jsx-newline": [2, { prevent: true, allowMultilines: true }],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/button-has-type": [1, { button: true, submit: true, reset: true }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/jsx-sort-props": [1, { shorthandFirst: true, noSortAlphabetically: true }],
      "react/jsx-pascal-case": [1, { allowNamespace: true, allowLeadingUnderscore: true }],
      "react/jsx-closing-bracket-location": [1, { nonEmpty: "tag-aligned", selfClosing: "line-aligned" }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: ["function-declaration", "arrow-function"],
          unNamedComponents: ["function-declaration", "arrow-function"],
        },
      ],

      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/no-unsafe-enum-comparison": 0,
      "@typescript-eslint/consistent-type-definitions": 0,
      "@typescript-eslint/consistent-type-exports": 2,
      "@typescript-eslint/consistent-type-imports": 2,
    },
  },
);
