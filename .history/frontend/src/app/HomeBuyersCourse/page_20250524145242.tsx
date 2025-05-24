

import DownloadPage from "@/components/downloadPage/downloadPage"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Chris Musial’s Home Buyer’s Course | Halifax Real Estate",
  description:
    "Download Chris Musial’s free Home Buyer’s Course to navigate the Halifax, Nova Scotia real estate market with confidence. Expert guidance from a RE/MAX Nova agent.",
  keywords: [
    "Chris Musial",
    "Home Buyer’s Course",
    "Halifax real estate guide",
    "Real estate Halifax Nova Scotia",
    "RE/MAX Nova agent",
    "Halifax home buying",
  ],
  openGraph: {
    title: "Download Chris Musial’s Home Buyer’s Course | Halifax Real Estate",
    description:
      "Get your free Home Buyer’s Course by Chris Musial, a RE/MAX Nova agent, to learn key strategies for buying a home in Halifax, Nova Scotia.",
    url: "https://www.ChrisMusial.realtor/download",
    images: [
      {
        url: "https://www.ChrisMusial.realtor/chris-musial-home-buyers-course.png",
        width: 1200,
        height: 630,
        alt: "Chris Musial’s Home Buyer’s Course | Halifax Real Estate Guide",
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
        brochureImage="/chris-musial-home-buyers-course.png"
        pdfPath="chris-musial-home-buyers-course.pdf"/>
        </>
    )
}

export default Page