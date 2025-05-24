
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "670314781946-ml15m28j9gqnmte1d057vaamrnjj1rui.apps.googleusercontent.com",
  apiKey: "AIzaSyD_bLXNr5Uv9KskU-CtXy5zF9CN487wJFI",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
};

const apiCalendar = new ApiCalendar(config);

const ContactPage = () => {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuthClick = async () => {
    try {
      setLoading(true);
      await apiCalendar.handleAuthClick();
      setIsSignedIn(true);
      fetchEvents();
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignoutClick = () => {
    apiCalendar.handleSignoutClick();
    setIsSignedIn(false);
    setEvents([]);
  };

  const fetchEvents = async () => {
    try {
      const response = await apiCalendar.listUpcomingEvents(10);
      const formattedEvents = response.result.items.map((event) => ({
        id: event.id,
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const createEvent = async () => {
    const event = {
      summary: "Consultation with Chris Crowell",
      description: "Real estate consultation session",
      start: {
        dateTime: new Date(new Date().getTime() + 3600000).toISOString(), // 1 hour from now
        timeZone: "America/Halifax",
      },
      end: {
        dateTime: new Date(new Date().getTime() + 7200000).toISOString(), // 2 hours from now
        timeZone: "America/Halifax",
      },
    };

    try {
      setLoading(true);
      const result = await apiCalendar.createEvent(event);
      console.log("Event created:", result);
      fetchEvents(); // Refresh events
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check initial sign-in status
    apiCalendar.onLoad(() => {
      apiCalendar.listenSign((sign) => {
        setIsSignedIn(sign);
        if (sign) fetchEvents();
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Contact Chris Crowell | Halifax Real Estate Agent</title>
        <meta
          name="description"
          content="Schedule a consultation with Chris Crowell, a top RE/MAX Nova agent in Halifax, Nova Scotia, to discuss your real estate needs."
        />
        <meta
          name="keywords"
          content="web design Halifax, Halifax real estate, Chris Crowell, RE/MAX Nova, schedule consultation"
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Schedule a Consultation
        </motion.h1>
        <motion.div
          className="mb-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!isSignedIn ? (
            <button
              onClick={handleAuthClick}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In with Google"}
            </button>
          ) : (
            <>
              <button
                onClick={createEvent}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Creating..." : "Add Consultation"}
              </button>
              <button
                onClick={handleSignoutClick}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Sign Out
              </button>
            </>
          )}
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listWeek",
            }}
            height="auto"
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: true,
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
