export interface ITransform {
    [key: string]: string | ITransform | Array<ITransform>;
}
