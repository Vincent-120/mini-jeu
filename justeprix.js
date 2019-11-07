let prix;
//generation du chiffre aleatoire
prix = Math.round(Math.random(1,100)*(100-1)+1);
console.log(prix);
//lecteur input

let comfirme,nbr,choose;
document.getElementById('run').addEventListener('click',() =>{
    nbr = document.getElementById('target').value;
    choose = parseInt(nbr)
    console.log(choose)
    jeux()
    function jeux(){
        if (/\D/.test(choose)){
            document.getElementById("indice").innerHTML= "Introduit un chiffres entre 1 & 100"
            jeux()
        }
        if (choose == prix) {
            document.getElementById("indice").innerHTML="Félicitation tu as trouvé le juste prix !!!"
            comfirme = confirm("veux tu rejouer ?")
        }
        else if (choose<prix) {
            document.getElementById("indice").innerHTML="tu es en dessous"
            jeux()
        } 
        else {
            document.getElementById("indice").innerHTML="tu es au dessus"
            jeux()
        }
        if (comfirme == true) {
            prix = Math.round(Math.random(1,100)*(100-1)+1);
            console.log(prix)
            document.getElementById("indice").innerHTML ="Indiquer a nouveau un chiffre"
        }
        else{
            document.getElementById("indice").innerHTML="Merci d'avoir participer a ce petit jeu !"
        }
    }
})