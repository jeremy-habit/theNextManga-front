window.onload = function () {

  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* @@@ DATAS  @@@ */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  let mangas = JSON.parse(window.animes)

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
  init(mangas)
}

