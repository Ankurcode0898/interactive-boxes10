<script>
  function selectBox(box, price) {

    document.querySelectorAll('.box').forEach(b => {
      b.classList.remove('selected');
      b.querySelector('input[type="radio"]').checked = false;
    });

    box.classList.add('selected');
    box.querySelector('input[type="radio"]').checked = true;

   
    document.getElementById('total').textContent = price.toFixed(2);
  }
</script>
