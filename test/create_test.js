const assert = require('assert');
const User = require ('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const rick = new User({ name: 'Rick' });

        rick.save()
            .then(() => {
                // Has Rick been saved succcessfully?
                assert(!rick.isNew);
                done();
            });
    });

});