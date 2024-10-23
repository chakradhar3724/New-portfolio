
const scriptURL = 'https://script.google.com/macros/s/AKfycbwBGIm-HZKMqi6pUTdUt52CSAWKnLe8HwT5OG2-697bZ3HCsLF2_pB_SzMPyO9AYsBE/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})