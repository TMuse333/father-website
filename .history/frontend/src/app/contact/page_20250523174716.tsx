
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
  const [error, setError] = useState(null);

  const handleAuthClick = async () => {
    try {
      setLoading(true);
      await apiCalendar.handleAuthClick();
      setIsSignedIn(true);
      fetchEvents();
    } catch (error) {
      setError("Failed to sign in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignoutClick = () => {
    apiCalendar.handleSignoutClick();
    setIsSignedIn(false);
    setEvents([]);
    setError(null);
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
      setError(null);
    } catch (error) {
      setError("Failed to fetch events: " + error.message);
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
      fetchEvents();
    } catch (error) {
      setError("Failed to create event: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load gapi client and auth2
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.gapi.load("client:auth2", () => {