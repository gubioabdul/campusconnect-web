import { useEffect, useState } from 'react';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const loadEvents = async () => { const response = await fetch('/api/events'); const data = await response.json(); setEvents(data); };
  useEffect(() => { loadEvents().catch(() => setStatus('Unable to load events. Is the API running?')); }, []);
  const attend = async (id) => {
    if (!name.trim()) return setStatus('Enter your name before registering.');
    const response = await fetch(`/api/events/${id}/attend`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.trim() }) });
    const data = await response.json();
    if (!response.ok) return setStatus(data.error || 'Registration failed.');
    setStatus(`Registered ${name.trim()} successfully.`); await loadEvents();
  };
  return <section>
    <h1>CampusConnect</h1><p>Upcoming campus events and attendance registration.</p>
    <label>Your name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" /></label>
    {status && <p role="status">{status}</p>}
    <ul>{events.map((event) => <li key={event.id}><h2>{event.title}</h2><p>{event.date}</p><p>{event.description}</p><p>Attendees: {event.attendees.length}</p><button onClick={() => attend(event.id)}>I will attend</button></li>)}</ul>
  </section>;
}
