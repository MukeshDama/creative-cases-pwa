import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../app/store/hooks"

export const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const industries = useAppSelector((s) => s.filters.industries);
  const categories = useAppSelector((s) => s.filters.categories);

  const industry = searchParams.get("industry") || "";
  const category = searchParams.get("category") || "";

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  return (
    <section className="px-6 py-4 border-b">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4">
        {/* Industry */}
        <select
          className="border px-3 py-2 text-sm"
          value={industry}
          onChange={(e) => updateParam("industry", e.target.value)}
        >
          <option value="">All Industries</option>
          {industries.map((i) => (
            <option key={i.id} value={i.label}>
              {i.label}
            </option>
          ))}
        </select>

        {/* Category */}
        <select
          className="border px-3 py-2 text-sm"
          value={category}
          onChange={(e) => updateParam("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.label}>
              {c.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
