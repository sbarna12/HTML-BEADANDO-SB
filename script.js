let selectedProgram = 0; 
            
            function toggleDetails(index) {
    
                const textElement = document.getElementById(`proszoveg${index}`);
                const linkElement = document.getElementById(`link${index}`);
                
                if (textElement && linkElement) {
                    
                    const isDisplayed = textElement.getAttribute('data-displayed');
            
                    if (!isDisplayed) {
                        
                        const pluszSzovegObj = getPluszSzoveg(index);
                        textElement.innerHTML += `<br><br><hr><br><br>Helyszín: ${pluszSzovegObj.helyszin} <br><br><br>Időpont: ${pluszSzovegObj.ido} <br><br><br>További információ: ${pluszSzovegObj.info} `;    
            
                    
                        textElement.setAttribute('data-displayed', 'true');
                        
                    
                        linkElement.style.display = 'none';
                    }
            
                    selectedProgram = index;
                }
            }
            
            function getPluszSzoveg(index) {
         
                switch (index) {
                    case 1:
                        return {helyszin: 'Ürmös Porta (Pannonhalma, Tóthegy 89)', ido:'Hétfőnként 16:30 – 17:30', info:'Pottyondy-Csordás Patricia (70/612-40-73)'};
                    case 2:
                        return {helyszin: 'Ravazd, IV. Béla Általános Iskola tornaterme', ido:'Keddenként 17:30 – 18:30', info:'Pottyondy Ákos (30/585-99-30)'};
                    case 3:
                        return {helyszin: 'Ürmös Porta (Pannonhalma, Tóthegy 89)', ido:'Minden hónap második csütörtökje, 18:00 – 19:00', info:'Pottyondy-Csordás Patricia (70/612-40-73)'};
                    case 4:
                        return {helyszin: 'Ürmös Porta (Pannonhalma, Tóthegy 89)', ido:'Minden hónap harmadik csütörtökje, 17:00 – 19:00', info:'Pottyondy Ákos (30/585-99-30)'};
                    default:
                        return '';
                }
            }
  