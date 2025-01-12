import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3),
});

export const userSchema2 = z.object({
  email: z.string().email(),
});
