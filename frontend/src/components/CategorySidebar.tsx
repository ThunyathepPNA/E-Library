// CategorySidebar.tsx - sidebar สำหรับเลือกหมวดหมู่หนังสือ
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  // แปลงชื่อหมวดหลักที่เป็นค่าไทย ให้เป็น label ตามภาษา UI
  const renderMainLabel = (cat: string) => {
    switch (cat) {
      case 'ทั้งหมด':
        return t('sidebar.all');
      case 'เทคโนโลยี / IT':
        return t('sidebar.tech');
      case 'จิตวิทยา':
        return t('sidebar.psychology');
      case 'นิยาย':
        return t('sidebar.novel');
      default:
        return cat;
    }
  };

  // แปลงชื่อหมวดคัดพิเศษ
  const renderSpecialLabel = (label: string) => {
    switch (label) {
      case 'หนังสือมาใหม่':
        return t('sidebar.new');
      case 'ยอดนิยม':
        return t('sidebar.popular');
      case 'แนะนำสำหรับคุณ':
        return t('sidebar.recommended');
      default:
        return label;
    }
  };

  return (
    <aside className="sticky top-24 h-fit w-full rounded-2xl bg-white p-4 shadow-soft lg:w-60">
      <div className="mb-3 flex items-center justify-between text-sm font-bold text-primary">
        <span>{t('sidebar.title')}</span>
        <span className="text-xs text-slate-400">Books</span>
      </div>

      <p className="mb-1 text-xs font-semibold text-slate-500">
        {t('sidebar.main')}
      </p>
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
              <span>{renderMainLabel(cat)}</span>
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

      <p className="mt-4 mb-1 text-xs font-semibold text-slate-500">
        {t('sidebar.special')}
      </p>
      <ul className="space-y-1 text-xs">
        {['หนังสือมาใหม่', 'ยอดนิยม', 'แนะนำสำหรับคุณ'].map((label) => (
          <li key={label}>
            <button className="flex w-full items-center justify-between rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 transition hover:border-accent hover:bg-indigo-50 hover:shadow">
              <span>{renderSpecialLabel(label)}</span>
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
