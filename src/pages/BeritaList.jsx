import { Link } from "react-router-dom";
import { berita } from "../components/ui/berita";
import { ThemeToggle } from "../components/ThemeToggle";

const BeritaList = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-16">
      {/* Tombol toggle tema */}
      <ThemeToggle />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Berita</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.map((item) => (
            <div key={item.id} className="bg-card p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="rounded mb-3 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.date}</p>
              <p className="mt-2 text-sm line-clamp-3">{item.description}</p>
              <Link
                to={`/berita/${item.id}`}
                className="text-primary hover:underline text-sm mt-2 block"
              >
                Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaList;
