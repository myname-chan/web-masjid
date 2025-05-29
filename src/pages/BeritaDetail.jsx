import { useParams, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { berita } from "../components/ui/berita";

const BeritaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = berita.find((b) => b.id === parseInt(id));

  if (!item)
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-lg">Berita tidak ditemukan.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <main className="max-w-3xl mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            <p className="text-muted-foreground text-sm mb-2">{item.date}</p>
            <img src={item.image} alt={item.title} className="w-full rounded-lg mb-6" />
            <p className="text-base leading-relaxed mb-6">{item.description}</p>

            <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
            >
            ← Kembali
            </button>
        </main>
    </div>
  );
};

export default BeritaDetail;