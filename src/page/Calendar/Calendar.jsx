import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "./../../Components/Header";

export default function Calendar() {
  const theme = useTheme();
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("calendarEvents")) || [];
    setSavedEvents(storedEvents);
  }, []);

  const updateEvents = (updated) => {
    setSavedEvents(updated);
    localStorage.setItem("calendarEvents", JSON.stringify(updated));
  };

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      updateEvents([...savedEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete '${selected.event.title}'?`
      )
    ) {
      const updated = savedEvents.filter((e) => e.id !== selected.event.id);
      updateEvents(updated);
    }
  };

  const handleEvents = (events) => {
    const eventsToSave = events.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
    }));

    if (JSON.stringify(eventsToSave) !== JSON.stringify(savedEvents)) {
      updateEvents(eventsToSave);
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* قائمة الأحداث */}
        <Box
          flex="1 1 20%"
          backgroundColor={theme.palette.background.alt}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {savedEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {new Date(event.start).toLocaleDateString()}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* الكاليندر */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={savedEvents}
            eventsSet={handleEvents}
          />
        </Box>
      </Box>
    </Box>
  );
}
