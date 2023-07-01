import axios from "axios";
import { HttpClientInterfaceAdapter } from "./HttpClientInterface.adapter";

export class HttpClientAdapter implements HttpClientInterfaceAdapter {

    async get(url: string): Promise<any> {
        const response = await axios.get(url);
        return response.data;
    }
    
    
}