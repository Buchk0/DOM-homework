const addBtn = document.querySelector('#btn1');
const form = document.forms.creationForm;
const fio = document.getElementById('fio1');
const phone = document.getElementById('phone1');
const birthday = document.getElementById('birthday1');
const email = document.getElementById('email1');
const out = document.querySelector('#out1');

addBtn.onclick = () => {
  out.innerHTML = `<ol>
    <li>FIO: ${fio.value}</li>
    <li>PHONE: ${phone.value}</li>
    <li>B-DAY: ${birthday.value}</li>
    <li>EMAIL: ${email.value}</li>
  </ol>`;
};