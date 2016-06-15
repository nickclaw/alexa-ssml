# alexa-ssml [![Build Status](https://travis-ci.org/nickclaw/alexa-ssml.svg?branch=master)](https://travis-ci.org/nickclaw/alexa-ssml)

Manipulate and validate the [subset of SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference) supported by the [Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit). Compatible with `transform-react-jsx` [babel plugin](https://babeljs.io/docs/plugins/transform-react-jsx/).

```bash
$ npm install alexa-ssml
```

### Example

```js
import ssml, { render } from 'alexa-ssml';

const speech = (
    <speak>
        Here is a number <w role="ivona:VBD">read</w> as a cardinal number:
        <say-as interpret-as="cardinal">12345</say-as>.
        Here is a word spelled out: <say-as interpret-as="spell-out">hello</say-as>.
    </speak>
);

const str = render(speech);
```

### API

##### `ssml(tag, props, ...children) -> object`
 * `tag` must be a string
 * Returns object like `{ tag, props: { children } }`

##### `render(tree) -> string`
 * Takes in object from `ssml` function
 * Must be wrapped in a `speak` tag


### JSX Syntax

To use SSML JSX syntax directly in JavaScript add `/** @jsx ssml */` to the top of the file or configure `transform-react-jsx` using `.babelrc`:

```json
{
    "plugins": [
        ["transform-react-jsx", { "pragma": "ssml" }]
    ]
}
```
