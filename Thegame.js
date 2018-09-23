	alert('Heb je er zin in?');
	alert('je gaat naar de volgende stap met left of right')
		
	var begin = prompt('welke kant wil je op?');

	

	if(begin == 'left') {
	var cave = prompt ('je bent beland in een tunnel links zie je licht er rechts zie je niks');
	}
	if(begin == 'right') {
	var berg = prompt ('je bent op een berg gekomen je hebt 2 opties of je gaat naa rechts en je komt boven op de berg of je gaat naar links en je gaat weer verder naar beneden ');
		

	}
	else if (berg == 'right'){
 			var grot = prompt ('je bent in een hele lange tunnel gekomen met meerdere gangen waar wil je heen?');

	}

	else{
 	var berg = prompt ('je bent op een berg gekomen je hebt 2 opties of je gaat naa rechts en je komt boven op de berg of je gaat naar links en je gaat weer verder naar beneden ');
 		}
	
	if (cave == 'left') {
		var rivier = prompt ('je bent bij een rivier aangekomen links is een brug en rechts kan je zwemmend naar de overkant');	
	}
	else {
		var weg = prompt ('je hebt een weg gevonden en nu zie je de weg je bent buiten je ziet links ver weg een brug en rechts zie je een boot');
	}
	if (rivier == 'left'){
		alert('de brug is kapot gegaan toen je erop stond en je bent dood gevallen op de stenen');
	}
		if (weg == 'right') {
		alert('je bent naar de boot naar de overkant gegaan en je ziet het einde en je hebt het gehaald Gefeliciteerd');
	}

	else {
	alert('je bent bijna aan de overkant maar de stroming is de sterk en je bent verdronken');	
	}
	if (weg == 'left'){
		alert('deze brug is ingestort jammer joh');
	}


		
	
				
	
		 	
		 			
		 	


		
		
		

		
		
			
			

	
	
 		

