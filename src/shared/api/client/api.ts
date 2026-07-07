export const api = {
    async get(url: string) {
        const response = await fetch(url);
        return response.json();
    },

    async post(url: string, body: unknown) {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        return response.json();
    }
}