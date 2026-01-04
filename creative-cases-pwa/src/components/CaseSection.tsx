import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../app/store/hooks"

export const CaseSection = () => {
  const [searchParams] = useSearchParams();
  const cases = useAppSelector((s) => s.cases.items);

  const industry = searchParams.get("industry");
  const category = searchParams.get("category");

  const filtered = cases.filter((c) => {
    const industryMatch = industry ? c.industry === industry : true;
    const categoryMatch = category ? c.categories.includes(category) : true;
    return industryMatch && categoryMatch;
  });

  return (
    <section className="px-6 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((c) => (
          <div key={c.id} className="border p-4">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
