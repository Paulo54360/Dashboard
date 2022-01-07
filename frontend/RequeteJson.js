function recuperationDonnees() {
    fetch("http://localhost:3000/ChoixUtilisateur")
        .then(function (response) {
            response.json()
                .then(function (responseJson) {
                    document.getElementById('id').innerHTML = responseJson[0].nom;
                    document.getElementById('id1').innerHTML = responseJson[1].nom;
                    document.getElementById('id2').innerHTML = responseJson[2].nom;
                    document.getElementById('id3').innerHTML = responseJson[3].nom;
                });
        });
};

function CreationUtilisateur(e) {
    e.preventDefault();
    var AjoutMail = document.getElementById('mail').value;
    var AjoutMDP = document.getElementById('mdp').value;
    var AjoutPrenom = document.getElementById('prenom').value;
    var AjoutNom = document.getElementById('nom').value;
        fetch("http://localhost:3000/api/createUser",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                mail: AjoutMail,
                mdp: AjoutMDP,
                prenom: AjoutPrenom,
                nom: AjoutNom           
            })            
        })
        .then(function (response) {
            response.text()            
                .then(function (responseJson) {
                    console.log(response.status);
                });
        });    
};