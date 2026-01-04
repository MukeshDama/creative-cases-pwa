import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FilterBar } from "../components/FilterBar";
import { CaseSection } from "../components/CaseSection";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const CasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FilterBar />
      <CaseSection />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default CasesPage;