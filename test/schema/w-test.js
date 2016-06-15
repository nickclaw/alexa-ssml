import test from 'ava';
import ssml from '../../src';

test('role property must be present', t => {
    t.throws(() => <w>read</w>);
    t.deepEqual(<w role="ivona:VBD">read</w>, {
        tag: 'w',
        props: {
            role: 'ivona:VBD',
            children: ['read']
        }
    });
});

test('children must be present', t => {
    t.throws(() => <w role="ivona:VBD" />);
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
