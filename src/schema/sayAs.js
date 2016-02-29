export const tag = 'say-as';

export const schema = {
    title: 'sayAs',
    description: '',

    type: 'object',
    required: [],
    properties: {
        interpretAs: {
            enum: [
                'characters',
                'spell-out',
                'cardinal',
                'number',
                'ordinal',
                'digits',
                'fraction',
                'unit',
                'date',
                'time',
                'telephone',
                'address',
            ],
        },

        format: {
            enum: [
                'mdy',
                'dmy',
                'ymd',
                'md',
                'dm',
                'ym',
                'my',
                'd',
                'm',
                'y',
            ],
        },
    },
};
