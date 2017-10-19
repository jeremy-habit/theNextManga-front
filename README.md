# Anime Suggestion

## API

### GET /animes/:query
Send a list of animes with "like" operator on the query 

```
{
    "anime": [
        {
            "_id": "59de144667a1add2cf6cac6a",
            "h": 359554,
            "c": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Shounen"
            ],
            "im": "a6/a6cb9ecfe372e142bf15a33aaa7bd37fcf907ec5a01c3ccd230ad53b.jpg",
            "t": "Boruto: Naruto Next Generations"
        },
        {
            "_id": "59de144667a1add2cf6cac88",
            "h": 78,
            "c": [
                "Doujinshi",
                "Slice of Life"
            ],
            "im": "45/45883d4bf3841fcaf8161044618a7965de22d7536daf15afe193c7db.png",
            "t": "Naruto dj - Sazanka"
        },
        {
            "_id": "59de144767a1add2cf6cc0fe",
            "h": 763856,
            "c": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Shounen"
            ],
            "im": "49/490fbf6f1d153e0d80130e7a1cb8ddc9cd5e6462a8d9b52858e0ef75.jpg",
            "t": "Naruto Gaiden"
        },
        {
            "_id": "59de144767a1add2cf6cc584",
            "h": 26,
            "c": [
                "Doujinshi"
            ],
            "im": "d5/d591053eab3e01125d6b14a8a9314aef820b27f6d5963d584d21d334.jpg",
            "t": "Naruto dj - Androgynous"
        },
        {
            "_id": "59de144767a1add2cf6ccad4",
            "h": 260,
            "c": [
                "Doujinshi",
                "Yaoi"
            ],
            "im": "7a/7ad3e3d27b87896a6a5a8a6401114ae4ae7603e53bc11f08235a5d40.jpg",
            "t": "Naruto dj - Daikirai"
        },
        {
            "_id": "59de144767a1add2cf6cd3e0",
            "h": 550150,
            "c": [
                "Supernatural",
                "Fantasy",
                "Adventure",
                "Slice of Life",
                "Romance",
                "Comedy",
                "Action",
                "Psychological",
                "Drama"
            ],
            "im": "59/59d86afed78f3e065731b24c59a2c9cf22f4232be23d5cd0a346cd4b.jpg",
            "t": "Naruto Ng"
        },
        {
            "_id": "59de144867a1add2cf6d0eec",
            "h": 596623,
            "c": [
                "Action",
                "Adventure",
                "Comedy",
                "Fantasy",
                "One Shot",
                "Shounen"
            ],
            "im": "63/634bc20b131c6bed08bc7eca9da0bc17c0d634ae2bdbe74cd4584500.jpg",
            "t": "Road To Naruto The Movie"
        },
        {
            "_id": "59de144967a1add2cf6d2f10",
            "h": 251207593,
            "c": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Shounen"
            ],
            "im": "d1/d1cd664cefc4d19ec99603983d4e0b934e8bce91c3fccda3914ac029.png",
            "t": "Naruto"
        }
    ]
}
```

### GET /animes/:id
Send a unique anime

```
[...]
```

### GET /animes/suggestion/:id
Take an anime id parameter, return anime suggestions
```
[...]
``` 

