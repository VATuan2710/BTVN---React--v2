import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const schemaProduct = z.object({
  title: z.string().min(6, { message: "Tên sản phẩm cần tối thiểu 6 kí tự" }),
  price: z.number().positive(),
  description: z.string().optional(),
});
