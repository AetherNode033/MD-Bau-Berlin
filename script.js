const translations = {
  sr: {
    home: "Početna",
    services: "Usluge",
    projects: "Projekti",
    contact: "Kontakt",
    title: "Vaš partner za Trockenbau u Berlinu",
    subtitle: "Profesionalni radovi suve gradnje i enterijera",
    learn: "Saznajte više",
    wallTitle: "Pregradni zidovi",
    wallDesc: "Montažne pregrade i suvi zidovi",
    ceilingTitle: "Plafoni",
    ceilingDesc: "Izrada svih vrsta spuštenih gipsanih plafona i plafonskih sistema.",
    insulationTitle: "Izolacija",
    insulationDesc: "Toplotna i zvučna izolacija",
    servicesTitle: "Naše usluge",
    servicesSubtitle: "Sve vrste građevinskih i suvo-graditeljskih radova",
    service1: "Grubi građevinski radovi",
    service4: "Suva gradnja, gipsane ploče, pregradni zidovi",
    service5: "Sanitarne instalacije",
    service8: "Malterisanje",
    service12: "Podne podloge",
    service14: "Zidarski radovi",
    title2: "Projekti",
    subtitle2: "Pregled naših završenih građevinskih projekata",
    allproject: "Svi projekti",
    trockenbau: "Gipsani radovi",
    decken: "Plafoni",
    isolierung: "Izolacioni radovi",
    holzbauarbeiten: "Drvene pregrade",
    mauerarbeiten: "Zidanje"
    
  },

  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    projects: "Projekte",
    contact: "Kontakt",
    title: "Ihr Partner für Trockenbau in Berlin",
    subtitle: "Professionelle Trockenbau- und Innenausbauarbeiten",
    learn: "Mehr erfahren",
    wallTitle: "Trennwände",
    wallDesc: "Montage von Trockenbauwänden",
    ceilingTitle: "Decken",
    ceilingDesc: "Montage von abgehängten Decken und Gipskartonsystemen.",
    insulationTitle: "Isolierung",
    insulationDesc: "Wärme- und Schalldämmung",
    servicesTitle: "Unsere Leistungen",
    servicesSubtitle: "Alle Arten von Bau- und Trockenbauarbeiten",
    service1: "Rohbauarbeiten",
    service4: "Trockenbau",
    service5: "Sanitär",
    service8: "Putzarbeiten",
    service12: "Estrich",
    service14: "Maurerarbeiten",
    title2:"Unsere Projekte",
    subtitle2:"Ein Überblick über unsere abgeschlossenen Bauprojekte",
     allproject: "Alle projekte",
    trockenbau: "Trockenbau",
    decken: "Decken",
    isolierung: "Isolierung",
    holzbauarbeiten: "Holzbauarbeiten",
    mauerarbeiten: "Mauerarbeiten"
  }

 
};

function setLang(lang) {
  document.querySelectorAll(".lang").forEach(element => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });
}

//filtriranje slika po tipu 

const buttons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

buttons.forEach(button=>{
button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));
button.classList.add("active");

let filter = button.dataset.filter;

projects.forEach(project=>{

if(filter === "all"){
project.style.display="block";
}else{
if(project.dataset.category === filter){
project.style.display="block";
}else{
project.style.display="none";
}
}

});

});
});


