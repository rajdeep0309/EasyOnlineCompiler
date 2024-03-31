import axios from "axios";
import { LANGUAGE_VERSION } from "./Constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, user_input) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSION[language],
    files: [
      {
        content: sourceCode,
      },
    ],
    stdin:
      typeof user_input.target === "undefined" ? " " : user_input.target.value,
  });
  return response.data;
};
