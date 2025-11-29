module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "import",
        "simple-import-sort",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        /* ----------------------------------------------------------------
       基本設定 & コンソール
    ---------------------------------------------------------------- */
        "no-console": ["warn", { allow: ["warn", "error"] }],

        /* ----------------------------------------------------------------
       React関連
    ---------------------------------------------------------------- */
        "react/function-component-definition": [
            "error",
            { namedComponents: "arrow-function" },
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/self-closing-comp": "error",
        "react/jsx-no-leaked-render": [
            "error",
            { validStrategies: ["ternary"] },
        ],

        /* ----------------------------------------------------------------
       TypeScript & 命名規則
    ---------------------------------------------------------------- */
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/naming-convention": [
            "error",
            { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"],
            },
            { selector: "typeLike", format: ["PascalCase"] },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: { regex: "^I[A-Z]", match: false },
            },
        ],

        /* ----------------------------------------------------------------
       モジュール & Import
    ---------------------------------------------------------------- */
        "import/no-default-export": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/no-duplicates": "error",

        /* ----------------------------------------------------------------
       コード品質・保守性
    ---------------------------------------------------------------- */
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                ignore: [-1, 0, 1],
                ignoreArrayIndexes: true,
                enforceConst: true,
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
            },
        ],

        // 複雑度を制限 (if/for/while等のネストを12まで)
        complexity: ["error", { max: 12 }],

        // 1ファイルの最大行数を300行に制限
        "max-lines": [
            "error",
            { max: 300, skipBlankLines: true, skipComments: true },
        ],
    },
    overrides: [
        {
            files: ["src/pages/**/*.tsx", "src/app/**/*.tsx", "*.stories.tsx"],
            rules: {
                "import/no-default-export": "off",
                "max-lines": "off", // ストーリーファイルなどは長くなりがちなので例外
            },
        },
    ],
};
