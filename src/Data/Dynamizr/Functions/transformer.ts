import {IReturnedDatumInfo} from '../../../Unit/IReturnedDatumInfo';

const dataTransform = (format: any, target: any): any => {
    switch (typeof format) {
        case 'string':
            return target[format];
        case 'object':
            return Object.keys(format)
                .map((key) => ({key, data: dataTransform(format[key], target)}))
                .reduce((accm, curr) => ({ ...accm, [curr.key]: curr.data }), {});
        default:
            throw new Error('oh');
    }
};

const transform = (format: any, target: any) => {
    return Object.keys(target)
        .map((itemKey) => ({
            itemKey,
            data: Object.keys(target[itemKey])
                .map((id) => ({
                    id,
                    data: dataTransform(format[itemKey], target[itemKey][id]),
                }))
                .reduce((accm, curr) => ({ ...accm, [curr.id]: curr.data}), {}),
        }))
        .reduce((accm, curr) => ({ ...accm, [curr.itemKey]: curr.data}), {});
};

export default (dynaSchemaData: IReturnedDatumInfo, target: any) => ({ // TODO: Return Data Definition
    entities: transform(dynaSchemaData.transformerSchema, target.entities),
    result: target.result,
});
