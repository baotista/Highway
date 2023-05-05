import NextAuth from "next-auth";
import { authOptions } from "src/components /server/auth";

export default NextAuth(authOptions);
