# Anime Suggestion

## API

### GET /animes/name/:query
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
        }
        
        [...............]
    ]
}
```

### GET /animes/:id
Send a unique anime

```
{
    "anime": {
        "_id": "59de144667a1add2cf6cab9e",
        "h": 1196,
        "c": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-fi",
            "Supernatural"
        ],
        "im": "ad/ad8dbe2c909de99899f1015a360f75e3ced31023672d6ff0d2b7547c.jpg",
        "t": "Flower Dream"
    }
}
```

### GET /animes/suggestion/:id
Take an anime id parameter, return anime suggestions

```
[...]
``` 

todo: aggregation with mongoose + $match 

