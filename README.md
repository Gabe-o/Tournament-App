## Backend
- Flask server using SQLAlchemy with a PostgresSQL server
### Startup:
- `cd backend`
- `docker compose up`

### Database Migrations & Changes

- Run `flask db migrate -m "<message mentioning the change you made in the previous step>"` then `flask db upgrade`
- The change should now be reflected in your database locally

## Frontend
- Default Vite React project with Typescript and MUI
### Startup
- `cd frontend`
- `npm run dev`
