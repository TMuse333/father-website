

import DownloadPage from "@/components/downloadPage/downloadPage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Home with Chris Musial | Halifax Real Estate",
  description:
    "Partner with Chris Musial, a RE/MAX Nova agent, to sell your home in Halifax, Nova Scotia. Professional marketing and expert guidance for a successful sale.",
  keywords: [
    "Chris Musial",
    "Sell home Halifax",
    "Halifax real estate agent",
    "RE/MAX Nova home sales",
    "Halifax housing market",
    "Real estate Halifax Nova Scotia",
  ],
  openGraph: {
    title: "Sell Your Home with Chris Musial | Halifax Real Estate",
    description:
      "Chris Musial, a dedicated RE/MAX Nova agent, provides tailored services to sell your home in Halifax, Nova Scotia, with proven strategies and expertise.",
    url: "https://www.ChrisMusial.realtor/selling-home",
    images: [
      {
        url: "https://www.ChrisMusial.realtor/chris-musial-selling-home.png",
        width: 1200,
        height: 630,
        alt: "Sell Your Home with Chris Musial | Halifax Real Estate",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Chris Musial | Halifax Real Estate",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};


const Page = () => {


    return (
        <>
        <DownloadPage
        brochureImage="/chris-musial-selling-home.png"
        pdfPath="chris-musial-selling-home.pdf"/>
        </>
    )
}

export default Page