import tv4 from 'tv4';

/**
 * Validates properties against a schema
 * @param {Object} props
 * @param {Object} schema
 * @return {Object} validated props
 */
export default function validateProps(props, schema) {
    const { children, ...itemProps } = props || {}; // TODO add child count validation too?
    const { error } = tv4.validateResult(itemProps, schema, false, true);

    if (error) {
        const { dataPath, srcPath, message } = error;

        if (dataPath) {
            throw new Error(`Unknown property: ${dataPath.slice(1)}`);
        }

        if (srcPath) {
            throw new Error(`Invalid value for property ${srcPath.slice(1)}: ${message}`);
        }

        throw new Error(message);
    }

    return itemProps;
}
