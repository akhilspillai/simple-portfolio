export interface Resp {
  success: boolean;
}

export async function post<T>(
  formData: T
): Promise<Resp & Record<string, any>> {
  console.log("url", process.env.REACT_APP_API_URL);
  const response = await fetch(`${process.env.REACT_APP_API_URL}contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => (res.ok ? res.json() : getError(res)))
    .catch((err) => {
      console.error("Error", err);
      return Promise.resolve({ success: false, error: err.message });
    });
  return response;
}

async function getError(resp: Response) {
  console.error("Errored out:", await resp.text(), resp.status);
  return {
    success: false,
    error:
      "Sorry! We are unable to process your request right now. Please try again later.",
  };
}
