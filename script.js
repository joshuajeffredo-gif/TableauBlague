
fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data => {
        //affichage des données dans la console pour vérifier le contenu
        console.log(data);
        console.log(data.setup);
        console.log(data.delivery);

        //fonction pour afficher la blague dans l'élément HTML
        /*function afficherBlague(data) {

            let blagueElement = document.getElementById("blague");

            blagueElement.textContent = data.setup;
        }
        //fonction pour afficher la réponse dans l'élément HTML
        function afficherReponse(data) {

            let reponseElement = document.getElementById("reponse");

            reponseElement.textContent = data.delivery;
        }
            */

        //fonction pour créer une nouvelle blague
        function creerNouvelleBlague() {
            fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
                .then(response => response.json())
                .then(data => {

                    console.log(data);
                    let tableau = document.getElementById("table-blagues");

                    let ligne = document.createElement("tr");

                    let celluleBlague = document.createElement("td");
                    let celluleReponse = document.createElement("td");

                    celluleBlague.textContent = data.setup;
                    celluleReponse.textContent = data.delivery;
                    
                    ligne.appendChild(celluleBlague);
                    ligne.appendChild(celluleReponse);
                    tableau.appendChild(ligne);
                });
                
        }

        //fonction pour gérer le clic sur le bouton "Nouvelle blague"
        function buttonNouvelleBlague() {

            let blagueButton = document.getElementById("nouvelle-blague");

            blagueButton.addEventListener("click", function() {
                creerNouvelleBlague();
            });
    
        }

        buttonNouvelleBlague();
        creerNouvelleBlague();
         
    });