// LoginForm.tsx - ฟอร์ม login แบบใช้ email + password
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // ตรงนี้เป็น mock ยังไม่ได้เช็คจริง แค่เด้งไปหน้า Profile
    console.log('Submit login (mock only)');
    navigate('/profile');   // กดปุ่ม "เข้าสู่ระบบ" แล้วไปหน้าโปรไฟล์
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mb-4 text-left">
        <p className="text-xs text-slate-500">{t('login.welcomeBack')}</p>
        <h1 className="text-xl font-bold text-primary">{t('login.title')}</h1>
        <p className="mt-1 text-xs text-slate-500">
          {t('login.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3 text-xs">
        <div>
          <label className="mb-1 block text-[11px] font-semibold">
            {t('login.email')}
          </label>
          <input
            type="email"
            className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="6304XXXXXX@dpu.ac.th"
          />
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold">
            {t('login.password')}
          </label>
          <input
            type="password"
            className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <input
            id="remember"
            type="checkbox"
            className="h-3.5 w-3.5 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <label htmlFor="remember">{t('login.remember')}</label>
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-full bg-primary py-2 text-xs font-semibold text-white shadow-md hover:bg-primary/90"
        >
          {t('login.submit')}
        </button>

        <div className="mt-1 text-center text-[11px]">
          {t('login.forgot')}
        </div>

        <div className="text-center text-[11px] text-slate-500">
          {t('login.noProfile')}{' '}
          <Link to="/profile" className="font-semibold text-primary">
            {t('login.createProfile')}
          </Link>
        </div>

        <div className="text-center text-[10px] text-slate-500">
          <Link to="/home" className="font-semibold text-primary">
            {t('login.guest')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
