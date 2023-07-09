const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');


yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);

function gorevSilTamamla(e) {
   const tiklanilanEleman = e.target;

   if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
    // console.log('checked tıklandı');  "Konsol kontrolü için aktif et"
    tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
   }
   if(tiklanilanEleman.classList.contains('gorev-btn-sil')) {
    // console.log('delete tıklandı');  "Konsol kontrolü için aktif et"
    tiklanilanEleman.parentElement.classList.toggle('kaybol');
    tiklanilanEleman.parentElement.addEventListener('transitionend' , function () {
     tiklanilanEleman.parentElement.remove();    
    })
   
   }
    
}


function gorevEkle(e) {
    // console.log("tıklandı");
    e.preventDefault();


    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = yeniGorev.value;
    gorevDiv.appendChild(gorevLi);


    gorevListesi.appendChild(gorevDiv);    //li > div eklendi.

    const grvTamamBtn = document.createElement('button');
    grvTamamBtn.classList.add('gorev-btn');
    grvTamamBtn.classList.add('gorev-btn-tamamlandi');
    grvTamamBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    gorevDiv.appendChild(grvTamamBtn);
    
    
    const grvSilBtn = document.createElement('button');
    grvSilBtn.classList.add('gorev-btn');
    grvSilBtn.classList.add('gorev-btn-sil');
    grvSilBtn.innerHTML = '<i class="fa-solid fa-ban"></i>';    
    gorevDiv.appendChild(grvSilBtn);

    yeniGorev.value = '';




}

