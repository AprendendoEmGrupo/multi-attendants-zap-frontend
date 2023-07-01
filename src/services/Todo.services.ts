import { HttpClientInterfaceAdapter } from "../adapters/HttpClientInterface.adapter";
import { TodoModel } from "../models/Todo.model";

export default class TodoService {

    private httpClient: HttpClientInterfaceAdapter;

    constructor(
        httpClient: HttpClientInterfaceAdapter
    ) {
        this.httpClient = httpClient
    }

    async getAll(): Promise<TodoModel[]> {
        const data = await this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
        return data.map((data: { [key: string]: any }) => {
            return {
                id: data.id,
                name: data.title,
                hasDone: data.completed
            }
        })
    }
}