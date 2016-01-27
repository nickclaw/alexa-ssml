# alexa-ssml

> npm install alexa-ssml

Manipulate and validate the [subset of SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference) supported by the [Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)

### Example

```js
/** @jsx ssml */

import { ssml } from 'alexa-ssml';

const data = (
    <speak>
        Here is a number <w role="ivona:VBD">read</w> as a cardinal number:
        <sayAs interpretAs="cardinal">12345</sayAs>.
        Here is a word spelled out: <sayAs interpretAs="spell-out">hello</sayAs>.
    </speak>
);

const raw = data.toString();
```

### Caveats

 * Only supports [limited syntax](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
 * Only supports `camelCase` tag names and properties.
 * `<break />` -> `<pause />` due to javascript reserved words.
 * Must use with `transform-react-jsx` [babel plugin](https://babeljs.io/docs/plugins/transform-react-jsx/).
