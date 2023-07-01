
export interface HttpClientInterfaceAdapter {

    get(url: string): Promise<any>;
}