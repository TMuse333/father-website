import { Metadata } from "next";



import Homepage from "@/components/homepage/homepage";

xport const metadata: Metadata = {
  title: "Chris Musial | Halifax Real Estate Agent",
  description:
    "Chris Musial is a dedicated RE/MAX Nova real estate agent in Halifax, Nova Scotia, offering personalized services for buying, selling, and investing in properties.",
  keywords: [
    "Chris Musial",
    "Halifax real estate agent",
    "Real estate Halifax Nova Scotia",
    "RE/MAX Nova agent",
    "Halifax property services",
  ],
  openGraph: {
    title: "Chris Musial | Halifax Real Estate Agent",
    description:
      "Explore professional real estate services with Chris Musial at RE/MAX Nova in Halifax, Nova Scotia, for all your property needs.",
    url: "https://www.ChrisMusial.realtor",
    images: [
      {
        url: "https://www.ChrisMusial.realtor/father-header.png",
        width: 1200,
        height: 630,
        alt: "Chris Musial | RE/MAX Nova Real Estate Agent Halifax",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Chris Musial | Halifax Real Estate Agent",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function Home() {






  return (
<Homepage/>
  );
}