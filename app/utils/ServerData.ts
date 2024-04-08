type serverDataType = { path: string, revalidate?: number }
type getParams = { body: object }


class ServerData {
    private uri: string;
    private revalidate: number;

    constructor(params: serverDataType) {
        this.uri = process.env.NEXT_PUBLIC_TEST_DB ? `${process.env.NEXT_PUBLIC_SERVER}/${params.path}?testDb=${process.env.NEXT_PUBLIC_TEST_DB}` : `${process.env.NEXT_PUBLIC_SERVER}/${params.path}`
        this.revalidate = params.revalidate ?? 3600;
    }

    async get(params: getParams = { body: {} }): Promise<Response> {
        const res = await fetch(this.uri, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ apiKey: process.env.NEXT_PUBLIC_DB_KEY, ...params.body }),
            next: { revalidate: this.revalidate }
        });

        return res;
    }

}

export { ServerData }