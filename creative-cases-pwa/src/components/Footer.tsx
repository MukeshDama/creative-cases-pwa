const Footer = () => {
  return (
    <footer className="border-t px-6 py-10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold">CreativeCases</h3>
          <p className="text-sm text-gray-600 mt-2 max-w-sm">
            Showcasing creative case studies focused on design,
            development, and performance.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="#cases" className="hover:text-black">Cases</a>
          <a href="#clients" className="hover:text-black">Clients</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} CreativeCases. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;