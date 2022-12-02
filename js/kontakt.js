function provera(){
	var podaci = [];
	var greske = [];
	var ime=document.getElementById('tbName');
	var prezime=document.getElementById('tbPrezime');
	var telefon=document.getElementById('tbTelefon');
	var poruka=document.getElementById('taPoruka');
	
	var imereg = /^[A-Z][a-z]{3,15}$/;
	var prezimereg = /^[A-Z][a-z]{3,15}$/;
	var reg_telefon=/^0[0-10]{2}\/[0-10]{2}-[0-10]{2}-[0-10]{2,}$/;
	
	if (ime.value=='' || !ime.value.match(imereg)){
		greske.push("Greska");;
		document.getElementById('spantbName').innerHTML='*'	;		
	}
	else {
		podaci.push(ime.value);
		document.getElementById('spantbName').innerHTML='';
	}
	
	if (prezime.value=='' || !prezime.value.match(prezimereg)){
		greske.push("Greska");
		document.getElementById('spantbPrezime').innerHTML='*'	;	
		
	}
	else {
		podaci.push(prezime.value);
		document.getElementById('spantbPrezime').innerHTML='';
	}
	
	if (telefon.value=='' || !telefon.value.match(reg_telefon)){
		greske.push("Greska");
		document.getElementById('spantbTelefon').innerHTML='*'	;	
	}
	else {
		podaci.push(telefon.value);
		document.getElementById('spantbTelefon').innerHTML='';
	}
	
	if (poruka.value==''){
		greske.push("Greska");
		}
	else {
		podaci.push(poruka.value);
	}
}

function js(){
	var datum = new Date();
	var s = datum.getHours();
	var d = datum.getDay();
	
	if (d == 0){
		document.getElementById('vreme').innerHTML = 'Затворено';		
	}

	if (s < 16 & s >= 8){
	document.getElementById('vreme').innerHTML = 'Отворено';
	}
	else{
	document.getElementById('vreme').innerHTML = 'Затворено';
	}
	}


