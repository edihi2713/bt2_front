import { getAsyncResult } from "../utils/getAsyncResults";

export const genericGetService = async (url) =>  {
    return await getAsyncResult(fetch(url));
}

export const genericPostService = async (url, payload) =>  {
  return await getAsyncResult(fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  }));
}
