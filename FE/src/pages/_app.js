import "@/styles/globals.css";
import { DefaultLayout } from "@/layout";
import { useRouter } from "next/router";
import { createContext, useRef } from "react";

export const DialogContext = createContext()

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const recordBtnRef = useRef();
  const categoryBtnRef = useRef();

  const layoutRoutes = ["/dashboard", "/records"];

  const isLayoutRoute = layoutRoutes.includes(router.pathname);

  return isLayoutRoute ? (
    <DialogContext.Provider value={{ recordBtnRef, categoryBtnRef }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DialogContext.Provider>
  ) : (
    <DialogContext.Provider value={{ recordBtnRef, categoryBtnRef }}>
      <Component {...pageProps} />
    </DialogContext.Provider>
  )
}