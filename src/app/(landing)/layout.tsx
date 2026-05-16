import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Takshino",
  description: "Thermally-integrated actuators for robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-full flex flex-col">{children}</div>;
}
