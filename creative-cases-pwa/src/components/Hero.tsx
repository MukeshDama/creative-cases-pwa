import { useAppSelector } from "../app/store/hooks"

export const Hero = () => {
  const cases = useAppSelector((state) => state.cases.items);
  

  // derive simple data (easy to understand)
  const totalCases = cases.length;
  const industries = new Set(cases.map((c) => c.industry)).size;

  return (
    <section className="px-6 py-16 border-b">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Creative work for modern brands
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-2xl">
          We design and build digital experiences that help brands grow,
          engage users, and stand out.
        </p>

        {/* Stats */}
        <div className="mt-8 flex gap-8">
          <div>
            <div className="text-2xl font-semibold">{totalCases}</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>

          <div>
            <div className="text-2xl font-semibold">{industries}</div>
            <div className="text-sm text-gray-500">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
};
