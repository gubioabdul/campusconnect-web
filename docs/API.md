# CampusConnect API Reference

## GET /api/events
Returns the current list of campus events as JSON.

## POST /api/events/:id/attend
Marks a student as attending the selected event.

### Request body
```json
{"name":"Student"}
```

### Error
Returns HTTP 404 when the requested event does not exist.
