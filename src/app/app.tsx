"use client";

import dynamic from "next/dynamic";
import { APP_NAME } from "~/lib/constants";
import Home from "./view/home";

// note: dynamic import is required for components that use the Frame SDK
const Demo = dynamic(() => import("~/components/Demo"), {
  ssr: false,
});

export default function App(
  { title }: { title?: string } = { title: APP_NAME }
) {

  return <Home />
}
