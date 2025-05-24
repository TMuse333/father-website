

import React from "react";
import {motion} from "framer-motion"

const Page = () => {


    return (
        <>
         <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div id="calendar-scheduling-button" />
          <link
            href="https://calendar.google.com/calendar/scheduling-button-script.css"
            rel="stylesheet"
          />
          <script
            src="https://calendar.google.com/calendar/scheduling-button-script.js"
            async
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var target = document.getElementById('calendar-scheduling-button');
                  window.addEventListener('load', function() {
                    calendar.schedulingButton.load({
                      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0d3w9lQnAOmDO8WqSxXcQx9metyuKm3qBr5aXp9yr3kuttTCpBs-T_Xpm-7fYIv4kySZIKcN9k?gv=true',
                      color: '#039BE5',
                      label: 'Book an appointment',
                      target,
                    });
                  });
                })();
              `,
            }}
          />
        </motion.div>
      
        </>
    )
}


export default Page