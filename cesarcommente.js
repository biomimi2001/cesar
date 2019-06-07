//è//Code césar - cryptographie
//Créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction doit renvoyer une chaine cryptée.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : simplon
//    chaine cryptée : tjnqmpo
//
//    Vous devez crypter dataNonCrypte1 et dataNonCrypte2
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte1 = "simplon";
const dataNonCrypte2 = "zoo"; //la lettre 'z' deviendra un 'a';

const dataCrypted = (data) => {
 //créer un tableau vide dans lequel on stocke les lettres du nouveau mot
 let nouveauMot = [];
 //parcourir le mot simplon et
 // on transforme le mot en tableau de lettre // "simplon" => ["s","i","m","p","l","o","n"] et on le met dans une variable newData
 newData = data.split("");


 // on parcourt le tableau newData et pour chaque lettre du tableau :
   newData.forEach((lettre) => {

     // on récupere l'indice de cette lettre sur le tableau alphabet
   let i = alphabet.indexOf(lettre);

     // on crée une variable j dans laquel on enregistre l'indice +1  pour recuperer la lettre d'aprés
   let j = i + 1;

     // si la j est superieur à la longueur du tableau alphabet on rajoute a dans le tableau "nouveauMot"
   if (j >= alphabet.length){
     nouveauMot.push("a");
   }

     // sinon on met dans le tableau nouveauMot  la lettre qui correspond à l'indice j du le tableau alphabet
   else {
   nouveauMot.push(alphabet[j]);
 }
 });
 // on transforme le tableau "nouveauMot" en mot avec join ce qui nous donne le mot crypté
 motCrypte = nouveauMot.join("");

 return motCrypte;


 //prendre chaque lettres de dataNonCrypte1
 //Trouve l'indexOf de la lettre dans le tableau alphabet
 //Passer indexOf + 1
 //si la lettre n'est pas z, sinon revenir à 0 (si indexOf+1 > la longeur du tableau => indexOf+1 =0)
};

console.log(dataCrypted(dataNonCrypte1));
console.log(dataCrypted(dataNonCrypte2));
