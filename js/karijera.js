function provera(){
	var podaci = [];
	var greske = [];
	var ime=document.getElementById('Ime');
	var prezime=document.getElementById('Prezime');
	var telefon=document.getElementById('Telefon');
	var mejl=document.getElementById('Mejl');
	var pozicija=document.getElementById('Pozicija');
	
	var imereg = /^[A-Z][a-z]{3,15}$/;
	var prezimereg = /^[A-Z][a-z]{3,15}$/;
	var reg_telefon=/^0[0-10]{2}\/[0-10]{2}-[0-10]{2}-[0-10]{2,}$/;
	
	if (ime.value=='' || !ime.value.match(imereg)){
		greske.push("Greska");;
		document.getElementById('Ime').innerHTML='*'	;		
	}
	else {
		podaci.push(ime.value);
		document.getElementById('Ime').innerHTML='';
	}
	
	if (prezime.value=='' || !prezime.value.match(prezimereg)){
		greske.push("Greska");
		document.getElementById('Prezime').innerHTML='*'	;	
		
	}
	else {
		podaci.push(prezime.value);
		document.getElementById('Prezime').innerHTML='';
	}
	
	if (telefon.value=='' || !telefon.value.match(reg_telefon)){
		greske.push("Greska");
		document.getElementById('Telefon').innerHTML='*'	;	
	}
	else {
		podaci.push(telefon.value);
		document.getElementById('Telefon').innerHTML='';
	}
	
		if (mejl.value=='' || !mejl.value.match(reg_mejl)){
		greske.push("Greska");
		document.getElementById('Mejl').innerHTML='*'	;	
	}
	else {
		podaci.push(mejl.value);
		document.getElementById('Mejl').innerHTML='';
	}
	
	if (pozicija.value==''){
		greske.push("Greska");
		}
	else {
		pozicija.push(poruka.value);
	}
}