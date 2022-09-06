// menangkap elemen HTML
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

//menambahkaan waktu
subtitle.innerHTML = new Date().toLocaleDateString();

// list array
let data_list_belanja = [];

// menambahkan event listener ke floating button
floating_button.addEventListener('click', () => {
  // munculkan modal
  if (modal.style.display == 'none') {
    showModal();
    return;
  }

  // sembunyikan kembali
  hideModal();
});

// menambahkan event listener ke modal bg
modal_bg.addEventListener('click', () => {
  hideModal();
});

// menambahkan event listener submit ke addlist form
addlist_form.addEventListener('submit', () => {
  // stop form form reload page
  event.preventDefault();

  // menangkap value dari masing-masing inputan
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  //push data ke list belanja
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  // clear input
  event.target.barang.value = '';
  event.target.harga.value = '';
  hideModal();

  renderToHTML();
});

// show modal
function showModal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

// hide modal
function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#F280B6';
  floating_button.style.transform = 'rotate(0deg)';
}

// render to HTML
function renderToHTML() {
  // clear elemnet div
  root.innerHTML = '';

  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class = "card">
      <small> ${e.tanggal} </small>
      <div>
        ${e.nama_barang} <span> Rp. ${e.harga_barang} </span>
      </div>
      <button onclick="deleteList(${i})">Selesai</button>
    </div>
    `;
  });
}

// /function handle delete list array
function deleteList(index) {
  data_list_belanja.splice(index, 1);

  renderToHTML();
}
