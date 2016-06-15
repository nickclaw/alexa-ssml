import test from 'ava';
import ssml from '../../ssml';

test('accepts valid strength values', t => {
    t.deepEqual(<break strength="weak" />, {
        tag: 'break',
        props: {
            strength: 'weak'
        }
    });
});

test('does not accept invalid strength values', t => {
    t.throws(() => <break strength="invalid" />);
});

test('does not accept children', t => {
    t.throws(() => <break time={2000}>invalid</break>);
});

test('accepts time props specified as an integer', t => {
    t.deepEqual(<break time={2000} />, {
        tag: 'break',
        props: {
            time: 2000
        }
    });
});

test('accepts time props specified as a string', t => {
    t.deepEqual(<break time="2000" />, {
        tag: 'break',
        props: {
            time: '2000'
        }
    });
});

test('accepts time props specified with ms units', t => {
    t.deepEqual(<break time="2000ms" />, {
        tag: 'break',
        props: {
            time: '2000ms'
        }
    });
});

test('accepts time props specified with s units', t => {
    t.deepEqual(<break time="10s" />, {
        tag: 'break',
        props: {
            time: '10s'
        }
    });
});

test('does not accept time props specified with invalid units', t => {
    t.throws(() => <break time="10px" />);
});
