var img1 = document.getElementById('img1');
  img1.onclick = function() {
  var buttonSrc = img1.getAttribute('src');
    img1.setAttribute('src', 'q1/ng1.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念〜〜、正解はワラビーでした';
}

var img2 = document.getElementById('img2');
  img2.onclick = function() {
  var buttonSrc = img2.getAttribute('src');
    img2.setAttribute('src', 'q1/ng2.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念〜〜、正解はワラビーでした';
}

var img3 = document.getElementById('img3');
  img3.onclick = function() {
  var buttonSrc = img3.getAttribute('src');
    img3.setAttribute('src', 'q1/ok.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '正解!!答えはワラビーでした';
}

var img4 = document.getElementById('img4');
  img4.onclick = function() {
  var buttonSrc = img4.getAttribute('src');
    img4.setAttribute('src', 'q1/ng3.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念〜〜、正解はワラビーでした';
}
