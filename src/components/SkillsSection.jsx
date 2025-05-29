import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Struktur Kepengurusan");
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [jadwalSholat, setJadwalSholat] = useState([]);
  const [tanggal, setTanggal] = useState("");

  const images = [
    { src: "/projects/masjid.png", alt: "Kegiatan Masjid" },
    { src: "/images/galeri2.jpg", alt: "Kajian Subuh" },
    { src: "/images/galeri3.jpg", alt: "TPA Anak" },
  ];

  const categories = [
    "Struktur Kepengurusan",
    "Infaq & Donasi",
    "Kegiatan Rutin",
    "Galeri",
    "Jadwal Sholat"
  ];

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
          params: {
            city: "Yogyakarta",
            country: "Indonesia",
            method: 11,
            timezonestring: "Asia/Jakarta",
          },
        });

        const data = response.data.data;
        const timings = data.timings;

        setJadwalSholat([
          { waktu: "Subuh", jam: timings.Fajr },
          { waktu: "Dzuhur", jam: timings.Dhuhr },
          { waktu: "Ashar", jam: timings.Asr },
          { waktu: "Maghrib", jam: timings.Maghrib },
          { waktu: "Isya", jam: timings.Isha },
        ]);

        setTanggal(data.date.readable);
      } catch (error) {
        console.error("Gagal mengambil jadwal sholat:", error);
      }
    };

    fetchJadwal();
  }, []);

  return (
    <section id="profil" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Profil</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-center">
          {activeCategory === "Struktur Kepengurusan" && (
            <div className="flex justify-center">
              <img
                src="/images/struktur-kepengurusan.png"
                alt="Struktur Kepengurusan"
                className="w-full max-w-2xl rounded-lg shadow-lg object-contain"
              />
            </div>
          )}

          {activeCategory === "Kegiatan Rutin" && (
            <div className="text-left max-w-2xl mx-auto bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">Jadwal Kegiatan Rutin</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Kajian Subuh: Setiap hari Ahad pukul 05.30 WIB</li>
                <li>TPA Anak: Senin - Jumat pukul 16.00 - 17.30 WIB</li>
                <li>Pengajian Ibu-ibu: Rabu sore setiap pekan</li>
                <li>Sholat Berjamaah dan Kultum: Setiap waktu sholat wajib</li>
              </ul>
            </div>
          )}

          {activeCategory === "Infaq & Donasi" && (
            <div className="bg-card p-6 rounded-lg shadow-md inline-block text-center max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">Infaq & Donasi Masjid</h3>
              <p className="text-muted-foreground mb-4">Salurkan bantuan Anda untuk operasional dan kegiatan Masjid Sholihin.</p>

              <div className="mb-4">
                <img
                  src="/images/qris-masjid.png"
                  alt="QRIS Donasi Masjid"
                  className="mx-auto w-48 h-48 object-contain rounded"
                />
              </div>

              <p className="text-sm text-muted-foreground">Atau transfer ke rekening:</p>
              <p className="text-lg font-medium mt-1">1234567890 (Bank Syariah Indonesia)</p>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-primary">Total Infaq Bulan Ini</h4>
                <p className="text-3xl font-bold text-green-600 mt-1">Rp 5.750.000</p>
                <p className="text-muted-foreground text-sm">Per 27 Mei 2025</p>
              </div>
            </div>
          )}

          {activeCategory === "Jadwal Sholat" && (
            <div className="text-left max-w-xl mx-auto bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                Jadwal Sholat - {tanggal}
              </h3>
              {jadwalSholat.length === 0 ? (
                <p className="text-center text-muted-foreground">Memuat jadwal sholat...</p>
              ) : (
                <table className="w-full text-sm text-muted-foreground text-left border border-border rounded-lg overflow-hidden">
                  <thead className="bg-secondary text-foreground">
                    <tr>
                      <th className="py-2 px-4">Waktu</th>
                      <th className="py-2 px-4">Jam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jadwalSholat.map((item, idx) => (
                      <tr key={idx} className="border-t border-border">
                        <td className="py-2 px-4">{item.waktu}</td>
                        <td className="py-2 px-4">{item.jam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeCategory === "Galeri" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className="rounded-lg shadow-md object-cover w-full h-56 cursor-pointer"
                    onClick={() => {
                      setPhotoIndex(idx);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>

              <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={photoIndex}
                slides={images.map((img) => ({ src: img.src }))}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
