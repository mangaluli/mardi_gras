document.querySelector('.contact > button').addEventListener('click', () => check_fontact_form());

let check_fontact_form = () => {
  let
    name = document.querySelector('.contact > input:nth-child(2n)').value,
    last = document.querySelector('.contact > input:nth-child(3n)').value,
    email = document.querySelector('.contact > input:nth-child(4n)').value,
    message = document.querySelector('.contact > textarea').value,
    regex_email = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),
    regex_name = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    errors = [];


  !regex_name.test(name) ? errors.push('Name can only contain alphabetic characters') : null;
  !regex_name.test(last) ? errors.push('Last name can only contain alphabetic characters') : null;
  !regex_email.test(email) ? errors.push('The Email you provided is Invalid!') : null;
  message.length == '' ? errors.push('Massege can\'t be empty') : null;
  let output = document.querySelector('.error-output');
  output.innerHTML = '';


  output.classList.add('pass');

  errors.length == 0 ? output.innerHTML = 'Message sent successfully!' :
    errors.forEach((error) => {
      let _error = document.createElement('span');
      _error.innerHTML = error;
      output.appendChild(_error);
      output.classList.remove('pass');
    });
}