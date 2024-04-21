document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.chocolate-checkbox');
    var totalPriceElement = document.getElementById('total-price');
    var totalPrice = 0;
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        var selectedCount = document.querySelectorAll('.chocolate-checkbox:checked').length;
        if (selectedCount > 8) {
          alert('You can only select up to 8 chocolates.');
          this.checked = false;
          return;
        }
  
        var price = parseInt(this.value); 
        if (this.checked) {
          totalPrice += price;
        } else {
          totalPrice -= price;
        }
  
        totalPriceElement.textContent = '$' + totalPrice;
      });
    });
  });
  