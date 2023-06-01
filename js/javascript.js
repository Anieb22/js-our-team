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
  const tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  let nameCell = document.createElement('th');
  nameCell.innerText = personale[i].name;
  let roleCell = document.createElement('td');
  roleCell.innerText = personale[i].role;
  let imageCell = document.createElement('td');
  let image = document.createElement('td');
  image.innerText = personale[i].image
  imageCell.appendChild(image);

  tr.appendChild(nameCell);
  tr.appendChild(roleCell);
  tr.appendChild(imageCell);

  tbody.appendChild(tr);
}