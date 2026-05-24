import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareWarning,
  Link2Off,
  UserX,
  ShieldAlert,
  Lock,
  ArrowLeft,
  Clock,
  Calendar,
  ExternalLink,
  Play,
  Image,
  Tag,
  BookOpen,
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const iconMap: Record<string, React.ElementType> = {
  UserX,
  Link2Off,
  MessageSquareWarning,
  ShieldAlert,
  Lock,
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Tipos de Golpe": { bg: "bg-warning/10", text: "text-warning" },
  "Prevenção": { bg: "bg-success/10", text: "text-success" },
  "Emergência": { bg: "bg-destructive/10", text: "text-destructive" },
};

const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => {
  const Icon = iconMap[post.icon] || BookOpen;
  const colors = categoryColors[post.category] || { bg: "bg-primary/10", text: "text-primary" };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all cursor-pointer overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
        </div>

        <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-4`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {post.summary}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
          </span>
          {post.references.length > 0 && (
            <span className="flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5" />
              {post.references.length} referência{post.references.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const BlogPostView = ({ post, onBack }: { post: BlogPost; onBack: () => void }) => {
  const Icon = iconMap[post.icon] || BookOpen;
  const colors = categoryColors[post.category] || { bg: "bg-primary/10", text: "text-primary" };

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h4 key={i} className="text-lg font-bold mt-6 mb-3 text-foreground">
            {line.replace(/\*\*/g, "")}
          </h4>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="flex items-start gap-2 ml-2 mb-1.5">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-muted-foreground">{line.slice(2)}</span>
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        const num = line.match(/^(\d+)\./)?.[1];
        return (
          <li key={i} className="flex items-start gap-3 ml-2 mb-1.5">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center text-xs font-bold">
              {num}
            </span>
            <span className="text-muted-foreground">{line.replace(/^\d+\.\s/, "")}</span>
          </li>
        );
      }
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Voltar para artigos
      </button>

      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h2>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} de leitura
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
          </div>

          <div className={`inline-flex p-4 rounded-2xl ${colors.bg} mb-6`}>
            <Icon className={`w-8 h-8 ${colors.text}`} />
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom bg-card rounded-2xl p-6 md:p-8 shadow-card mb-8">
          <ul className="list-none p-0 m-0 space-y-0">
            {renderContent(post.content)}
          </ul>
        </div>

        {/* Media */}
        {post.media && post.media.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              Mídia e Recursos Visuais
            </h3>
            <div className="grid gap-4">
              {post.media.map((item, i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card">
                  {item.type === "video" && (
                    <div className="aspect-video">
                      <iframe
                        src={item.url}
                        title={item.caption || "Vídeo"}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {item.type === "image" && (
                    <img src={item.url} alt={item.caption || "Imagem"} className="w-full object-cover" loading="lazy" />
                  )}
                  {item.type === "link" && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.caption || item.url}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.url}</p>
                      </div>
                    </a>
                  )}
                  {item.caption && item.type !== "link" && (
                    <p className="p-3 text-sm text-muted-foreground">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {post.references.length > 0 && (
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Referências e Links Úteis
            </h3>
            <ul className="space-y-3">
              {post.references.map((ref, i) => (
                <li key={i}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{ref.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{ref.url}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </motion.div>
  );
};

const categories = ["Todos", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const EducationalSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section id="educacional" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <BlogPostView
              key="post"
              post={selectedPost}
              onBack={() => setSelectedPost(null)}
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Blog Educativo
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Aprenda a se proteger
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Artigos, referências e recursos para entender e combater golpes no WhatsApp.
                </p>
              </motion.div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => setSelectedPost(post)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationalSection;
