import Navbar from "@/Components/Navbar";
import { App } from "./App";
import "./globals.css";

export const metadata = {
  title: "Ramlam",
  description: "Fantaro ny taninao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <App>
            <Navbar />
            {children}
          </App>
        </main>
      </body>
    </html>
  );
}
