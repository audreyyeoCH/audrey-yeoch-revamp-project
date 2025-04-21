
import { TableOfContents as TocIcon } from "lucide-react";

const tocLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function TableOfContents() {
  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/70 dark:bg-background/80 shadow-lg border border-gray-200 dark:border-gray-800 rounded-2xl px-6 py-3 flex gap-6 z-40 animate-fade-in"
      style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.09)" }}
    >
      <TocIcon className="w-5 h-5 opacity-60 mr-1" />
      {tocLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary px-1 transition-colors"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
