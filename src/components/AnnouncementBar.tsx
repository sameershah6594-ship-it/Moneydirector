import { Link } from 'react-router-dom';

export function AnnouncementBar() {
  return (
    <div className="bg-brand-700 text-white text-xs sm:text-sm py-2 px-4 text-center">
      <Link to="/calculators" className="hover:underline font-medium">
        Explore 20+ free financial calculators to plan your money smarter
      </Link>
    </div>
  );
}
