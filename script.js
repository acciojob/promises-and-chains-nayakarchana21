document.getElementById('form').addEventListener('submit',(e) => {
  e.preventDefault();

  const age = document.getElementById('age').value.trim();
  const name = document.getElementById('name').value.trim();

  new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve(`Hello ${name}, you are eligible to vote.`);
    } else {
      reject(`Sorry ${name}, you are not eligible to vote.`);
    }
 })
    .then((msg) => {
      alert(msg);
    })
    .catch((msg) => {
      alert(msg);
    });
});

