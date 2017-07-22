$(document).ready(function(){
  submitForm();
});


function submitForm() {
  $('form').on('submit', (event) => {
    let newItem = $('#item').val();
    $('#list ol').append(`<li>${newItem}`);
    event.preventDefault();
  })
}
