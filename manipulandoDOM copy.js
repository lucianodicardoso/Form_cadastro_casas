function addList() {
  let residenceNumber = document.querySelector('#residence_Number').value;
  let district = document.querySelector('#district').value;
  let city = document.querySelector('#city').value;
  let homearea = document.querySelector('#home_area').value;
  let newListValue = document.createElement('div');
  newListValue.innerText = 'Número Residência: '+residenceNumber+' | '+
                           ' Bairro: '+district+' | '+
                           'Cidade: '+city+' | '+
                           'Área da casa: '+homearea+' m2';
  newListValue.style.background = 'rgb(25,23,56)';
  newListValue.style.background = 'linear-gradient(90deg, rgba(25,23,56,1) 3%, rgba(24,23,24,1) 27%, rgba(32,19,19,1) 84%)';
  newListValue.style.color = 'white';
  newListValue.style.padding = '8px';
  newListValue.style.margin = '8px';
  newListValue.style.borderRadius = '5px';
  newListValue.style.fontFamily = 'Arial';
  newListValue.style.boxShadow = 'box-shadow: 5px 4px 12px 1px #000';
  newListValue.style.textAlign = 'center';

  let removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.innerText = 'Remover';
  removeButton.setAttribute('onclick', 'removeListHouse(this)');
  newListValue.appendChild(removeButton);
  document.querySelector('#house-list').appendChild(newListValue);
  document.querySelector('#residence_Number').value = null;
  document.querySelector('#district').value = null;
  document.querySelector('#city').value = null;
  document.querySelector('#home_area').value = null;
  removeButton.style.margin = '10px';
}
function removeListHouse(button) {
  let removeToList = button.parentNode
  document.querySelector('#house-list').removeChild(removeToList);
}