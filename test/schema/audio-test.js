import test from 'ava';
import ssml from '../../src/ssml';

test('src property must be present', t => {
    t.throws(() => <audio />);
});

test('src property must be https', t => {
    t.throws(() => <audio src="http://invalid.mp3" />);
    t.deepEqual(<audio src="https://valid.mp3" />, {
        tag: 'audio',
        props: {
            src: 'https://valid.mp3'
        }
    });
});

test('does not accept children', t => {
    t.throws(() => <audio src="https://valid.mp3">invalid</audio>);
});
