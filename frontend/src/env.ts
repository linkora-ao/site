import { z } from "zod";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    SERVER_URL: z.url().optional(),
  },

  clientPrefix: "VITE_",

  client: {
    VITE_APP_NAME: z.string().default("Linkora Angola"),
    VITE_APP_DESCRIPTION: z.string().optional(),
    VITE_API_BASE_URL: z.string().default(""),
    VITE_API_TOKEN: z.string().min(1),
    VITE_API_TOKEN_FORM_WRITE_ACCESS: z.string().optional(),
    VITE_APP_URL: z.string().default("https://www.linkora.ao"),
  },

  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});
