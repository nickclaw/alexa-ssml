import test from 'ava';
import ssml from '../../src/ssml';

test('alphabet and ph properties must be present', t => {
    t.deepEqual(<phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>, {
        tag: 'phoneme',
        props: {
            alphabet: 'ipa',
            ph: 'pɪˈkɑːn',
            children: ['pecan']
        }
    });
});

test('children must be present', t => {
    t.throws(() => <phoneme alphabet="ipa" ph="pɪˈkɑːn" />);
});

test('alphabet property must be present', t => {
    t.throws(() => <phoneme ph="pɪˈkɑːn">pecan</phoneme>);
});

test('ph property must be present', t => {
    t.throws(() => <phoneme alphabet="ipa">pecan</phoneme>);
});

test('does not accept invalid alphabet values', t => {
    t.throws(() => <phoneme alphabet="invalid" ph="pɪˈkɑːn">pecan</phoneme>);
});
