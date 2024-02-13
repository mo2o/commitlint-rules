module.exports = {
  plugins: [
    {
      rules: {
        'subject-no-triple-dot': ( parsed ) => {                    
          if (!parsed.subject) {
            // console.log('Parsed:', parsed); // Imprimir el valor de subject
            return [true, "No subject found, skipping validation"];
          }
          return [!parsed.subject.endsWith('.'), "subject may not end with full stop."];
        },
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
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'header-trim': [2, 'always'],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', 'chore',
        'ci', 'docs',
        'feat', 'fix',
        'perf', 'refactor',
        'revert', 'style',
        'test', 'hola'
      ]
    ],
    'subject-max-length': [2, 'always', 80],
    'subject-full-stop': [2, 'never', '.'],
    'subject-no-triple-dot': [2, 'never', '...'],
    'task-ref-id': [2, "always"]
  },
};
