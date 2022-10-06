import fetch from "node-fetch";

export const fetchJoke = (): Promise<unknown> => {
  return fetch("https://official-joke-api.appspot.com/random_joke").then(
    (response) => response.json()
  );
};
