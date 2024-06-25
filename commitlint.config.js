module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "improve", // improvement
        "refactor", // code refactor
        "docs", // documentation
        "chore", // maintenance
        "style", // style
        "test", // test
        "revert", // commit revert
      ],
    ],
    "type-case": [2, "always", "lower-case"], // commit type must be lowercase
    "type-empty": [2, "never"], // commit type must not be empty
    "scope-empty": [2, "never"], // commit scope must not be empty
    "scope-enum": [
      2,
      "always",
      [
        "be", // be commits
        "fe", // fe commits
      ],
    ], // commit scope must not be empty
    "subject-empty": [2, "never"], // commit subject must not be empty
    "subject-full-stop": [2, "never", "."], // commit subject must not end with period
    "header-max-length": [2, "always", 72], // commit header must not exceed 72 characters
  },
};
