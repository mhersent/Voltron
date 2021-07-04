# BigData_group_6

Voltron BigData group 6

## Docker launch

`docker-compose build` (needed if changes as been done on the code)

`docker-compose up`

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

docker-compose up do not recreate the app image. This is why the command "docker-compose build" is strongly advised.

doc route implementation (can be retrived in docs/index.html)
