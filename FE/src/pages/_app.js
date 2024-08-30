import "@/styles/globals.css";
import { BasicLayout } from "@/Layout";
import { useRouter } from "next/router";
import { createContext, useRef } from "react";

export const DialogContext = createContext();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const btnRef = useRef();
  const layoutRoutes = ["/dashboard", "/records"];

  const isLayoutRoute = layoutRoutes.includes(router.pathname);

  return isLayoutRoute ? (
    <DialogContext.Provider value={{ btnRef }}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </DialogContext.Provider>
  ) : (
    <Component {...pageProps} />
  );
}
