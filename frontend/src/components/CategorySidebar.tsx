// CategorySidebar.tsx - sidebar สำหรับเลือกหมวดหมู่หนังสือ
interface CategorySidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <aside className="sticky top-24 h-fit w-full rounded-2xl bg-white p-4 shadow-soft lg:w-60">
      <div className="mb-3 flex items-center justify-between text-sm font-bold text-primary">
        <span>หมวดหมู่</span>
        <span className="text-xs text-slate-400">Books</span>
      </div>

      <p className="mb-1 text-xs font-semibold text-slate-500">หมวดหลัก</p>
      <ul className="space-y-1 text-xs">
        {['ทั้งหมด', ...categories].map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onCategoryChange(cat)}
              className={`flex w-full items-center justify-between rounded-full border px-3 py-1 transition ${
                activeCategory === cat
                  ? 'border-transparent bg-primary text-white shadow'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-accent hover:bg-indigo-50 hover:shadow'
              }`}
            >
              <span>{cat}</span>
              <span>
                {cat === 'ทั้งหมด'
                  ? ''
                  : cat.includes('วิทยาศาสตร์')
                  ? ''
                  : cat.includes('เทคโนโลยี')
                  ? ''
                  : cat.includes('จิตวิทยา')
                  ? ''
                  : ''}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 mb-1 text-xs font-semibold text-slate-500">คัดพิเศษ</p>
      <ul className="space-y-1 text-xs">
        {['หนังสือมาใหม่', 'ยอดนิยม', 'แนะนำสำหรับคุณ'].map((label) => (
          <li key={label}>
            <button className="flex w-full items-center justify-between rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 transition hover:border-accent hover:bg-indigo-50 hover:shadow">
              <span>{label}</span>
              <span>
                {label === 'หนังสือมาใหม่'
                  ? ''
                  : label === 'ยอดนิยม'
                  ? ''
                  : ''}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
