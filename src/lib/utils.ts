import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatApiError = (error: any): string => {
  if (error.response) {
    return error.response.data?.message || "Errp inesperado no servidor.";
  }

  return "Erro de conexão. Verifique sua internet.";
};
