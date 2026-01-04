export const Header = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-lg font-semibold">
        CreativeCases
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm text-gray-600">
        <a href="#cases" className="hover:text-black">Cases</a>
        <a href="#clients" className="hover:text-black">Clients</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>
    </header>
  );
};
