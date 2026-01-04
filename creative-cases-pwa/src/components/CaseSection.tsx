import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../app/store/hooks";
import { CaseCard } from "./CaseCard";

export const CaseSection = () => {
  const [searchParams] = useSearchParams();
  const cases = useAppSelector((s) => s.cases.items);

  const industry = searchParams.get("industry");
  const category = searchParams.get("category");
  const view = searchParams.get("view") === "list" ? "list" : "grid";

  const filtered = cases.filter((c) => {
    const industryMatch = industry ? c.industry === industry : true;
    const categoryMatch = category ? c.categories.includes(category) : true;
    return industryMatch && categoryMatch;
  });

  return (
  <section id="cases" className="px-6 py-10">
    <div className="max-w-6xl mx-auto">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border p-4 flex gap-4 items-start"
            >
              <img
                src={item.media.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-32 h-24 object-cover flex-shrink-0"
              />

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.excerpt}
                </p>
                <div className="text-xs text-gray-500 mt-2">
                  {item.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No cases found.
        </p>
      )}
    </div>
  </section>
);

};
