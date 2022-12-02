
<?php

if (!isset($_POST['Ime']) || empty($_POST['Ime']) || !isset($_POST['Prezime']) || empty($_POST['Prezime'])) {
    die('Niste lepo popunili!');
}

$ime;
$prezime;
$telefon;
$mejl;
$pozicija;

if (isset($_POST['Ime']) && !empty($_POST['Ime'])) {
    $ime = $_POST['Ime'];
}
if (isset($_POST['Prezime']) && !empty($_POST['Prezime'])) {
    $prezime = $_POST['Prezime'];
}
if (isset($_POST['Telefon']) && !empty($_POST['Telefon'])) {
    $telefon = $_POST['Telefon'];
}
if (isset($_POST['Mejl']) && !empty($_POST['Mejl'])) {
    $mejl = $_POST['Mejl'];
}
if (isset($_POST['Pozicija']) && !empty($_POST['Pozicija'])) {
    $pozicija = $_POST['Pozicija'];
}
echo "<fieldset>";
echo "<h1> Uspešno ste se prijavili da radite u našem restoranu! Javićemo se čim pozicija za koju ste iskazali interesovanje bude slobodna! </h1>";
echo "<b> Ime: </b> $ime <br>";
echo "<b> Prezime: </b> $prezime <br>";
echo "<b> Telefon: </b> $telefon <br>";
echo "<b> Mejl: </b> $mejl <br>";
echo "<b> Pozicija: </b> $pozicija <br>";
echo"</fieldset>";
		
?>