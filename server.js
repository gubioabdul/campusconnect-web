const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let events = [
  { id: 1, title: 'AI & XAI Research Seminar', date: '2026-08-20', description: 'A student seminar exploring practical AI and explainable AI concepts.', attendees: [] },
  { id: 2, title: 'Codefest Africa Hackathon', date: '2026-08-27', description: 'A collaborative coding event focused on building useful African solutions.', attendees: [] },
  { id: 3, title: 'Software Engineering Career Workshop', date: '2026-09-03', description: 'A practical session on careers, GitHub portfolios and open-source contribution.', attendees: [] }
];

app.get('/api/events', (req, res) => res.json(events));
app.get('/api/events/:id', (req, res) => {
  const event = events.find((item) => item.id === Number(req.params.id));
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
});
app.post('/api/events/:id/attend', (req, res) => {
  const event = events.find((item) => item.id === Number(req.params.id));
  if (!event) return res.status(404).json({ error: 'Event not found' });
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (!event.attendees.includes(name)) event.attendees.push(name);
  res.status(200).json(event);
});
app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'CampusConnect API' }));

const PORT = process.env.PORT || 5000;
if (require.main === module) app.listen(PORT, () => console.log(`CampusConnect API running on port ${PORT}`));
module.exports = app;
