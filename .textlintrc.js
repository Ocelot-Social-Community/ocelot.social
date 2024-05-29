module.exports = {
  rules: {
    'no-todo': true,
    'no-start-duplicated-conjunction': {
      interval : 2, // interval of sentences
    },
     'max-comma': false,
    /*'no-dead-link': {
      checkRelative: true,
      baseURI: null,
      ignore: ['http://localhost*'],
      preferGET: [],
      ignoreRedirects: false,
      retry: 3,
      userAgent: 'textlint-rule-no-dead-link/1.0',
      maxRetryTime: 10,
      maxRetryAfterTime: 90
    },*/
    'no-empty-section': true,
    'textlint-rule-no-empty-element': true,
    'period-in-list-item': false,
    '@textlint-rule/no-unmatched-pair': true,
    'no-zero-width-spaces': true,
    'doubled-spaces': true,
    'common-misspellings': {
      // Misspellings to be ignored (case-insensitive)
      ignore: ['Exemple'],
    },
    'write-good': false,
    'apostrophe': true,
  },
  filters: {
    comments: true,
  },
}
