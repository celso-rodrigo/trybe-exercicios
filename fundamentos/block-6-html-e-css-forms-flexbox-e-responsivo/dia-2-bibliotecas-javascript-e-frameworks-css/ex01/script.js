const validate = new window.JustValidate('#form');

validate
  .addField('#nameInput', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])

  var picker = new Pikaday({ field: document.getElementById('travelDate') });