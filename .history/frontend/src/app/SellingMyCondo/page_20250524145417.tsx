"use client"

import DownloadPage from "@/components/downloadPage/downloadPage"


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Condo with Chris Musial | Halifax Real Estate",
  description:
    "Work with Chris Musial, a RE/MAX Nova agent, to sell your condo in Halifax, Nova Scotia. Expert strategies for a seamless and successful sale.",
  keywords: [
    "Chris Musial",
    "Sell condo Halifax",
    "Halifax real estate agent",
    "RE/MAX Nova condo sales",
    "Halifax condo market",
    "Real estate Halifax Nova Scotia",
  ],
  openGraph: {
    title: "Sell Your Condo with Chris Musial | Halifax Real Estate",
    description:
      "Chris Musial, a trusted RE/MAX Nova agent, offers professional services to sell your condo in Halifax, Nova Scotia, with tailored marketing and expertise.",
    url: "https://www.ChrisMusial.realtor/selling-condo",
    images: [
      {
        url: "https://www.ChrisMusial.realtor/chris-musial-selling-condo.png",
        width: 1200,
        height: 630,
        alt: "Sell Your Condo with Chris Musial | Halifax Real Estate",
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
        brochureImage="/chris-musial-selling-condo.png"
        pdfPath="chris-musial-selling-condo.pdf"/>
        </>
    )
}

export default Page