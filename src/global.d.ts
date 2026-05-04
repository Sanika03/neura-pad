import { User } from "@/types/types";

declare module "*.css";

declare global {
    interface CustomJwtSessionClaims extends User {}
}

export {};