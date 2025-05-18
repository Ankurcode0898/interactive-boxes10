<script>
  function selectBox(box, price) {
    // Deselect all boxes
    document.querySelectorAll('.box').forEach(b => {
      b.classList.remove('selected');
      b.querySelector('input[type="radio"]').checked = false;
    });

    // Select the clicked box
    box.classList.add('selected');
    box.querySelector('input[type="radio"]').checked = true;

    // Update total price
    document.getElementById('total').textContent = price.toFixed(2);
  }
</script>
