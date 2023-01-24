let readMoreBtn = document.querySelector('.read-more-button');
let hide_blocks = document.querySelector('.hide_blocks');

readMoreBtn.addEventListener('click', function () {
  readMoreBtn.style.display = 'none';
  hide_blocks.style.display = 'block';
});
