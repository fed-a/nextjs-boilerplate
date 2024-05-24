const sonarjsRules = {
  "sonarjs/cognitive-complexity": ["error", 15],
  "sonarjs/prefer-single-boolean-return": "error",
  "sonarjs/max-switch-cases": ["error", 30],
  "sonarjs/no-duplicated-branches": "error",
  "sonarjs/no-collection-size-mischeck": "error",
  "sonarjs/no-extra-arguments": "error",
  "sonarjs/no-identical-conditions": "error",
  "sonarjs/no-identical-functions": ["error", 3],
  "sonarjs/no-ignored-return": "error",
  "sonarjs/no-inverted-boolean-check": "error",
  "sonarjs/no-nested-switch": "error",
  "sonarjs/no-nested-template-literals": "error",
  "sonarjs/no-one-iteration-loop": "error",
  "sonarjs/no-redundant-jump": "error",
  "sonarjs/non-existent-operator": "error",
  "sonarjs/no-unused-collection": "error",
  "sonarjs/prefer-while": "error",
  eqeqeq: ["error", "smart"],
  "prefer-rest-params": "error",
  "no-return-await": "error",
  "no-useless-catch": "error",
  "default-case-last": "error",
  "default-case": "error",
  "no-void": "error",
  "max-params": ["error", 3],
};

module.exports = {
  root: true,
  plugins: ["sonarjs", "boundaries", "prettier", "import", "jsx-a11y"],
  extends: [
    "next/core-web-vitals",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:boundaries/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
    "boundaries/elements": [
      {
        type: "app",
        pattern: "app/*",
      },
      {
        type: "core",
        pattern: "core/*",
      },
      {
        type: "pages",
        pattern: "services/*/pages/**",
        capture: ["service"],
      },
      {
        type: "widgets",
        pattern: "services/*/widgets/**",
        capture: ["service"],
      },
      {
        type: "features",
        pattern: "services/*/features/**",
        capture: ["service"],
      },
      {
        type: "entities",
        pattern: "services/*/entities/**",
        capture: ["service"],
      },
      {
        type: "shared",
        pattern: "services/*/shared/**",
        capture: ["service"],
      },
    ],
    "boundaries/ignore": ["**/*.test.*"],
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        pathGroups: [
          {
            group: "internal",
            position: "after",
            pattern: "~/app/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/core/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/pages/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/widgets/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/features/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/entities/**",
          },
          {
            group: "internal",
            position: "after",
            pattern: "~/shared/**",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            message:
              "antd/es/** is conflicting with jest, use antd/lib/** instead",
            group: ["antd/es/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/app/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/core/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/pages/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/widgets/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/features/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/entities/*/**"],
          },
          {
            message:
              "Private imports are prohibited, use public imports instead",
            group: ["**/shared/*/*/**"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/app"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/core"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/pages"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/widgets"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/features"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/entities"],
          },
          {
            message:
              "Prefer absolute imports instead of relatives (for root modules)",
            group: ["../**/shared"],
          },
        ],
      },
    ],
    "import/no-cycle": ["error", { maxDepth: 5 }],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["app"],
            allow: [
              "core",
              "pages",
              "widgets",
              "features",
              "entities",
              "shared",
            ],
          },
          {
            from: ["core"],
            allow: ["pages", "widgets", "features", "entities", "shared"],
          },
          {
            from: ["pages"],
            allow: [
              ["widgets", { service: "(${from.service}|common)" }],
              ["features", { service: "(${from.service}|common)" }],
              ["entities", { service: "(${from.service}|common)" }],
              ["shared", { service: "(${from.service}|common)" }],
            ],
          },
          {
            from: ["widgets"],
            allow: [
              ["features", { service: "(${from.service}|common)" }],
              ["entities", { service: "(${from.service}|common)" }],
              ["shared", { service: "(${from.service}|common)" }],
            ],
          },
          {
            from: "features",
            allow: [
              ["entities", { service: "(${from.service}|common)" }],
              ["shared", { service: "(${from.service}|common)" }],
            ],
          },
          {
            from: ["entities"],
            allow: [["shared", { service: "(${from.service}|common)" }]],
          },
          {
            from: ["shared"],
            allow: [
              "core",
              ["shared", { service: "(${from.service}|common)" }],
            ],
          },
        ],
      },
    ],
    "no-unused-vars": [2, { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "no-magic-numbers": [1, { enforceConst: true }],
    "no-implicit-coercion": [1, { allow: ["!!"] }],
    "import/prefer-default-export": "off",
    ...sonarjsRules,
  },
  ignorePatterns: ["/*.js", "/*.jsx", "/*.ts", "/*.tsx"],
  overrides: [
    {
      files: ["**/*.test.*"],
      rules: {
        "boundaries/element-types": "off",
      },
    },
    {
      files: ["./@types/*.ts"],
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
};
