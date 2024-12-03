import * as z from "zod";

export const schemaRegister = z
  .object({
    username: z.string().min(6),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(255),
    confirmPass: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(255),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Mật khẩu không trùng",
    path: ["confirmPass"],
  });
export const schemaLogin = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(255),
});
