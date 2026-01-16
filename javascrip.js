const buyButtons = document.querySelectorAll(".add-to-cart");
  const modalInfo = document.getElementById("modal-info");
  const qrModal = new bootstrap.Modal(document.getElementById("qrModal"));

  buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);

      let qty = prompt(`Enter quantity for ${name}:`, 1);
      if (!qty || qty <= 0) return;

      const total = (price * qty).toFixed(2);

      modalInfo.innerHTML = `
        <strong>${name}</strong><br>
        Quantity: ${qty}<br>
        Total: <strong>$${total}</strong>
      `;

      qrModal.show();
    });
  });