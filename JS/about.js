width = screen.width; height = screen.height;

      let margin_score = width - 1446;
      console.log("magin_score: " + margin_score);

      margin_to_set = "margin: -" + margin_score + " auto";
      console.log(margin_to_set)

      about_image = document.getElementById('about_image');
      console.log(about_image)

      about_image.style.marginTop = "-" + margin_score + "px";
      about_image.style.marginBottom = "auto";
