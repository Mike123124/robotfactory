import { PropsWithChildren } from "react";

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="h-40 text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-white truncate select-none ">{children}</h1>
}
