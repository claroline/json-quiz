var assert = require('./../../assert')('short-question');

describe('Short question', function () {
  describe('Schema', function () {
    describe('A short-answer question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.title': 'property .title is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

    });

    describe('The *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      it('must contain at least one solution', function () {
        assert.hasError('under-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
        });
      });

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });


          
        it('must have a *score* property', function () {
          assert.hasError('no-solution-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });

        it('must have a *value* property', function () {
          assert.hasError('no-solution-value', {
            '.solutions[0].value': 'property .value is required'
          });
        });

        describe('The value property', function () {
          it('must be a string', function () {
            assert.hasError('solution-value-is-not-a-string', {
              '.solutions[0].value': 'should be string'
            });
          });
        });

        describe('The score property', function () {
          it('must be a number', function () {
            assert.hasError('solution-score-is-not-a-number', {
              '.solutions[0].score': 'should be number'
            });
          });
        });
      });

    });
  });

  describe('Examples', function () {
    assert.areValid([
      'simple-input',
      'single-answer',
      'multiple-answers'
    ]);
  });
});
