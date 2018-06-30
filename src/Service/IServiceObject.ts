import { Set } from '../API/Set';
import Provider from '../Provider/Provider';

export interface IServiceObject {
    serviceName: string;
    apiSet: Set;
    provider: Provider | Provider[];
}
