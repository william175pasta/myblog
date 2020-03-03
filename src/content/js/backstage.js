function showUserData() {
    let n = this.id;
    alert(n);
}

document.querySelector('#user').addEventListener('click', showUserData);
document.querySelector('#instock').addEventListener('click', showUserData);
document.querySelector('#goldflow').addEventListener('click', showUserData);


