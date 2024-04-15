"use client";
import { Provider as JotaiProvider } from "jotai";
import { Toaster } from "sonner";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <Toaster position="top-left" richColors />
      {children}
    </JotaiProvider>
  );
};
