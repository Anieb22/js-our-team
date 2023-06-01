let personale = [
    {
     'name': 'Waine Barnett',
     'role': 'Founder & CEO',
     'image': 'wayne-barnett-founder-ceo.jpg'
    },
   
    {
       'name': 'Angela Caroll',
       'role': 'Chief Editor',
       'image': 'angela-caroll-chief-editor.jpg'
     },
   
     {
       'name': 'Walter Gordon',
       'role': 'Office Manager',
       'image': 'walter-gordon-office-manager.jpg'
     },
     
     {
       'name': 'Angela Lopez',
       'role': 'Social Media Manager',
       'image': 'angela-lopez-social-media-manager.jpg'
     },
     
     {
       'name': 'Scot Estrada',
       'role': 'Developer',
       'image': 'scott-estrada-developer.jpg'
     },
   
     {
       'name': 'Barbara Ramos',
       'role': 'Graphic Designer',
       'image': 'barbara-ramos-graphic-designer.jpg'
     },
     
   ]
   console.log(personale);

   for (let i = 0; i < personale.length; i++) {
    const cards = document.getElementById('card');
    //CONTENITORE CARDS
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.style.width = '18rem';
    //IMMAGINI
    const cardImage = document.createElement('img');
    cardImage.src = `../img/${personale[i].image}`;
    cardImage.classList.add('card-img-top');
    //NOME
    const cardName = document.createElement('div');
    cardName.classList.add('fw-bold');
    cardName.innerText = personale[i].name
    //RUOLO
    const cardBody = document.createElement ('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = personale[i].role
    //APPEND CHILD
    cardContainer.appendChild(cardImage);
    cards.appendChild(cardContainer);
    cardContainer.appendChild(cardBody)
    cardBody.appendChild(cardName)
    cardBody.appendChild(p)
  }
  