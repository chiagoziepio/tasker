"use client";

import { Provider } from "react-redux";
import Store from "./Redux/Store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}
