# alexa-ssml [![Build Status](https://travis-ci.org/nickclaw/alexa-ssml.svg?branch=master)](https://travis-ci.org/nickclaw/alexa-ssml)

Manipulate and validate the [subset of SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference) supported by the [Alexa Skills Kit](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit)

> npm install alexa-ssml

* Only supports [limited syntax](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
* Camel case tag names and properties.
* `<break />` changed to `<pause />`
* Compatible with `transform-react-jsx` [babel plugin](https://babeljs.io/docs/plugins/transform-react-jsx/)


### Example

```js
import { ssml, renderToString } from 'alexa-ssml';

const tags = (
    <speak>
        Here is a number <w role="ivona:VBD">read</w> as a cardinal number:
        <sayAs interpretAs="cardinal">12345</sayAs>.
        Here is a word spelled out: <sayAs interpretAs="spell-out">hello</sayAs>.
    </speak>
);

const raw = renderToString(tags);
```

### Custom Elements

```js
import { ssml } from 'alexa-ssml';

function LongPause(props) {
    return <pause time={10000} />
}

const data = (
    <speak>
        Foo <LongPause /> bar.
    </speak>
)
```


### API

##### `ssml(tag, props, ...children) -> object`
 * `tag` can be  a string or function
 * Returns object like `{ tag, props, children }`

##### `renderToString(data, [options]) -> string`
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
