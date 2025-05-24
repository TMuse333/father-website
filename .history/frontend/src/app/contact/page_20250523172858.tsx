```jsx
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Page = () => {
  useEffect(() => {
    // Load the Google Calendar scheduling button script dynamically
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const target = document.getElementById("calendar-scheduling-button");
      if (window.calendar?.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0d3w9lQnAOmDO8WqSxXcQx9metyuKm3qBr5aXp9yr3kuttTCpBs-T_Xpm-7fYIv4kySZIKcN9k?gv=true",
          color: "#039BE5",
          label: "Book an Appointment",
          target,
        });
      }
    };

    return () => {
      // Cleanup: Remove the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
        <title>Contact Chris Crowell | Halifax Real Estate Agent</title>
        <meta
          name="description"
          content="Schedule an appointment with Chris Crowell, a top RE/MAX Nova agent in Halifax, Nova Scotia, to discuss your real estate needs."
        />
      </Head>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div id="calendar-scheduling-button" />
      </motion.div>
    </>
  );
};

export default Page;
```