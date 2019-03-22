var img1 = document.getElementById('img1');
  img1.onclick = function() {
  var buttonSrc = img1.getAttribute('src');
    img1.setAttribute('src', 'q2/ok.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '正解！1番が三角錐でした';
}

var img2 = document.getElementById('img2');
  img2.onclick = function() {
  var buttonSrc = img2.getAttribute('src');
    img2.setAttribute('src', 'q2/ng1.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念〜〜、2番は三角柱でした';
}

var img3 = document.getElementById('img3');
  img3.onclick = function() {
  var buttonSrc = img3.getAttribute('src');
    img3.setAttribute('src', 'q2/ng2.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念、3番は円錐でした';
}

var img4 = document.getElementById('img4');
  img4.onclick = function() {
  var buttonSrc = img4.getAttribute('src');
    img4.setAttribute('src', 'q2/ng3.png');
    var clickText = document.getElementById('ans');
    clickText.innerHTML = '残念、4番は四角錐でした';
}
