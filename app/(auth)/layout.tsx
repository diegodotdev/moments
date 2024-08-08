import { ReactNode } from "react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=2518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="friends hanging out in a park"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 flex jsutify-start items-start w-full h-full p-10">
          <p className={cn(pacifico.className, "text-2xl")}>Moments</p>
        </div>
      </div>
      {children}
    </div>
  );
}
