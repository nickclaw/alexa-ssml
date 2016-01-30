import tv4 from 'tv4';
import omit from 'lodash/omit';

/**
 * Validates properties against a schema
 * @param {Object} props
 * @param {Object} schema
 * @return {Object} validated props
 */
export function validateProps(props, schema) {
    props = omit(props, 'children');
    const { error } = tv4.validateResult(props, schema, false, true);

    if (error) {
        if (error.dataPath)
            throw new Error(`Unknown property: ${error.dataPath.slice(1)}`);

        if (error.srcPath)
            throw new Error(`Invalid value for property ${error.srcPath.slice(1)}: ${error.message}`);

        throw new Error(error.message);
    }

    return props;
}
