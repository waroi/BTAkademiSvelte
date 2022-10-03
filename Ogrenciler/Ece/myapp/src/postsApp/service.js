const baseUrl = "https://jsonplaceholder.typicode.com";

export const apiService = (async (path, method = "GET", data = null) => {
    const response = await fetch(`${baseUrl}/${path}`, {
        method,
        body: data && JSON.stringify(data)
    });

    return await response.json()

})