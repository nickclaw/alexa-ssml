import identity from 'lodash/identity';

export const tag = 'phoneme';

export const schema = {
    "title": "phoneme",
    "description": "",

    "type": "object",
    "required": [],
    "properties": {
        "alphabet": {
            "enum": [
                "ipa",
                "x-sampa",
                "nt-sampa"
            ]
        },

        "ph": {
            "type": "string"
        }
    }
}

export const transform = identity;
