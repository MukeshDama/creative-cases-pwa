import { useAppSelector } from "../app/store/hooks";
import { CaseCard } from "./CaseCard";

export const FeaturedCases = () => {
  const cases = useAppSelector((s) => s.cases.items);

  const featured = cases.filter((c) => c.featured).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="px-6 py-14 border-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((item) => (
            <div key={item.id} className="md:col-span-1">
              <CaseCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
