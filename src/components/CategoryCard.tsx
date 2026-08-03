import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export function CategoryCard({ name, slug, description, icon, image }: { name: string; slug: string; description: string; icon: string; image: string }) {
  const IconComp = (Icons as unknown as Record<string, LucideIcon>)[icon] || Icons.Folder;
  return (
    <Link to={`/categories/${slug}`} className="group card overflow-hidden hover:shadow-card transition-all duration-300">
      <div className="aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-ink-700 relative">
        <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
          <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center"><IconComp size={16} /></span>
          <span className="font-bold text-sm">{name}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-ink-500 dark:text-ink-400 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
