# BigData_group_6
Voltron BigData group 6

## Routes
### Requete selection all

[GET] Route : http://localhost:3000/books

### Requete selection par id

[GET] Route : http://localhost:3000/books/id

### Requete suppression par id

[DEL] Route : http://localhost:3000/books/id

### Requete insertion

[POST] Route : http://localhost:3000/books

Json : 
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

### Requete mise à jour par id

[PUT] Route : http://localhost:3000/books/id

Update que du titre (à voir si besoin de plus)

{
    "title" : "Titre livre"
}