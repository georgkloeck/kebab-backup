

function selection()
{
  const optionsList = document.querySelector("#fillings");
  if (optionsList) {
    optionsList.addEventListener('change', (event) => { document.querySelector("#demo").innerText = event.currentTarget.value;
  });
}

}


export {selection};
