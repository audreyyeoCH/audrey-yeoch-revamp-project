const TableOfContents = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-6 py-3">
      <ul className="flex gap-4">
        <li><a href="#about" className="text-sm hover:text-purple-600">About</a></li>
        <li><a href="#tech-stack" className="text-sm hover:text-purple-600">Tech</a></li>
        <li><a href="#education" className="text-sm hover:text-purple-600">Education</a></li>
        <li><a href="#work-experience" className="text-sm hover:text-purple-600">Work</a></li>
        <li><a href="#projects" className="text-sm hover:text-purple-600">Projects</a></li>
        <li><a href="#talks" className="text-sm hover:text-purple-600">Talks</a></li>
      </ul>
    </nav>
  );
};

export default TableOfContents;
