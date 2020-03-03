


function showUserData() {
    let n = this.id;
    alert(n);
}

document.querySelector('#user').addEventListener('click', showUserData);
document.querySelector('#instock').addEventListener('click', showUserData);
document.querySelector('#goldflow').addEventListener('click', showUserData);




document.querySelector('#popoBtn').addEventListener('click', function () {
    document.querySelector('#popobox').classList.toggle('open');
});

document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#popobox').classList.toggle('open');
});