//function Afficher(){
    

    //BLOCKS DE STRUCTURE

        var Entete = document.createElement("div");
        var newCalco = document.createElement("div");
        var newEcran = document.createElement("div");
        var newFonction = document.createElement("div");
        var newFonction = document.createElement("div");
        var newFonction = document.createElement("div");
        var newFonctionTrigo = document.createElement("div");
        var newMath = document.createElement("div");
        var newPave = document.createElement("div");
        var newChiffre = document.createElement("div");
        var newSigne = document.createElement("div");
        var newEcranEntree = document.createElement("div");
        var newEcranSortie = document.createElement("div");
    
    // CREATION DES ID

        newCalco.id = 'calco';
        newEcran.id = 'ecran';
        newFonction.id = 'fonction';
        newFonctionTrigo.id = 'fonctionTrigo';
        newMath.id = 'math';
        newPave.id = 'pave';
        newChiffre.id = 'chiffre';
        newSigne.id = 'signe';
        newEcranEntree.id = 'ecran_entree';
        newEcranSortie.id = 'ecran_sortie';
    
    // VALEUR DE DEBUT DES ECRANS

        

// A PROPOS DE LA DIV D'ID fonction
    // CREATION DES INPUT POUR FONCTION
        var newFonction1 = document.createElement('input');
        var newFonction2 = document.createElement('input');
        var newFonction3 = document.createElement('input');
        var newFonction4 = document.createElement('input');

    // VALEURS DES INPUTS DE FONCTION
        newFonction1.value = 'AS';
        newFonction2.value = 'DEL';
        newFonction3.value = 'X';
        newFonction4.value = '=';

    // TYPES DES TOUCHES
        newFonction1.type = 'button';
        newFonction2.type = 'button';
        newFonction3.type = 'button';
        newFonction4.type = 'button';

    // FONCTION SUR FONCTION
        // POUR EFFACER LE DERNIER NOMBRE AVANT LE SIGNE DE LA DROITE VERS LA GAUCHE
            function eliminer(e1){
                var posSigne=[0,0,0,0], max;
                posSigne[0] = e1.innerText.lastIndexOf("+");
                posSigne[1] = e1.innerText.lastIndexOf("-");
                posSigne[2] = e1.innerText.lastIndexOf("/");
                posSigne[3] = e1.innerText.lastIndexOf("*");
                max = posSigne[0];
            
                for(i=0;i<=3;i++){
                    if(posSigne[i] > max){
                        max = posSigne[i];
                    }
                }
            e1.innerHTML = e1.innerText.substring(0,max+1);
            }
        

        // POUR TOUS EFFACER
            function effacer(e1,e2){
            e1.innerHTML = '';
            e2.innerHTML = '';
            }
        // POUR EFFACER LE DERNIER CHIFFRE
            function supprimer(e1){
                e1.innerHTML = e1.innerText.substring(0, e1.innerText.length-1);
            }
        // POUR RETOURNER LE RESULTAT
        function paranthese(text){
            var textInter, textInter1, posPaOuFi, posPaFeIn;
            posPaOuFi = text.lastIndexOf("(");
            while(posPaOuFi != -1){
                textInter = text.substring(posPaOuFi, text.length);
                posPaFeIn = textInter.indexOf(")");
                textInter = textInter.substring(0, posPaFeIn+1);
                textInter1 = textInter.substring(1, textInter.length-1); 
                textInter1 = eval(textInter1);
                text = text.replace(textInter, textInter1);
                posPaOuFi = text.lastIndexOf("(");
            }
        }
        // LES SIGNES AVANT ET APRES NOMBRES A UTILISER DANS LE FONCTION  S MATHEMATISUE
        function resultat(e1,e2){
            var  varAleat, textInt, textInt1, posInOu, balance = 0, pos;
            var textInt2 = [];
            var tabPosTrigo = [];
            var tabTrigo = ['sin','cos','tan','sin\u207B\u00B9','cos\u207B\u00B9','tan\u207B\u00B9'];

            var nbre1, nbreInt1, valFi1=-1, nbreInt11, balanceMath1=0, nbre2, nbreInt2, valFi2=-1, nbreInt21, balanceMath2=0, posMath = -1;
            var tabPosMath = [];
            var tabPosSigneAvant = [];
            var tabPosSigneApres = [];
            var tabMath = ['%','\u00B2','\u207B\u00B9','\u221a','\u00b3','^'];

            var posSigneMath = ['+','-','*','/','(',')','s','c','t'];
            var posSigneMathFi = [];
            var posSigneMathIn = [];
            var nombre1, nombre12, u, e, nombre2, nombre22, o, p, q;


            varAleat = e1.innerHTML;  
            // Section pour la gestion du code de la fonction mathematique
            var z=0;
            do{  
                posMath = -1; 
                
                for(r=0; r<6; r++){
                    tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                    if(posMath < tabPosMath[r]){
                        // RECHERCHE LA POSITION DE LA FONCTION MATHEMAQUE LA PLUS A DROIT DANS L'EXPRESSION varAleat ET LA STOCKE DANS posMath
                        posMath = tabPosMath[r];
                        // RECUPERE ET STOCKE DANS nbreInt11 L'EXPRESSION DE LA CHAINE varAleat DU DEBUT DE SA TAILLE JUSQU'A LA POSITION D'INDICE posMath
                        nbreInt11 = varAleat.substring(0, posMath);
                        // RECUPERE ET STOCKE DANS nbreInt11 L'EXPRESSION DE LA CHAINE varAleat DE LA POSITION D'INDICE posMath+1 A LA FIN DE LA CHAINE varAleat
                        nbreInt21 = varAleat.substring(posMath+1, varAleat.length);
                        if(tabMath[r] == '\u207B\u00B9'){
                            nbreInt21 = varAleat.substring(posMath+2, varAleat.length);
                        }
                    }
                }
                u = posMath;//POUR POURVOIR RECUPERER LA FONCTION  MATHEMATIQUE APRES

                // SI LA PARENTHESE APARAIT DIRECTEMENT APRES LA FONCTION MATHEMATIQUE
                if(varAleat.substring(posMath+1,posMath+2) == '('){
                    nbreInt2 = varAleat.substring(posMath+1, varAleat.length);
                    if(tabMath[r] == '\u207B\u00B9'){
                        nbreInt2 = varAleat.substring(posMath+2, varAleat.length);
                    }
                    // RECHERCHE LA PARENTHESE FERMANTE ET RECUPERE LE NOMBRE ENTRE CETTE PARENTHESE
                    for (var b = 0; b < nbreInt2.length; b++) {
                        tabPosSigneApres[b] = nbreInt2.substring(b, b+1);
                        if(tabPosSigneApres[b] == '('){
                            balanceMath2++;
                        }else if(tabPosSigneApres[b] == ')'){
                            balanceMath2--;
                        }
                        if (balanceMath2 == 0) {
                            //RECUPERE LE NOMBRE ET EVAL ENTRE CETTE PARENTHESE NOTE nbreInt2 ET REMPLACE LEXPRESSION ENTRE PARENTHESE 
                            nbre2 = nbreInt2.substring(0, b+1);
                            nbreInt2 = nbreInt2.substring(1, b); 
                            paranthese(nbreInt2);
                            nbreInt2 = eval(nbreInt2);
                            varAleat = varAleat.replace(nbre2, nbreInt2);
                            break;
                        }
                    }
                    
                    for(r=0; r<6; r++){
                        tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                        if(posMath < tabPosMath[r]){
                            posMath = tabPosMath[r];
                        }
                    }
                }

                // SI LA PARENTHESE APARAIT DIRECTEMENT AVANT LA FONCTION MATHEMATIQUE
                if (varAleat.substring(posMath-1, posMath) == ')') {
                    nbreInt1 = varAleat.substring(0, posMath);
                    // RECHERCHE LA PARENTHESE OUVRANTE 
                    for(var c = nbreInt1.length; c > 0; c--){
                        tabPosSigneAvant[c] = nbreInt1.substring(c-1, c);
                        if (tabPosSigneAvant[c] == ')') {
                            balanceMath1--;
                        }else if (tabPosSigneAvant[c] == '(') {
                            balanceMath1++;
                        }
                        if (balanceMath1 == 0) {
                            //RECUPERE LE NOMBRE ET EVAL ENTRE CETTE PARENTHESE NOTE nbreInt1 ET REMPLACE LEXPRESSION ENTRE PARENTHESE 
                            nbre1 = nbreInt1.substring(c-1,posMath);
                            nbreInt1 = nbreInt1.substring(c, posMath-1);
                            paranthese(nbreInt1);
                            nbreInt1 = eval(nbreInt1);
                            varAleat = varAleat.replace(nbre1,nbreInt1);
                            break;
                        }
                    }
                    // RECHERCHE LA POSITION DE LA FONCTION MATHEMAQUE LA PLUS A DROIT DANS L'EXPRESSION varAleat ET LA STOCKE DANS posMath
                    for(r=0; r<6; r++){
                        tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                        if(posMath < tabPosMath[r]){
                            posMath = tabPosMath[r];
                        }
                    }
                }
                //Substitution des deux parties a calculees

                    //Gauche
                posMath = -1;
                for(r=0; r<6; r++){
                    tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                     // RECHERCHE LA POSITION DE LA FONCTION MATHEMAQUE LA PLUS A DROIT DANS L'EXPRESSION varAleat ET LA STOCKE DANS posMath
                    if(posMath < tabPosMath[r]){
                        posMath = tabPosMath[r];
                    }
                }
                //COUPE LE CHAINE DE CARRACTERE varAleat DU DEBUT JUSQU'A posMath ET STOCKE DANS nombre12
                nombre12 = varAleat.substring(0,posMath);
                q = '';// 
                for(o=0; o<9; o++){
                    //RECHERCHE LA POSITION DU SIGNE LE PLUS A DROITE DANS LA CHAINE nombre12 ET STOCKE DANS posSigneMtahIn[O]
                    posSigneMathIn[o] = nombre12.lastIndexOf(posSigneMath[o]);
                    if(posSigneMathIn[o] != -1){
                        //COUPE LA CHAINE nombre12 DE SA POSITION posSigneMtahIn[O]+1 JUSQU'A SA FIN ET STOCKE DANS nombre1
                        if(posSigneMathIn[o] > valFi1){
                            nombre1 = nombre12.substring((posSigneMathIn[o]+1), nombre12.length);
                            q = nombre1;
                            //STOCKE LA VALEUR DU COTE GAUCHE QUI SERA REMPLACEE DANS Q
                            valFi1 = posSigneMathIn[o];
                        }
                    }
                }
                posMath = -1;
                for(r=0; r<6; r++){
                    tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                    if(posMath < tabPosMath[r]){
                        posMath = tabPosMath[r];
                    }
                    // VERIFIE QUE nombre1 N'A PAS DE VALEUR ET LUI RENVOIE CELLE DE nombre12
                    if(tabPosMath[r]  != -1 && nombre1 == undefined){
                        nombre1 = nombre12;
                    }
                }
                if(nombre1 == ''){
                    nombre1 = undefined;
                }
                if (q == '') {
                    q = nombre1;
                }

                //DROITE
                //COUPE LA CHAINE DE CARRACTERE varAleat DE posMath JUSQU'A SA FIN ET STOCKE DANS nombre22
                nombre22 = varAleat.substring(posMath, varAleat.length);
                p='';
                for(e=0; e<9; e++){
                    //RECHERCHE LA POSITION DU SIGNE LE PLUS A GAUCHE DANS LA CHAINE nombre22 ET STOCKE DANS posSigneMtahFi[e]
                    posSigneMathFi[e] = nombre22.indexOf(posSigneMath[e]);
                    if (posSigneMathFi[e] != -1) {
                        if (posSigneMathFi[e] <= valFi2 || valFi2 == -1) {
                            valFi2 = posSigneMathFi[e]
                            //COUPE LA CHAINE nombre22 DE SA POSITION 1 JUSQU'A LA POSITION posSigneMtahFi[e] ET STOCKE DANS nombre2
                            nombre2 = nombre22.substring(1, posSigneMathFi[e]);
                            if(nombre22.substring(0, 2) == '⁻¹'){
                                nombre2 = nombre22.substring(2, posSigneMathFi[e]);
                            }
                            //STOCKE LA VALEUR DU COTE DROTE QUI SERA REMPLACEE DANS p
                            p = nombre22.substring(0, posSigneMathFi[e]); 
                        }
                    } 
                }   
                if (p == '') {
                    p = nombre22.substring(0, varAleat.length);
                }
                
                
                posMath = -1;
                for(r=0; r<6; r++){
                    tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                    if(varAleat.length != tabPosMath[r] && nombre2 == undefined){
                        nombre2 = nombre22.substring(1, varAleat.length);
                        if(nombre22.substring(0, 2) == '⁻¹'){
                            nombre2 = nombre22.substring(2, varAleat.length);
                        }
                        if(nombre2 ==''){
                            nombre2 = undefined;
                        }
                    }
                }
                if(nombre2 == ''){
                    nombre2 = undefined;
                }
                
                for(o=0; o<9; o++){
                    if (posSigneMath[o] ==  nombre1) {
                        nombre1 = undefined;
                    }
                    if (posSigneMath[o] ==  nombre2) {
                        nombre2 = undefined;
                    }
                }
                //CHERCHE LA CONDITION QUI VERIFIE LES VALEURS DE nombre1, nombre2 ET LA FONCTION MATHEMATIQUE PUIS REMPLACE q ET p PAS LES RESUULTAT DES CALCULES DE nombre1 ET nombre2
                if (nombre1 != undefined && nombre2 != undefined && varAleat.substring(u, (u+1)) == '\u221a') {
                    varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre2), 1/(parseFloat(nombre1))));
                }
                if(nombre1 != undefined && nombre2 == undefined && varAleat.substring(u, (u+1)) == '\u00b3'){
                    varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre1), 3));
                }
                if(nombre1 != undefined && nombre2 == undefined && varAleat.substring(u, (u+1)) == '\u00b2'){
                    varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre1), 2));
                }
                if(nombre1 != undefined && nombre2 != undefined && varAleat.substring(u, (u+1)) == '^'){
                    varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre1), parseFloat(nombre2)));
                }
                if(nombre1 != undefined && nombre2 == undefined && varAleat.substring(u, (u+2)) == '⁻¹'){
                    varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre1), (-1)));
                }
                if(nombre1 != undefined && nombre2 == undefined && varAleat.substring(u, (u+1)) == '%'){
                    varAleat = varAleat.replace((q+p), (parseFloat(nombre1)/100));
                }
                if (nombre1 == undefined && nombre2 != undefined && varAleat.substring(u, (u+1)) == '\u221a') {
                    if (q != undefined) {
                        varAleat = varAleat.replace((q+p), Math.pow(parseFloat(nombre2), 1/2));
                    }else{
                        varAleat = varAleat.replace((p), Math.pow(parseFloat(nombre2), 1/2));
                    }
                }
                p = '';
                q = '';
                nombre1 = undefined;
                nombre2 = undefined;
                nombre12 = undefined;
                nombre22 = undefined;
                valFi1 = -1;
                valFi2 = -1;
                for(r=0; r<6; r++){
                    tabPosMath[r] = varAleat.lastIndexOf(tabMath[r]);
                    if(posMath < tabPosMath[r]){
                        // RECHERCHE LA POSITION DE LA FONCTION MATHEMAQUE LA PLUS A DROIT DANS L'EXPRESSION varAleat ET LA STOCKE DANS posMath
                        posMath = tabPosMath[r];
                    }
                }
                //SORT DIRECTEMENT DE BOUCLE LORSQUE LES FONCTIONS MATHEMATIQUES SONT A LA POSITON -1
                if(posMath == -1){
                    break;
                }
            }while(tabPosMath[0] != -1 || tabPosMath[1] != -1 || tabPosMath[2] != -1 || tabPosMath[3] != -1 || tabPosMath[4] != -1 || tabPosMath[5] != -1);
                
            // GESTION DES FONCTIONS TRIGONOMETRIQUES DE LA CALCULATRICE
            do{
                pos = -1;
                for( var i=0; i<6; i++){
                    tabPosTrigo[i] = varAleat.lastIndexOf(tabTrigo[i]);
			
                    if(pos < tabPosTrigo[i]){
                        //cOUPE LA CHAINE varAleat DE LA POSTION (tabPosTrigo[i] A SA FIN ET STOCKE  DANS textInt
                        textInt = varAleat.substring(tabPosTrigo[i], varAleat.length);
                        // RECHERCHE LA POSITION DE LA FONCTION TRIGONOMETRIQUE LA PLUS A DROIT DANS L'EXPRESSION varAleat ET LA STOCKE DANS pos
                        pos = tabPosTrigo[i];
                    }
                }
                if(pos != -1){
                    //RECUPRE LA POSITON DE LA PARENTHESE DIRECTEMENT DEVANT CELLE CI ET LA STOCKE DANS posInOu
                    posInOu = textInt.indexOf("(");
                    //cOUPE LA CHAINE textInt DE LA POSTION posInOu A SA FIN ET STOCKE  DANS textInt1
                    textInt1 = textInt.substring(posInOu, textInt.length);
                        // VERIFIE L'EQUITABILITE DES PARENTHESES DANS L'EXPRESSION textInt1
                        for( var t=0; t<textInt1.length; t++){
                        textInt2[t] = textInt1.substring(t, t+1);
                        if(textInt2[t] == '('){
                            balance++;
                        }else if(textInt2[t] == ')'){
                            balance--;
                        }
                        //SI CETTE EQUITABILITRE ET VERIFIER, SECTIONNER ET STOCKER LA PARTIE ENTRE PARENTHESE DANS textInt1 ET LA PARTIE DELIMITER PAR LES PARENTHESES DANS textInt PUIS SORT DE LA BOUCLE
                        if(balance == 0){
                            textInt1 = textInt1.substring(1, t);
                            textInt = textInt.substring(0, posInOu+t+1);
                            break;
                        }
                    }   
                    //BALANCE L'EXPRESSION textInT1 DANS LA FONCTION PARENTHESE POUR EVALUER TOUTE LES PARENTHESES DANS L'EXPRESSION S'IL Y EN A 
                    paranthese(textInt1);
                    textInt1 = eval(textInt1);
                    // CHERCHE LA FONCTION TRIGONOMETRIQUE INCLU DANS L'EXPRESSION CALCULE PUIS REMPLACER LA DITE FONCTION PAR SA VALEUR DANS varAleat
                    if(textInt.includes(tabTrigo[0])){ 
                        varAleat = varAleat.replace(textInt,Math.sin(parseFloat(textInt1)*(Math.PI/180)));
                    }
                    if(textInt.includes(tabTrigo[1])){
                        varAleat = varAleat.replace(textInt, Math.cos(parseFloat(textInt1)*(Math.PI/180)));
                    }
                    if(textInt.includes(tabTrigo[2])){
                        varAleat = varAleat.replace(textInt, Math.tan(parseFloat(textInt1)*(Math.PI/180)));
                    }
                    if(textInt.includes(tabTrigo[3])){
                        varAleat = varAleat.replace(textInt, 2*(Math.cos(parseFloat(textInt1)*(Math.PI/180)))*(Math.sin(parseFloat(textInt1)*(Math.PI/180))));
                    }
                    if(textInt.includes(tabTrigo[4])){
                        varAleat = varAleat.replace(textInt, (Math.cos(parseFloat(textInt1)*(Math.PI/180)))*(Math.cos(parseFloat(textInt1)*(Math.PI/180)))-(Math.sin(parseFloat(textInt1)*(Math.PI/180)))*(Math.sin(parseFloat(textInt1)*(Math.PI/180))));
                    }
                    if(textInt.includes(tabTrigo[5])){
                        varAleat = varAleat.replace(textInt, 1/((Math.cos(parseFloat(textInt1)*(Math.PI/180)))*(Math.cos(parseFloat(textInt1)*(Math.PI/180)))));
                    } 
                    }else{
                        break;
                    }
            } while(tabPosTrigo[0] != -1 || tabPosTrigo[1] != -1 || tabPosTrigo[2] != -1 || tabPosTrigo[3] != -1 || tabPosTrigo[4] != -1 || tabPosTrigo[5] != -1);

                


            paranthese(varAleat);
            e2.innerHTML = eval(varAleat);
        }
        
    // EVENNEMENT SUR FONCTION
        newFonction1.addEventListener('click', function(){eliminer(newEcranEntree);});
        newFonction2.addEventListener('click', function(){effacer(newEcranEntree,newEcranSortie);});
        newFonction3.addEventListener('click', function(){supprimer(newEcranEntree);});
        newFonction4.addEventListener('click', function(){ resultat(newEcranEntree,newEcranSortie);});

    // INSERTIONS DES CONTENUS DE FONCTION DANS LA PAGE HTML
        
        newFonction.appendChild(newFonction2);
        newFonction.appendChild(newFonction1);
        newFonction.appendChild(newFonction3);
        newFonction.appendChild(newFonction4);

// A PROPOS DE LA DIV D'ID fontionTrigo
    // CREATION DES INPUT POUR FONCTION TRIGONOMETRIQUE
        var newFonctionTrigo1 = document.createElement('input'); 
        var newFonctionTrigo2 = document.createElement('input'); 
        var newFonctionTrigo3 = document.createElement('input'); 
        var newFonctionTrigo4 = document.createElement('input'); 
        var newFonctionTrigo5 = document.createElement('input'); 
        var newFonctionTrigo6 = document.createElement('input'); 
        var newFonctionTrigo7 = document.createElement('input'); 
        var newFonctionTrigo8 = document.createElement('input'); 

    // VALEURS DES INPUTS DE FONCTION TRIGONOMETRIQUE
        newFonctionTrigo1.value = 'sin';
        newFonctionTrigo2.value = 'cos';
        newFonctionTrigo3.value = 'tan';
        newFonctionTrigo4.value = '(';
        newFonctionTrigo5.value = 'sin\u207B\u00B9';
        newFonctionTrigo6.value = 'cos\u207B\u00B9';
        newFonctionTrigo7.value = 'tan\u207B\u00B9';
        newFonctionTrigo8.value = ')';

    // TYPES DES INPUTS
        newFonctionTrigo1.type = 'button';
        newFonctionTrigo2.type = 'button';
        newFonctionTrigo3.type = 'button';
        newFonctionTrigo4.type = 'button';
        newFonctionTrigo5.type = 'button';
        newFonctionTrigo6.type = 'button';
        newFonctionTrigo7.type = 'button';
        newFonctionTrigo8.type = 'button';

    // FONCTION SUR FONCTION TRIGONOMNETRIQUE
        function fonctionTrigono(trigo){
            ecran_entree.innerHTML = ecran_entree.innerHTML + trigo.value + '(';
        }
        function Chiffre(nbre){
            ecran_entree.innerHTML += nbre;
        }
        /*function Trigo(){
            switch(this.value){
                case 'cos':
            }
        }*/

    // EVENEMENT SUR FONCTION TRIGONOMETRIQUE
        newFonctionTrigo1.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo2.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo3.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo4.addEventListener('click', function(){Chiffre('(');})
        newFonctionTrigo5.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo6.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo7.addEventListener('click', function(){fonctionTrigono(this);})
        newFonctionTrigo8.addEventListener('click', function(){Chiffre(')');})
    
    // INSERTIONS DES CONTENUS DE FONCTION TRIGONOMETRIQUE DANS LA PAGE WEB
        newFonctionTrigo.appendChild(newFonctionTrigo1);
        newFonctionTrigo.appendChild(newFonctionTrigo2);
        newFonctionTrigo.appendChild(newFonctionTrigo3);
        newFonctionTrigo.appendChild(newFonctionTrigo4);
        newFonctionTrigo.appendChild(newFonctionTrigo5);
        newFonctionTrigo.appendChild(newFonctionTrigo6);
        newFonctionTrigo.appendChild(newFonctionTrigo7);
        newFonctionTrigo.appendChild(newFonctionTrigo8);

// A PROPOS DE LA DIV D'ID maths
    // CREATION DES INPUT POUR MATH
        var newMath1 = document.createElement('input'); 
        var newMath2 = document.createElement('input'); 
        var newMath3 = document.createElement('input'); 
        var newMath4 = document.createElement('input'); 
        var newMath5 = document.createElement('input'); 
        var newMath6 = document.createElement('input'); 
        var newMath7 = document.createElement('input'); 
        var newMath8 = document.createElement('input'); 


    // VALEURS DES INPUTS DE MATH
        newMath1.value = '%';
        newMath2.value = '\u221a';
        newMath3.value = '\u00B2';
        newMath4.value = '\u207B\u00B9';
        newMath5.value = '\u207f\u221a';
        newMath6.value = 'y\u207f';
        newMath7.value = '\u00b3';
        newMath8.value = '10\u207f';
        
    // TYPES DES INPUTS
        newMath1.type = 'button';
        newMath2.type = 'button';
        newMath3.type = 'button';
        newMath4.type = 'button';
        newMath5.type = 'button';
        newMath6.type = 'button';
        newMath7.type = 'button';
        newMath8.type = 'button';

    // FONCTION SUR MATH
        function fonctMath(fonctTri){
            newEcranEntree.innerHTML += fonctTri; 
        }
    // EVENNEMENT SUR MATH
        newMath1.addEventListener('click', function(){ fonctMath('%');})
        newMath2.addEventListener('click', function(){ fonctMath('\u221a');})
        newMath3.addEventListener('click', function(){ fonctMath('²');})
        newMath4.addEventListener('click', function(){ fonctMath('\u207B\u00B9');})
        newMath5.addEventListener('click', function(){fonctMath('\u221a');})
        newMath6.addEventListener('click', function(){fonctMath('^');})
        newMath7.addEventListener('click', function(){fonctMath('\u00b3');})
        newMath8.addEventListener('click', function(){fonctMath('10^');})
    // INSERTIONS DES CONTENUS DE MATH DANS LA PAGE HTML
        
        newMath.appendChild(newMath2);
        newMath.appendChild(newMath3);
        newMath.appendChild(newMath4);
        newMath.appendChild(newMath1);
        newMath.appendChild(newMath5);
        newMath.appendChild(newMath6);
        newMath.appendChild(newMath7);
        newMath.appendChild(newMath8);
    

//:: A PROPOS DE LA DIV D'ID pave
    // A PROPOS DE LA DIV D'ID chiffre
        // CREATION DES INPUT POUR CHIFFRE
            var newChiffre0 = document.createElement('input');
            var newChiffre1 = document.createElement('input'); 
            var newChiffre2 = document.createElement('input');
            var newChiffre3 = document.createElement('input');
            var newChiffre4 = document.createElement('input');
            var newChiffre5 = document.createElement('input');
            var newChiffre6 = document.createElement('input');
            var newChiffre7 = document.createElement('input');
            var newChiffre8 = document.createElement('input');
            var newChiffre9 = document.createElement('input');
            var newChiffre10 = document.createElement('input');
            var newChiffre11 = document.createElement('input');
            
        // VALEURS DES INPUTS DE CHIFFRE
            newChiffre0.value = '0';
            newChiffre1.value = '1';
            newChiffre2.value = '2';
            newChiffre3.value = '3';
            newChiffre4.value = '4';
            newChiffre5.value = '5';
            newChiffre6.value = '6';
            newChiffre7.value = '7';
            newChiffre8.value = '8';
            newChiffre9.value = '9';
            newChiffre10.value = '.';
            newChiffre11.value = '+/-';

        // TYPES DES TOUCHES
            newChiffre0.type = 'button';
            newChiffre1.type = 'button';
            newChiffre2.type = 'button';
            newChiffre3.type = 'button';
            newChiffre4.type = 'button';
            newChiffre5.type = 'button';
            newChiffre6.type = 'button';
            newChiffre7.type = 'button';
            newChiffre8.type = 'button';
            newChiffre9.type = 'button';
            newChiffre10.type = 'button';
            newChiffre11.type = 'button';

        // AFFICHAGE DES CHIFFRES
            function Chiffre(nbre){
                ecran_entree.innerHTML += nbre;
            }
        // EVENNEMENT SUR CHIFFRE
            newChiffre0.addEventListener('click',function(){Chiffre('0');});
            newChiffre1.addEventListener('click', function(){Chiffre('1');});
            newChiffre2.addEventListener('click', function(){Chiffre('2');});
            newChiffre3.addEventListener('click', function(){Chiffre('3');});
            newChiffre4.addEventListener('click', function(){Chiffre('4');});
            newChiffre5.addEventListener('click', function(){Chiffre('5');});
            newChiffre6.addEventListener('click', function(){Chiffre('6');});
            newChiffre7.addEventListener('click', function(){Chiffre('7');});
            newChiffre8.addEventListener('click', function(){Chiffre('8');});
            newChiffre9.addEventListener('click', function(){Chiffre('9');});
            newChiffre10.addEventListener('click', function(){Chiffre('.');});
            newChiffre11.addEventListener('click', function(){
                ecran_entree.innerHTML = parseFloat(ecran_entree.innerHTML)*(-1);
                });

        // INSERTIONS DES CONTENUS DE CHIFFRE DANS LA PAGE HTML
            newChiffre.appendChild(newChiffre7);           
            newChiffre.appendChild(newChiffre8);
            newChiffre.appendChild(newChiffre9);
            newChiffre.appendChild(newChiffre4);           
            newChiffre.appendChild(newChiffre5);
            newChiffre.appendChild(newChiffre6);
            newChiffre.appendChild(newChiffre1);
            newChiffre.appendChild(newChiffre2);
            newChiffre.appendChild(newChiffre3);
            newChiffre.appendChild(newChiffre0);
            newChiffre.appendChild(newChiffre10);
            newChiffre.appendChild(newChiffre11);

    // A PROPOS DE LA DIV D'ID signe
        // CREATION DES INPUT POUR SIGNE
            var newSigne1 = document.createElement('input');
            var newSigne2 = document.createElement('input');
            var newSigne3 = document.createElement('input');
            var newSigne4 = document.createElement('input');

        // VALEURS DES INPUTS DE SIGNE
            newSigne1.value = '/';
            newSigne2.value = '*';
            newSigne3.value = '-';
            newSigne4.value = '+';
            
        // TYPES DES TOUCHES
            newSigne1.type = 'button';
            newSigne2.type = 'button';
            newSigne3.type = 'button';
            newSigne4.type = 'button';
        
        // FONCTION SUR SIGNE
        function Signe(sign){
            ecran_entree.innerHTML += sign;
        }
        // EVENNEMENT SUR SIGNE
            newSigne1.addEventListener('click',function(){Signe('/');});
            newSigne2.addEventListener('click',function(){Signe('*');});
            newSigne3.addEventListener('click',function(){Signe('-');});
            newSigne4.addEventListener('click',function(){Signe('+');});

        // INSERTIONS DES CONTENUS DE SIGNE DANS LA PAGE HTML
            newSigne.appendChild(newSigne1);
            newSigne.appendChild(newSigne2);
            newSigne.appendChild(newSigne3);
            newSigne.appendChild(newSigne4);
    
    //INSERTION DE LA CALCULATRICE DANS LA PAGE HTML
    
        newEcran.appendChild(newEcranEntree);
        newEcran.appendChild(newEcranSortie);

        newPave.appendChild(newChiffre);
        newPave.appendChild(newSigne);

        newCalco.appendChild(Entete);
        newCalco.appendChild(newEcran);
        newCalco.appendChild(newFonction);
        newCalco.appendChild(newFonctionTrigo);
        newCalco.appendChild(newMath);
        newCalco.appendChild(newPave);
        
        
        document.body.appendChild(newCalco);


