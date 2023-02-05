import "./globals.css";
import { Saira } from "@next/font/google";

const saira = Saira({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-monserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${saira.className} mx-32 my-12`}>{children}</body>
    </html>
  );
}
