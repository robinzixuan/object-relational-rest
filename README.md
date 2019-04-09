# object-relational-rest

## How to run a generated project on command line?

Ensure `docker` and `docker-compose` are installed.

`cd` into the generated project directory (the directory that contains `docker-compose.yml`)

To run in attached mode, enter `docker-compose up --build` (it will take a while the first time you try to run it). Use `CTRL-C` to stop.

To run in detached mode, enter `docker-compose up -d`

To delete everything including the database, enter `docker-compose down -v`