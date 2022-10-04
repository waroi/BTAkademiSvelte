function request(url, method = "POST", data = false) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
    };
    if (data) {
      options.body = JSON.stringify(data);
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
