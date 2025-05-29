import { ArrowRight, Calendar } from "lucide-react";
import { berita } from "./ui/berita";

export const ProjectsSection = () => {
  return (
    <section id="berita" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Berita & <span className="text-primary">Informasi</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Informasi terbaru seputar kegiatan dan program Masjid Sholihin Rogocolo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2 gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4 mt-2 text-sm line-clamp-3">
                  {item.description}
                </p>

                <a
                  href={`/berita/${item.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="/berita"
          >
            Lihat Semua Berita <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
