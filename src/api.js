import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
  timeout: 10000, // Add timeout to prevent hanging requests
  headers: {
    "Content-Type": "application/json",
  },
});

export const executeCode = async (language, sourceCode) => {
  try {
    if (!language || !sourceCode) {
      throw new Error("Language and source code are required");
    }

    if (!LANGUAGE_VERSIONS[language]) {
      throw new Error(`Unsupported language: ${language}`);
    }

    const response = await API.post("/execute", {
      language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          name: "main", // Add filename
          content: sourceCode,
        },
      ],
    });

    return response.data;
  } catch (error) {
    // Enhance error handling
    if (error.response) {
      throw new Error(
        `API Error: ${error.response.data.message || "Execution failed"}`
      );
    }
    throw error;
  }
};
