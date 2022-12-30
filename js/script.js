const url = "https://lucx-albx.github.io/Dati/Dati_Piscina.json"
let fixBottom;
let pos = 0;
let ArrayFreqMax = []
let ArrayFreqMin = []
let sommaFreq = 0
let MediaTot = 0
let i  = 0



const AllData =()=>{
    const table = document.querySelector('Table thead');

    let tableHtml = "";
    tableHtml += "<tr>";
    tableHtml += `<th class="Lez"><div class="d-flex justify-content-center">N. lezione</div></th>`;
    tableHtml += `<th class="Alun"><div class="d-flex justify-content-center">Alunno</div></th>`;
    tableHtml += `<th class="Fat"><div class="d-flex justify-content-center">Fatica Percepita</div></th>`;
    tableHtml += `<th class="MPer"><div class="d-flex justify-content-center">m. Percorsi</div></th>`;
    tableHtml += `<th class="Max"><div class="d-flex justify-content-center">Max Freq Card (bpm)</div></th>`;
    tableHtml += `<th class="Min"><div class="d-flex justify-content-center">Min Freq Card (bpm)</div></th>`;
    tableHtml += "</tr>";

    table.innerHTML = tableHtml;     
}

const datiLoading =()=>{
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = "Cliccami";
    i = 0
    sommaFreq = 0
    AllData()

    fetch(url) 
    .then((dati) => dati.json())
    .then((data)=>{
        const dateTable = document.querySelector("table tbody");

        let insert = ""
        data.forEach(function({Num_Lezione, Nome_Alunno, Fatica, M_Percorsi, Max_Freq_Card, Min_Freq_Card}) {
            insert += "<tr class='effect' onclick='selezione(this)'>";
            insert += `<td class="Lez">${Num_Lezione}</td>`
            insert += `<td class="Alun">${Nome_Alunno}</td>`
            insert += `<td class="Fat">${Fatica}</td>`
            insert += `<td class="MPer">${M_Percorsi}</td>`
            insert += `<td class="Max">${Max_Freq_Card}</td>`
            insert += `<td class="Min">${Min_Freq_Card}</td>`
            insert += "</tr>";
            SommaFrequenze(Max_Freq_Card, Min_Freq_Card)
        })
        dateTable.innerHTML = insert;
    })

}

const Fortunato =()=>{
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = "Cliccami";
    i = 0
    sommaFreq = 0

    fetch(url) 
    .then((dati) => dati.json())
    .then((data)=>{
        const dateTable = document.querySelector("table tbody");

        let insert = ""
        data.forEach(function({Num_Lezione, Nome_Alunno, Fatica, M_Percorsi, Max_Freq_Card, Min_Freq_Card}) {
            if(Nome_Alunno == "Fortunato"){
                insert += "<tr class='effect' onclick='selezione(this)'>";
                insert += `<td class="Lez">${Num_Lezione}</td>`
                insert += `<td class="Alun">${Nome_Alunno}</td>`
                insert += `<td class="Fat">${Fatica}</td>`
                insert += `<td class="MPer">${M_Percorsi}</td>`
                insert += `<td class="Max">${Max_Freq_Card}</td>`
                insert += `<td class="Min">${Min_Freq_Card}</td>`
                insert += "</tr>";
                SommaFrequenze(Max_Freq_Card, Min_Freq_Card)
            }
        })
        dateTable.innerHTML = insert;
    })
    
}

const Audisio =()=>{
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = "Cliccami";
    i = 0
    sommaFreq = 0

    fetch(url) 
    .then((dati) => dati.json())
    .then((data)=>{
        const dateTable = document.querySelector("table tbody");

        let insert = ""
        data.forEach(function({Num_Lezione, Nome_Alunno, Fatica, M_Percorsi, Max_Freq_Card, Min_Freq_Card}) {
            if(Nome_Alunno == "Audisio"){
                insert += "<tr class='effect' onclick='selezione(this)'>";
                insert += `<td class="Lez">${Num_Lezione}</td>`
                insert += `<td class="Alun">${Nome_Alunno}</td>`
                insert += `<td class="Fat">${Fatica}</td>`
                insert += `<td class="MPer">${M_Percorsi}</td>`
                insert += `<td class="Max">${Max_Freq_Card}</td>`
                insert += `<td class="Min">${Min_Freq_Card}</td>`
                insert += "</tr>";
                SommaFrequenze(Max_Freq_Card, Min_Freq_Card)
            }
        })
        dateTable.innerHTML = insert;
    })
    
}

const Massimo =()=>{
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = "Cliccami";
    i = 0
    sommaFreq = 0

    fetch(url) 
    .then((dati) => dati.json())
    .then((data)=>{
        const dateTable = document.querySelector("table tbody");

        let insert = ""
        data.forEach(function({Num_Lezione, Nome_Alunno, Fatica, M_Percorsi, Max_Freq_Card, Min_Freq_Card}) {
            if(Nome_Alunno == "Massimo"){
                insert += "<tr class='effect' onclick='selezione(this)'>";
                insert += `<td class="Lez">${Num_Lezione}</td>`
                insert += `<td class="Alun">${Nome_Alunno}</td>`
                insert += `<td class="Fat">${Fatica}</td>`
                insert += `<td class="MPer">${M_Percorsi}</td>`
                insert += `<td class="Max">${Max_Freq_Card}</td>`
                insert += `<td class="Min">${Min_Freq_Card}</td>`
                insert += "</tr>";
                SommaFrequenze(Max_Freq_Card, Min_Freq_Card)
            }
        })
        dateTable.innerHTML = insert;
    })
    
}

const Paseri =()=>{
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = "Cliccami";
    i = 0
    sommaFreq = 0

    fetch(url) 
    .then((dati) => dati.json())
    .then((data)=>{
        const dateTable = document.querySelector("table tbody");

        let insert = ""
        data.forEach(function({Num_Lezione, Nome_Alunno, Fatica, M_Percorsi, Max_Freq_Card, Min_Freq_Card}) {
            if(Nome_Alunno == "Paseri"){
                insert += "<tr class='effect' onclick='selezione(this)'>";
                insert += `<td class="Lez">${Num_Lezione}</td>`
                insert += `<td class="Alun">${Nome_Alunno}</td>`
                insert += `<td class="Fat">${Fatica}</td>`
                insert += `<td class="MPer">${M_Percorsi}</td>`
                insert += `<td class="Max">${Max_Freq_Card}</td>`
                insert += `<td class="Min">${Min_Freq_Card}</td>`
                insert += "</tr>";
                SommaFrequenze(Max_Freq_Card, Min_Freq_Card)
            }
        })
        dateTable.innerHTML = insert;
    })
    
}

const SommaFrequenze =(max, min)=>{
    
    if(max != null && min != null){
        i += 2
        sommaFreq += parseInt(max) + parseInt(min)
    }
    
}

const Media =()=>{
    MediaTot = sommaFreq/i
    let Label_Media = document.querySelector(".ResultTotMedia")
    Label_Media.innerHTML = MediaTot.toFixed(2);
}

const animazioneFooter =()=>{
    let elem = document.querySelector(".bg");  
    pos = -200;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
        clearInterval(id);
        } else if(fixBottom == 1){
            pos = 1500
            elem.style.bottom = pos + 'px';
        }
        else {
            pos++; 
            elem.style.bottom = pos + 'px'; 
        }
    }

    let classe = document.querySelector(".bg").classList;
    if (classe.contains("decoHidden"))
        classe.replace("decoHidden", "decoVisible");

    fixBottom = 0;
}

const nascondiFooter =()=>{
    let classe = document.querySelector(".bg").classList;
    let elem = document.querySelector(".mt");  

    classe.replace("decoVisible", "decoHidden");

    pos = 1500
    elem.style.bottom = pos + 'px'; 
    fixBottom=1;
}

const selezione =(riga)=>{
    animazioneFooter()
    let Numero_Lezione = riga.querySelector(".Lez")
    let Alunno = riga.querySelector(".Alun")
    let Fatica = riga.querySelector(".Fat")
    let m_percorsi = riga.querySelector(".MPer")
    let Freq_Max = riga.querySelector(".Max")
    let Freq_Min = riga.querySelector(".Min")

    let Label_Num_Lez = document.querySelector(".LezLab")
    let Label_Alunno = document.querySelector(".AlLab")
    let Label_Fatica = document.querySelector(".FatLab")
    let Label_m_percorsi = document.querySelector(".MPerLab")
    let Label_Freq_Max = document.querySelector(".MaxLab")
    let Label_Freq_Min = document.querySelector(".MinLab")
    let Label_Media_Frequenze_Singole = document.querySelector(".media")
    
    Label_Num_Lez.textContent = Numero_Lezione.textContent
    Label_Alunno.textContent = Alunno.textContent
    Label_Fatica.textContent = Fatica.textContent
    Label_m_percorsi.textContent = m_percorsi.textContent
    Label_Freq_Max.textContent = Freq_Max.textContent
    Label_Freq_Min.textContent = Freq_Min.textContent

    let mediaFrequenze = 0
    
    if (Freq_Max.textContent != "null" && Freq_Min.textContent != "null"){
        mediaFrequenze = (parseInt(Freq_Max.textContent) + parseInt(Freq_Min.textContent))/2
    } else {
        mediaFrequenze = "null"
    }
    Label_Media_Frequenze_Singole.textContent = mediaFrequenze
    
}
