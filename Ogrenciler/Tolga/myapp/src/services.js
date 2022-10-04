/* const baseUrl = "http://localhost:3000";

export const apiService = async (path, method = "GET", data = null) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method,
    body: data && JSON.stringify(data),
  });

  return await response.json();
}; */

function request(url, method = "POST", data = false) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
    };
    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        "Content-Type": "application/json",
      };
    }
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export const get = (url) => request(url, "GET");
export const post = (url, data) => request(url, "POST", data);

export default request;
