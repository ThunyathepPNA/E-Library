// LanguageSwitcher.tsx - ปุ่มเปลี่ยนภาษาใช้งานซ้ำได้ทั้งเว็บ
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('en') ? 'en' : 'th';

  const changeLang = (lng: 'th' | 'en') => {
    i18n.changeLanguage(lng);
  };

  if (compact) {
    // เวอร์ชันปุ่มเล็ก ๆ สำหรับ AuthShell
    return (
      <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-1 py-0.5 text-[11px]">
        <button
          type="button"
          onClick={() => changeLang('th')}
          className={`rounded-full px-2 py-0.5 ${
            current === 'th'
              ? 'bg-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          TH
        </button>
        <button
          type="button"
          onClick={() => changeLang('en')}
          className={`rounded-full px-2 py-0.5 ${
            current === 'en'
              ? 'bg-primary text-white'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  // เวอร์ชัน dropdown ใช้ใน Navbar
  return (
    <select
      className="rounded-full border border-slate-200/60 bg-slate-900/40 px-3 py-1 text-slate-100"
      value={current}
      onChange={(e) => changeLang(e.target.value as 'th' | 'en')}
    >
      <option value="th">TH</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
