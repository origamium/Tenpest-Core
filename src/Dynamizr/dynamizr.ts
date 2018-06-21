import normalizer from './Functions/normalize';
import transformer from './Functions/transform';

export default (schema, data) => (
    transformer(schema, normalizer(schema, data))
);
