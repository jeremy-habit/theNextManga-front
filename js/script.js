window.onload = function () {

  /* @@@ DATAS  @@@ */
  var mangas = [
    {
      "a": "noblesse",
      "c": [
        "Action",
        "Comedy",
        "Drama",
        "Mystery",
        "School Life",
        "Shounen",
        "Supernatural"
      ],
      "h": 154860989,
      "i": "4e70ea03c092255ef70046ea",
      "im": null,
      "ld": 1507621073.0,
      "s": 2,
      "t": "Noblesse"
    },
    {
      "a": "naruto",
      "c": [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Shounen"
      ],
      "h": 251208555,
      "i": "4e70ea03c092255ef70046f0",
      "im": "d1/d1cd664cefc4d19ec99603983d4e0b934e8bce91c3fccda3914ac029.png",
      "ld": 1477732811.0,
      "s": 2,
      "t": "Naruto"
    },
    {
      "a": "kimi-wa-pet",
      "c": [
        "Comedy",
        "Drama",
        "Josei",
        "Mature",
        "Romance",
        "Slice of Life"
      ],
      "h": 465456649,
      "i": "4e70e9dbc092255ef7003c77",
      "im": "7f/7fff5bd64695f4a4d37277166855194ffe90dc75603774b7580e3c1f.jpg",
      "ld": 1253390400.0,
      "s": 2,
      "t": "Kimi Wa Pet"
    },
    {
      "a": "yome-ni-konai-ka",
      "c": [
        "Comedy",
        "Romance",
        "Yaoi"
      ],
      "h": 131012122,
      "i": "4e70ea08c092255ef700484d",
      "im": "af/af913d9276e160e003c33dd1c8107df6d3ed6670e16a335f3b4fe22b.png",
      "ld": 1343364082.0,
      "s": 2,
      "t": "Yome ni Konai ka"
    },
    {
      "a": "summer-wars",
      "c": [
        "Drama",
        "Mystery",
        "Romance",
        "Sci-fi",
        "Seinen"
      ],
      "h": 112750152,
      "i": "4e70ea1ec092255ef7004dac",
      "im": "da/da8ceed4b9e1434acfa52fb554dce77c2ecf7b7a1b13774c164ca840.png",
      "ld": 1378143785.0,
      "s": 2,
      "t": "Summer Wars"
    },
    {
      "a": "ajin",
      "c": [
        "Action",
        "Drama",
        "Horror",
        "Mature",
        "Mystery",
        "Seinen",
        "Supernatural"
      ],
      "h": 595402456,
      "i": "521e575345b9efc819f90d26",
      "im": "6c/6c6af25b8a6316078c52d15294940329b50c05cd1d9a8a04515559f5.jpg",
      "ld": 1505172175.0,
      "s": 1,
      "t": "Ajin"
    },
    {
      "a": "ai-ga-kami-wo-korosu-toki",
      "c": [
        "Drama",
        "Romance",
        "Yaoi"
      ],
      "h": 115457607,
      "i": "4e70e98ec092255ef7002ca5",
      "im": "32/3224b78b6eab58e1abe5e7aa125a612351b5c0a9c14c5e8822280814.png",
      "ld": 1316558960.0,
      "s": 2,
      "t": "Ai ga Kami wo Korosu Toki"
    },
    {
      "a": "mobile-suit-gundam-f90",
      "c": [
        "Action",
        "Drama",
        "Mecha",
        "Sci-fi",
        "Shounen"
      ],
      "h": 750000000,
      "i": "4e70ea06c092255ef70047cb",
      "im": "ec/ece057ba311fa8c0f8540f56e498ec31aa78ddd94777705f481ea392.jpg",
      "ld": 1275508837.0,
      "s": 2,
      "t": "Mobile Suit Gundam F90"
    },
    {
      "a": "petshop-of-horrors",
      "c": [
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Josei",
        "Mystery",
        "Psychological",
        "Supernatural"
      ],
      "h": 445261067,
      "i": "4e70ea07c092255ef7004809",
      "im": "16/16d7de04e67b014fa32299d8428dc174fa68222a18ec5195ef53b978.png",
      "ld": 1330718878.0,
      "s": 2,
      "t": "Petshop of Horrors"
    },
    {
      "a": "kidou-senshi-gundam-climax-u.c",
      "c": [
        "Action",
        "Drama",
        "Mecha",
        "Sci-fi",
        "Shounen"
      ],
      "h": 182227182,
      "i": "4e70ea71c092255ef7006dcc",
      "im": "9e/9ea5098679c472318bfa71d8e0007bd83ef2ee02c313308c83739561.jpg",
      "ld": 1343377036.0,
      "s": 2,
      "t": "Kidou Senshi Gundam Climax U.C."
    }
  ]

  /* @@@ fonction : calcul de la somme des hits @@@ */
  var hitsSum = 0
  for (var i = 0; i < mangas.length; i++) {
    hitsSum += mangas[i].h
  }

  /* @@@ fonction : over consequences @@@ */
  var over = function (that, manga) {
    d3.select(that)
        .classed("over", true)
    tip.show(manga)
  }

  /* @@@ fonction : out consequences @@@ */
  var out = function (that) {
    d3.select(that)
        .classed("over", false)
    tip.hide()
  }


  /* @@@ fonction : calcul la hauteur d'une barre pour un manga selon ses hits @@@ */
  var getBarHeight = function (manga) {
    return ((manga.h) / hitsSum ) * 2000
  }

  /* @@@ const @@@ */
  var w = d3.select("main").node().getBoundingClientRect().width - 100
  var h = 750
  var barPadding = 10

  /* @@@ Crée l'élément SVG @@@ */
  var svg = d3.select("#suggestionContainer")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "overflow")

  /* @@@ Ajout des barres selon les datas @@@ */
  svg.selectAll("rect")
      .data(mangas)
      .enter()
      .append("rect")
      .attr("x", function (manga, i) {
        return i * (w / mangas.length)
      })
      .attr("y", function (manga) {
        return h - getBarHeight(manga)
      })
      .attr("width", w / mangas.length - barPadding)
      .attr("height", function (manga) {
        return getBarHeight(manga)
      })


  /* @@@ Création du tooltip @@@ */
  var tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-10, 0])
      .html(function (manga) {
        return "<strong>" + manga.t + "</strong>"
      })

  svg.call(tip)

  /* @@@ Ajout des affiches du manga au dessus des bars @@@ */
  svg.selectAll("image").data(mangas)
      .enter()
      .append("svg:image")
      .attr("width", w / mangas.length - barPadding)
      .attr("height", 222)
      .attr("x", function (manga, i) {
        return i * (w / mangas.length)
      })
      .attr("y", function (manga) {
        /*return (h - getBarHeight(manga)) - d3.select(this).node().getBoundingClientRect().height*/
        return 0
      })
      .attr("xlink:href", function (manga) {
        if (manga.im !== null) {
          return "https://cdn.mangaeden.com/mangasimg/" + manga.im
        } else {
          return "http://via.placeholder.com/222x350"
        }
      })
      .on("mouseover", function (manga, i) {
        over(this, manga)
      })
      .on("mouseout", function (manga, i) {
        out(this)
      })
      .on("click", function (manga, i) {
        /* ajax  :recharge le graph et les détails selon le manga cliqué */
        alert("google")
      })


}