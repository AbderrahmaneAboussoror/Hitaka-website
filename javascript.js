var menu = document.getElementById("nav-links");
function show(){
    menu.style.display = "block";
    setTimeout(function(){
        menu.style.right = "0";
    },0.1000);
}
function hide(){
    menu.style.right = "-200px";
    setTimeout(function(){
        menu.style.display = "none";
    },1000);
}


// filtrage
var select1 = document.querySelector("select");
var cols;
function test(){
    if(select1.options[select1.selectedIndex].text == "Toutes les categories"){
        cols = document.getElementsByClassName("menu-col");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Salades"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("salade");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Sushi"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("sushi");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Boissons"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("soda");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
    if(select1.options[select1.selectedIndex].text == "Plats"){
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'none';
        }
        cols = document.getElementsByClassName("plat");
        for(let i = 0; i < cols.length; i++){
            cols[i].style.display = 'flex';
        }
    }
}

//panier
var panier= document.getElementById("menuPanier");
var cocaqu = 1, sevenqu = 1, pepsiqu = 1, salade1qu = 1, salade2qu = 1, salade3qu = 1, totalP = 0;

function coca(){
    var coc = document.querySelectorAll("#cocaCola");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }

    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "cocaCola");
    text2.setAttribute("id", "cocaCola");
    text3.setAttribute("id", "cocaCola");

    text1.innerText = "CocaCola";
    text2.innerText = "x"+cocaqu;
    text3.innerText = "15Dh";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 15;  
    
    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);

    cocaqu++;
}

function sevenup(){
    var coc = document.querySelectorAll("#sevenupp");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }

    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "sevenupp");
    text2.setAttribute("id", "sevenupp");
    text3.setAttribute("id", "sevenupp");

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    text1.innerText = "7up";
    text2.innerText = "x"+sevenqu;
    text3.innerText = "17Dh";


    totalP += 17;
    
    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);

    sevenqu++;
}

function pepsi(){
    var coc = document.querySelectorAll("#pepsiS");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "pepsiS");
    text2.setAttribute("id", "pepsiS");
    text3.setAttribute("id", "pepsiS");

    text1.innerText = "Pepsi";
    text2.innerText = "x"+pepsiqu;
    text3.innerText = "20Dh";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP+=20;

    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);

    pepsiqu++;
}

function salade1(){
    var coc = document.querySelectorAll("#SM");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "SM");
    text2.setAttribute("id", "SM");
    text3.setAttribute("id", "SM");

    text1.innerText = "Salade Mexicaine";
    text2.innerText = "x"+salade1qu;
    text3.innerText = "30Dh";
    totalP+=30;

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);
    salade1qu++;
}

function salade2(){
    var coc = document.querySelectorAll("#SH");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "SH");
    text2.setAttribute("id", "SH");
    text3.setAttribute("id", "SH");

    text1.innerText = "Salade Hawaienne";
    text2.innerText = "x"+salade2qu;
    text3.innerText = "40Dh";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 40;
    
    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);
    
    salade2qu++;
}

function salade3(){
    var coc = document.querySelectorAll("#SN");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");

    text1.setAttribute("id", "SN");
    text2.setAttribute("id", "SN");
    text3.setAttribute("id", "SN");

    text1.innerText = "Salade Niçoise";
    text2.innerText = "x"+salade3qu;
    text3.innerText = "25Dh";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 25;
    
    document.getElementById("colPanNom").appendChild(text1);
    document.getElementById("colPanQu").appendChild(text2);
    document.getElementById("colPanPrix").appendChild(text3);

    salade3qu++;
}

//total
function total(){
    alert(totalP);
}