
export const tag = 'break';

export const schema = {
    title: 'pause',
    description: '',

    required: [],
    type: 'object',
    properties: {
        strength: {
            enum: [
                'none',
                'x-weak',
                'weak',
                'medium',
                'strong',
                'x-strong',
            ],
        },
        time: {
            type: 'integer',
            min: 0,
            max: 10000,
        },
    },
};

export const transform = props => {
    if ('time' in props) {
        const time = `${props.time}ms`;
        return { ...props, time };
    }

    return props;
};
