document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Boled Go", img: "boled go.jpg", price: 20000 },
      {
        id: 2,
        name: "Brazil Popurel neturen",
        img: "Brazil popurel neruren.jpg",
        price: 25000,
      },
      { id: 3, name: "Brazil", img: "brazil.jpg", price: 30000 },
      { id: 4, name: "Geanze Bohme", img: "geanze bohme.jpg", price: 35000 },
      { id: 5, name: "Haibrid", img: "haibrid.jpg", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yga sama d cart

      const cartItem = this.items.find((item) => item.id === newItem.id);

      //jika belim ada / cart masih kosong

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang udah ada d cart, cek apakah barang beda atau samadengan yang ada d cart

        this.items = this.items.map((item) => {
          //jika barng berbeda

          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada, tambah quantity dan total nya

            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      //abil item yang mau d remove berdasarkan id nya

      const cartItem = this.items.find((item) => item.id === id);

      //jika item lbih dari satu

      if (cartItem.quantity > 1) {
        //telusuri 11

        this.items = this.items.map((item) => {
          //jika bukan barang yang sama

          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //joika barang sisa 1

        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// //forem validation
const checkoutButton = document.querySelector(".checkout-button");
// checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

// form.addEventListener("keyup", function () {
//   for (let i = 0; i < form.elements.length; i++) {
//     if (form.elements[i].velue.length !== 0) {
//       checkoutButton.classList.remove("disabled");
//       checkoutButton.classList.add("disabled");
//     } else {
//       return false;
//     }
//   }
//   checkoutButton.disabled = false;
//   checkoutButton.classList.remove("disabled");
// });

//kirimh data ketika tombol chackout d klik
checkoutButton.addEventListener("click", function () {
  e.preventDefault();
  const formData = new formData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data).items;
  console.log(objData);
});

//konversi ke rupiah

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
