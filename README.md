# Object Relational Rest



## How to run a generated project on command line?

Ensure `docker` and `docker-compose` are installed.

`cd` into the generated project directory (the directory that contains `docker-compose.yml`)

To run in attached mode, enter `docker-compose up --build` (it will take a while the first time you try to run it).Use `CTRL-C` to stop.

To run in detached mode, enter `docker-compose up -d`

After the initialization, you can access the API interactive documentation at [localhost:8000/docs/](http://localhost:8000/docs/). If you are using Windows 10 Home Docker Toolbox, it might be at [192.168.99.100:8000/docs/](http://192.168.99.100:8000/docs/) or whatever IP Docker Toolbox is configured to use.

To delete everything including the database, enter `docker-compose down -v`

## Development

See `README.md` in `client` for development details.