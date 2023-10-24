function myclick(x) {
    x = document.querySelector("input").value;
    localStorage.setItem('obj', x);
    console.log(localStorage.getItem('obj'));
    window.alert('Thanks');
    window.location.href = 'asset/index.html';
}