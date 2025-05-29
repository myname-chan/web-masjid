export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tentang <span className="text-primary">Masjid Sholihin</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar Masjid */}
          <div className="flex justify-center">
            <img
              src="/projects/masjid.png" // Pastikan gambar ini ada di folder public/projects
              alt="Foto Masjid Sholihin"
              className="rounded-lg shadow-lg max-w-full md:max-w-md"
            />
          </div>
          {/* Teks Pengenalan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Pusat Ibadah & Kegiatan Keagamaan di Rogocolo
            </h3>
            <p className="text-muted-foreground">
              Masjid Sholihin berdiri sebagai tempat ibadah sekaligus pusat kegiatan sosial, pendidikan, dan keagamaan warga sekitar Dusun Rogocolo.
            </p>
            <p className="text-muted-foreground">
              Dengan semangat kebersamaan, kami mengadakan berbagai kegiatan seperti pengajian rutin, pendidikan Al-Qur'an untuk anak-anak, serta program infaq dan donasi untuk mendukung operasional masjid dan kegiatan sosial.
            </p>

            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="cosmic-button">
                  Hubungi Kami
                </a>
                <a
                  href="/profil-masjid.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unduh Profil Masjid
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
