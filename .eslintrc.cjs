module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jest/recommended',
        'prettier',
    ],
    plugins: [
        'prettier',
        '@typescript-eslint',
        'jest',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ["coverage", "lib", "assets", ".github", "node_modules"],
    rules: {
        "import/no-unresolved": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off"
    },
};
