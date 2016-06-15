# alexa-ssml [![Build Status](https://travis-ci.org/nickclaw/alexa-ssml.svg?branch=master)](https://travis-ci.org/nickclaw/alexa-ssml)

Manipulate and validate the [subset of SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference) supported by the [Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)

> npm install alexa-ssml

* Only supports [limited syntax](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
* Compatible with `transform-react-jsx` [babel plugin](https://babeljs.io/docs/plugins/transform-react-jsx/)

### Example

```js
import { ssml, render } from 'alexa-ssml';

const speech = (
    <speak>
        Here is a number <w role="ivona:VBD">read</w> as a cardinal number:
        <say-as interpret-as="cardinal">12345</say-as>.
        Here is a word spelled out: <say-as interpret-as="spell-out">hello</say-as>.
    </speak>
);

const ssmlString = render(speech);
```

### API

##### `ssml(tag, props, ...children) -> object`
 * `tag` can be  a string or function
 * Returns object like `{ tag, props, children }`

##### `render(tree, [options]) -> string`
 * Takes in object from `ssml` function
 * Must be wrapped in a `"speak"` tag
 * Supported options:
   * `pretty`, defaults to false. Makes the SSML easier to read.


### JSX Syntax

To use SSML JSX syntax directly in JavaScript add `/** @jsx ssml */` to the top of the file or configure `transform-react-jsx` using `.babelrc`:

```json
{
    "plugins": [
        ["transform-react-jsx", { "pragma": "ssml" }]
    ]
}
```
