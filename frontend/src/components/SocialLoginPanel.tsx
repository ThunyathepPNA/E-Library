// SocialLoginPanel.tsx
import { useTranslation } from 'react-i18next';

const SocialLoginPanel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center gap-4 bg-slate-100 px-6 py-8 text-xs">
      <p className="text-[11px] font-semibold text-slate-600">
        {t('login.orWith')}
      </p>

      <button className="flex items-center justify-center gap-2 rounded-full bg-[#1877F2] py-2 text-xs font-semibold text-white shadow">
        <span>f</span>
        <span>{t('login.facebook')}</span>
      </button>

      <button className="flex items-center justify-center gap-2 rounded-full bg-white py-2 text-xs font-semibold text-slate-800 shadow">
        <span>G</span>
        <span>{t('login.google')}</span>
      </button>

      <button className="flex items-center justify-center gap-2 rounded-full bg-slate-900 py-2 text-xs font-semibold text-white shadow">
        <span></span>
        <span>{t('login.apple')}</span>
      </button>
    </div>
  );
};

export default SocialLoginPanel;
