
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');
const arr = Array.from(items);
alert(arr[0].textContent);
alert(arr[4].textContent);
alert(arr[1].textContent);
alert(arr[3].textContent);
alert(arr[2].textContent);
