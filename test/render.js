import test from 'ava';
import ssml from '../src/ssml';
import render from '../src/render';

test('renders a string from SSML', t => {
  const speech = (
    <speak>
      <s>This is a sentence with a pause <break time="2000ms"/></s>
      <s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s>
    </speak>
  );

  t.is(render(speech), '<speak><s>This is a sentence with a pause <break time="2000ms"/></s><s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s></speak>');
});
