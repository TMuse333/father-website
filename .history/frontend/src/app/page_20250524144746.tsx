import { Metadata } from "next";



import Homepage from "@/components/homepage/homepage";

export const metadata: Metadata = {
  title: "Chris Crowell | Real estate agent Halifax Nova Scotia",
  description: "Chris Crowell is a top remax nova real estate agent in halifax, nova scotia, with over a decade of sales experience. He is ready to help with all your real estate needs.",
  keywords: ["Chris Crowell", "Real estate agent Halifax Nova Scotia", "Real estate agent Halifax", "remax agent", "Sackville real estate agent"],
  openGraph: {
    title: "Chris Crowell | Real estate agent Halifax Nova Scotia",
    description: "Chris Crowell is a top remax nova real estate agent in halifax, nova scotia.",
    url: "https://www.chris-crowell.ca",
    images: [
      {
        url: "https://www.chris-crowell.ca/logo.png",
        width: 1200,
        height: 630,
        alt: "Chris Crowell | remax nova real estate agent halifax nova scotia"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'Chris Crowell | real estate agent halifax nova scotia'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest:'/site.webmanifest'
}

export default function Home() {






  return (
<Homepage/>
  );
}