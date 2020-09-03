fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
  .then(res => res.json())
  .then((out) => {
    var freeArray = out['free'];
    var paidArray = out['paid'];
    combined = freeArray.concat(paidArray);
    freeLength = freeArray.length;
    paidLength = paidArray.length;
    var inside = document.querySelector(".container");

    inside.innerHTML += '<section class="cms-boxes"> <div class="container-fluid">';

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(combined);
    combinedLength = combined.length;
    for (var i = 0; i < combinedLength; i++) {

      var confName = combined[i]['confName'];
      var confStartDate = combined[i]['confStartDate'];
      var entryType = combined[i]['entryType'];
      var city = combined[i]['city'];
      var confUrl = combined[i]['confUrl'];
      var confPoster = combined[i]['imageURL'];
      if (i == 0 || (i % 3 == 0))
        inside.innerHTML += '<div class="row">';

      inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
        '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';

    }

    document.querySelector(".all").addEventListener('click', function()
  {
    inside.innerHTML = '<section class="cms-boxes"> <div class="container-fluid">';

    for (var i = 0; i < combinedLength; i++) {

      var confName = combined[i]['confName'];
      var confStartDate = combined[i]['confStartDate'];
      var entryType = combined[i]['entryType'];
      var city = combined[i]['city'];
      var confUrl = combined[i]['confUrl'];
      var confPoster = combined[i]['imageURL'];
      if (i == 0 || (i % 3 == 0))
        inside.innerHTML += '<div class="row">';

      inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
        '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';

    }
  })

    document.querySelector('.free').addEventListener('click', function() {
      inside.innerHTML = '<section class="cms-boxes"> <div class="container-fluid">';
      for (var i = 0; i < freeLength; i++) {

        var confName = freeArray[i]['confName'];
        var confStartDate = freeArray[i]['confStartDate'];
        var entryType = freeArray[i]['entryType'];
        var city = freeArray[i]['city'];
        var confUrl = freeArray[i]['confUrl'];
        var confPoster = freeArray[i]['imageURL'];
        if (i == 0 || (i % 3 == 0))
          inside.innerHTML += '<div class="row">';

        inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
          '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';

      }
    })

    document.querySelector('.paid').addEventListener('click', function() {
      inside.innerHTML = '<section class="cms-boxes"> <div class="container-fluid">';
      for (var i = 0; i < paidLength; i++) {
        var confName = paidArray[i]['confName'];
        var confStartDate = paidArray[i]['confStartDate'];
        var entryType = paidArray[i]['entryType'];
        var city = paidArray[i]['city'];
        var confUrl = paidArray[i]['confUrl'];
        var confPoster = paidArray[i]['imageURL'];
        if (i == 0 || (i % 3 == 0))
          inside.innerHTML += '<div class="row">';

        inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
          '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';
      }
    })

    document.querySelector('.searchButton').addEventListener('click', function() {
      inside.innerHTML = '<section class="cms-boxes"> <div class="container-fluid">';
      var x = document.querySelector("input").value;
      var count = 0;
      for (var i = 0; i < combinedLength; i++) {
        if (combined[i]['city'] === x || combined[i]['confName'] === x) {
          var confName = combined[i]['confName'];
          var confStartDate = combined[i]['confStartDate'];
          var entryType = combined[i]['entryType'];
          var city = combined[i]['city'];
          var confUrl = combined[i]['confUrl'];
          var confPoster = combined[i]['imageURL'];
          if (count == 0 || (count % 3 == 0))
            inside.innerHTML += '<div class="row">';

            inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
              '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';
                count++;
        }

      }

    });

    document.querySelector('.sortButton').addEventListener('click', function() {
      inside.innerHTML = '<section class="cms-boxes"> <div class="container-fluid">';
      var newcomb = combined.sort(function(a, b) {
        return new Date(a['confStartDate']) - new Date(b['confStartDate']);
      })
      for (var i = 0; i < combinedLength; i++) {
        var confName = combined[i]['confName'];
        var confStartDate = combined[i]['confStartDate'];
        var entryType = combined[i]['entryType'];
        var city = combined['city'];
        var confUrl = combined[i]['confUrl'];
        var confPoster = combined[i]['imageURL'];
        if (i == 0 || (i % 3 == 0))
          inside.innerHTML += '<div class="row">';

        inside.innerHTML = inside.innerHTML + '<div class="col-md-4 col-lg-4 cms-boxes-outer"><div class="cms-boxes-items cms-features"><div class="boxes-align"><div class="small-box"><img src=' + confPoster + ' alt="Not Found" onerror=this.src="https://etimg.etb2bimg.com/thumb/msid-77118815,imgsize-228666,width-800,height-434,overlay-ettech/microsoft-sees-growth-amid-pandemic-computing-demands.jpg"><h2>' + confName + '</h2><p>' + confStartDate +
          '</p><p>' + entryType + '</p><p>' + city + '</p><a href=' + confUrl + '>click here to view website</a></div></div></div></div></div></div></section></div>';
      }

    });
  }).catch(err => console.error(err));
