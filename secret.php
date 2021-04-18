<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Garance & Maxime</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Shrikhand&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/27350ed8ab.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    
        <?php
    if (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "kangourou") // Si le mot de passe est bon
    {
    // On affiche les codes
    ?>
   <!DOCTYPE html>

    <!-- Header -->
    <header>

      <ul id="menu">
        <li>
          <a class="title-menu" href="./programme.html" title="Le programme">
            Le programme
          </a>
        </li>
        <li>
          <a class="title-menu" href="./ou-dormir.html" title="Où dormir ?">
            Où dormir ?
          </a>
        </li>
        <li>
          <a class="title-menu" href="./Plan.html" title="Plan d'accès">
            Plan d'accès
          </a>
        </li>
        <li>
          <a class="title-menu" href="./infos-pratiques.html" title="Infos pratiques">
            Infos pratiques
          </a>
        </li>
        <li>
          <a class="title-menu" href="./Galerie photo.html" title="Galerie photo">
            Galerie photo
          </a>
        </li>
        <li>
          <a class="title-menu" href="./Liste-de-Mariage.html" title="Liste de Mariage">
            Liste de Mariage
          </a>
        </li>
        <li>
          <a class="title-menu" href="./Contact.html" title="Contact">
            Contact
          </a>
        </li>
      </ul>
    </header>

        <!-- Main -->
      <main>
        <div class="img-1 img parallax ">
          <h1 class="names">Garance & Maxime</h1>
        </div>
        <div class="save">
          <p class="save__first-line">Save the date !</p>
          <p class="save__second-line">02.10.21</p>
        </div>
      </main>

       <!--Footer <footer>
    </footer>-->
    

    }
    else // Sinon, on affiche un message d'erreur
    {
        echo '<p>Mot de passe incorrect</p>';
    }
    ?>
    
        
    </body>
</html>