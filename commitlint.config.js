module.exports = {
  plugins: [
    {
      rules: {
        'task-ref-id': ({ subject }) => {
          if (!subject) {            
            return [true, "No subject found, skipping validation"];
          }
          const regex = /\#\d+/;
          return [
            regex.test(subject),
            "Your subject should include a redmine task reference, e.g. [#12345]",
          ];
        },
      }    
    }
  ],
  rules: {
    'body-full-stop': [0, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'body-empty': [0, 'never'],
    'body-max-length': [2, 'always', Infinity],
    'body-max-line-length': [2, 'always', 100],
    'body-min-length': [2, 'always', 10],
    'body-case': [2, 'always', 'sentence-case'],
    'footer-leading-blank': [2, 'always'],
    'footer-empty': [0, 'never'],
    'footer-max-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', 100],
    'footer-min-length': [2, 'always', 0],
    'header-case': [0, 'always', 'lower-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'header-min-length': [2, 'always', 0],
    'header-trim': [2, 'always'],
    'references-empty': [0, 'never'],
    'scope-enum': [0, 'always', []],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-max-length': [2, 'always', 10],
    'scope-min-length': [2, 'always', 3],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 70],
    'subject-min-length': [2, 'always', 20],
    'subject-exclamation-mark': [0, 'never'],
    'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [2, 'always', Infinity],
    'type-min-length': [2, 'always', 0],
    'signed-off-by': [0, 'always', 'Signed-off-by:'],
    'trailer-exists': [0, 'always', 'Signed-off-by:'],

    //custom rules
    'task-ref-id': [0, "always"]
  },
};
