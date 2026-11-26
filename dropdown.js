function toggleDropdown(buttonElement) {
    // const'id viitavad html elemendile klikitud objektis (objekt edastab iseennast kui buttonElement)
    const content = buttonElement.closest('.dropdown').querySelector('.dropdown-content');
    const img = buttonElement.closest('.dropdown').querySelector('.dropbtn img');
    const dropbtn = buttonElement.closest('.dropdown').querySelector('.dropbtn');
    
    // "show" lisatakse või eemaldatakse elementidest iga vajutuse puhul. "show" määrab kas dropdown on avatud või mitte

    // toggle'ib class "show" content elemendi sees
    content.classList.toggle('show');
    
    // toggle'ib class "show" img elemendi sees
    img.classList.toggle('show');

    // toggle'ib class "show" dropbtn elemendi sees
    dropbtn.classList.toggle('show');
}

/* algne JS kood saad siit chattist ning tehti ise muudatusi vajadusel https://share.gemini.google/mGbYq3pPKYgV */