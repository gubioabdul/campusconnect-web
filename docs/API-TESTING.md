# API Testing Notes

The Express API is covered by Jest and Supertest. The minimum project test verifies that `GET /api/events` returns HTTP 200 and an array payload.

Additional endpoint tests should cover the attendance path and the missing-event 404 case as the project grows.