# postgres

docker run \
    --name postgres \
    -e POSTGRES_USER=rfontt \
    -e POSTGRES_PASSWORD="password0001" \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker logs postgres
docker exec -it postgres psql --username rfontt --dbname heroes 

CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR (255) NOT NULL);
SELECT * FROM warriors;

# mongodb

docker run -d --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=rfontt \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    mongo:4