# Project Voltron

The goal of this Epitech project was to answer a call of tender from a client, while working by speciality groups.
We had to create a Proof of Concept (PoC) for a virtual library, with a web site and database hosted in the cloud, archive's room automated surveillance and IA book suggestion for readers.

Since I'm specialized in Big Data, I worked with my colleagues on the database and his deployment. That's why you will only find the back-end here, with the strict minimum needed for the POC.

## Docker launch

Since the app is dockerized, you will need it on your computer.
If that's not the case, you can find how to install it there : https://docs.docker.com/get-docker/

You can start the back-end with the following command :
  `docker-compose up`

The back-end will send a message at http://localhost:8080/
PG Admin will be accessible at http://localhost:5050/

Then, you will need to "add a new server", with these informations :
- Host Name: postgres
- password: changeme

## Technologies used

### API

NodeJS, for its simplicity of use and team knowledge on it

### Database

Postgres, for its simplicity of deployment and team knowledge on it

### Dashboard

PGAdmin, for its simplicity of deployment, its complete functionnalities and simplicity to understand for the end user.

## Routes

### Request select all

[GET] Route : http://localhost:3000/books

### Request select by id

[GET] Route : http://localhost:3000/books/id

### Request delete by id

[DEL] Route : http://localhost:3000/books/id

### Request insertion

[POST] Route : http://localhost:3000/books

Json :

```json
{
  "title": "Titre livre",
  "authors": "J.K. Rowling/Mary GrandPré",
  "average_rating": 4.57,
  "isbn": "439785960",
  "isbn13": "5454515154455",
  "language_code": "eng",
  "num_pages": 652,
  "ratings_count": 2095690,
  "text_reviews_count": 27591,
  "publication_date": "2006-09-15T22:00:00.000Z",
  "publisher": "Scholastic Inc."
}
```

### Request update by id

[PUT] Route : http://localhost:3000/books/id

Only update title for now

JSON :

```json
{
  "title": "book title"
}
```

## Known Bugs

doc route implementation (can be retrived in docs/index.html)
