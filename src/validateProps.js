import tv4 from 'tv4';
import omit from 'lodash/omit';

/**
 * Validates properties against a schema
 * @param {Object} props
 * @param {Object} schema
 * @return {Object} validated props
 */
export default function validateProps(props, schema) {
    const itemProps = omit(props, 'children'); // TODO add child count validation too?
    const { error } = tv4.validateResult(itemProps, schema, false, true);

    if (error) {
        if (error.dataPath) {
            const propName = error.dataPath.slice(1);
            throw new Error(`Unknown property: ${propName}`);
        }

        if (error.srcPath) {
            const propName = error.srcPath.slice(1);
            const reason = error.message;
            throw new Error(`Invalid value for property ${propName}: ${reason}`);
        }

        throw new Error(error.message);
    }

    return itemProps;
}
