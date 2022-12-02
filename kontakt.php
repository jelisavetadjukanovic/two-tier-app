
<?php

if (!isset($_POST['tbIme']) || empty($_POST['tbIme']) || !isset($_POST['tbPrezime']) || empty($_POST['tbPrezime'])) {
    die('Niste lepo popunili!');
}

$ime;
$prezime;
$telefon;
$poruka;

if (isset($_POST['tbIme']) && !empty($_POST['tbIme'])) {
    $ime = $_POST['tbIme'];
}
if (isset($_POST['tbPrezime']) && !empty($_POST['tbPrezime'])) {
    $prezime = $_POST['tbPrezime'];
}
if (isset($_POST['tbTelefon']) && !empty($_POST['tbTelefon'])) {
    $telefon = $_POST['tbTelefon'];
}

if (isset($_POST['taPoruka']) && !empty($_POST['taPoruka'])) {
    $poruka = $_POST['taPoruka'];
}
echo "<fieldset>";
$datum= date('D d/m/y');
echo "<h1> Poruka je uspešno poslata! Javićemo se u najkraćem mogućem roku! </h1>";
echo "<b> Ime: </b> $ime <br>";
echo "<b> Prezime: </b> $prezime <br>";
echo "<b> Telefon: </b> $telefon <br>";
echo "<b> Poruka: </b> $poruka <br>";
echo $datum;
echo"</fieldset>";

?>