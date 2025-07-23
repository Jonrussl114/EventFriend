require('dotenv').config();
const eventbrite = require('eventbrite');
const sdk = eventbrite({ token: process.env.EVENTBRITE_TOKEN });

async function getEvents() {
  try {
    const response = await sdk.request('/users/me/events');
    const events = response.events.map(evt => ({
      name: evt.name.text,
      start: evt.start.local,
      url: evt.url
    }));
    console.log('Upcoming Events:\n', events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
  }
}

getEvents();