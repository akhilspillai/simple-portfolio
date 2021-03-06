export interface Resp {
  error?: string;
}

export async function post<T, U>(url: string, formData: T): Promise<Resp & U> {
  const baseUrl = process.env.REACT_APP_BASE_URL || "";
  const response = await fetch(`${baseUrl}api/v1${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .catch((err) => {
      return Promise.resolve({
        error: `Sorry! We are unable to process your request right now: ${err.message}`,
      });
    });
  return response;
}
