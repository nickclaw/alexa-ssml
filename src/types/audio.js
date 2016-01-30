import identity from 'lodash/identity';

export const tag = 'audio';

export const schema = {
    "title": "audio",
    "description": "",

    "type": "object",
    "required": ["src"],
    "properties": {
        "src": {
            "type": "string",
            "pattern": "^https.*?"
        }
    }
}

export const transform = identity;
