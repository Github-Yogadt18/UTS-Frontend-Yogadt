import React from 'react';

const Service = () => {
  return (
    <div className="service">
      <img
        src="logo.png" // Ganti dengan path gambar layanan Anda
        alt="Service"
        className="service-image"
      />
      <p className="service-description">
        Wisata Gunung Ijen Banyuwangi, merupakan wisata internasional yang terdapat bluefire didalam kawahnya.
      </p>
      <a href="/" class="btn1">Pesan Tiket</a>
      <a href="/" class="btn">Cari Lainnya</a>

    </div>
  );
};

export default Service;
