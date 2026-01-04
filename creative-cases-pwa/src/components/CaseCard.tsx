import type { CaseItem } from "../app/features/types";

type Props = {
  item: CaseItem;
};

export const CaseCard = ({ item }: Props) => {
  return (
    <article className="border rounded-md overflow-hidden hover:shadow-sm transition">
      {/* Image */}
      <img
        src={item.media.thumbnail}
        alt={item.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>

        <p className="text-sm text-gray-600 mt-1">
          {item.excerpt}
        </p>

        <div className="mt-3 text-xs text-gray-500">
          {item.industry}
        </div>
      </div>
    </article>
  );
};
