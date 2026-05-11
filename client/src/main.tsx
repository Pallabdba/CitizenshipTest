import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { handleApiRequest } from "./lib/apiFetch";

// Intercept fetch so all /api/ calls are handled client-side (no backend needed)
const _fetch = window.fetch.bind(window);
window.fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : (input as Request).url;
  if (url.includes('/api/')) return handleApiRequest(url, init);
  return _fetch(input, init);
};

createRoot(document.getElementById("root")!).render(<App />);
