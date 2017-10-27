window.onload = function () {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/animes/suggestion/59de144867a1add2cf6d03fa", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log();
        init(JSON.parse(xhr.responseText).animes)
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);


  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* @@@ DATAS  @@@ */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  let mangas = [
    {
      "a": "noblesse",
      "c": [
        "Action",
        "Comedy",
        "Drama",
        "Mystery",
        "School Life",
        "Shounen",
        "Supernatural",
        "Cosmos"
      ],
      "c_common": [
        "Action",
        "Comedy",
        "Cosmos",
        "Drama"
      ],
      "h": 150,
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
      "c_common": [
        "Adventure",
        "Drama"
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
      "c_common": [
        "Action",
        "Comedy",
        "Cosmos",
        "Drama",
        "test"
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
        "Yaoi",
        "Cosmos"
      ],
      "c_common": [
        "Cosmos"
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
      "c_common": [
        "Drama"
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
      "c_common": [
        "Drama"
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
      "c_common": [
        "Drama"
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
      "c_common": [
        "Drama"
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
      "c_common": [
        "Drama"
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
      "c_common": [
        "Drama"
      ],
      "h": 182227182,
      "i": "4e70ea71c092255ef7006dcc",
      "im": "9e/9ea5098679c472318bfa71d8e0007bd83ef2ee02c313308c83739561.jpg",
      "ld": 1343377036.0,
      "s": 2,
      "t": "Kidou Senshi Gundam Climax U.C."
    }
  ]

  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* @@@ CONTANT & INITIALIZATION @@@ */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  /*let w = d3.select("#suggestionContainer").node().getBoundingClientRect().width - 50*/
  let w = 1068
  let h = 800
  let barPadding = 10
  let tip
  let aLotSimilar = "sun-flower"
  let similar = "orange"
  let verySimilar = "pumpkin"
  /* calcul de la somme des hits */
  let hitsSum = 0

  d3.select("#squareALotSimilar").classed("bg-" + aLotSimilar, true)
  d3.select("#squareSimilar").classed("bg-" + similar, true)
  d3.select("#squareVerySimilar").classed("bg-" + verySimilar, true)

  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* @@@ FONCTIONS @@@ */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  /* @@@ fonction : number formatter @@@ */
  function abbreviateNumber(value) {
    var newValue = value
    if (value >= 1000) {
      var suffixes = ["", "K", "M", "B", "T"]
      var suffixNum = Math.floor(("" + value).length / 3)
      var shortValue = ""
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum) ) : value).toPrecision(precision))
        var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "")
        if (dotLessShortValue.length <= 2) {
          break
        }
      }
      if (shortValue % 1 !== 0) shortNum = shortValue.toFixed(1)
      newValue = shortValue + suffixes[suffixNum]
    }
    return newValue
  }

  /* @@@ fonction : over consequences @@@ */
  let over = function (that, manga) {
    d3.select(that)
        .classed("over", true)
    tip.show(manga)
  }

  /* @@@ fonction : out consequences @@@ */
  let out = function (that) {
    d3.select(that)
        .classed("over", false)
    tip.hide()
  }

  /* @@@ fonction : out consequences @@@ */
  let getSimilarityColor = function (manga) {
    let c_commonSize = manga.c_common.length
    if (c_commonSize >= 1 && c_commonSize <= 2) {
      return aLotSimilar
    }
    if (c_commonSize >= 3 && c_commonSize <= 4) {
      return similar
    }
    return verySimilar
  }

  /* @@@ fonction : calcul la hauteur d'une barre pour un manga selon ses hits @@@ */
  let getBarHeight = function (manga) {
    return ((manga.h) / hitsSum ) * 2000
  }


  let init = function (mangas) {

    for (let i = 0; i < mangas.length; i++) {
      hitsSum += mangas[i].h
    }

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Crée l'élément SVG @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

    let svg = d3.select("#suggestionContainer")
        .insert("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "overflow")

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Ajout des barres selon les datas @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    console.log(svg)
    svg.selectAll("rect")
        .data(mangas)
        .enter()
        .append("rect")
        .attr("class", function (manga, i) {
          return "color-" + getSimilarityColor(manga)
        })
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

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Création du tooltip @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

     tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 0])
        .html(function (manga) {
          let similarityColor = getSimilarityColor(manga)
          let res = "<div class='border border-" + similarityColor + " round bg-yang anim-zoom very-fast' style='min-width: 300px'>"
          res += "<h4 class='margin-0 bg-" + similarityColor + " color-yang padding'>" + manga.t + "</h4>"
          res += "<ul class='list-unstyled padding'>"
          for (let category of manga.c) {
            if ((manga.c_common.indexOf(category) > -1)) {
              res += "<li class='color-" + similarityColor + " txt-b'>"
            } else {
              res += "<li>"
            }
            res += category + "</li>"
          }
          res += "</ul>"
          res += "</div>"
          return res
        })

    svg.call(tip)

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Ajout des affiches du manga au dessus des bars @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

    svg.selectAll("image").data(mangas)
        .enter()
        .append("svg:image")
        .attr("class", "cursor-pointer")
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

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Ajout des scores de popularité @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */


    svg.selectAll("viewsScore")
        .data(mangas)
        .enter()
        .append("text")
        .text(function (manga) {
          return "~ " + abbreviateNumber(manga.h)
        })
        .attr("x", function (manga, i) {
          return i * (w / mangas.length) + 5
        })
        .attr("y", function (manga) {
          return (h - getBarHeight(manga)) - d3.select(this).node().getBoundingClientRect().height + 15
        })
    /* .attr("width", function (manga) {
       let rectX = d3.transform(d3.select("rect").node()attr("transform")).translate[0]
       console.log(rectX)
       let recttW = d3.select("rect").node().getBoundingClientRect().width
       let wText = this.getComputedTextLength()
     })
  */

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* @@@ Nombre de catégories en commun @@@ */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
    /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

    svg.selectAll("nbCommonCate")
        .data(mangas)
        .enter()
        .append("text")
        .text(function (manga) {
          return manga.c_common.length
        })
        .attr("x", function (manga, i) {
          return i * (w / mangas.length) + 5
        })
        .attr("y", function (manga) {
          return (h - getBarHeight(manga)) - d3.select(this).node().getBoundingClientRect().height + 50
        })
        .attr("font-size", "32px")
        .attr("fill", "white")

  }
}