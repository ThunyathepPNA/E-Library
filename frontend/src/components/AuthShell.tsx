// AuthShell.tsx - layout สำหรับหน้า Login / Profile (ไม่มี navbar + footer)
import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const AuthShell: React.FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* แถบบน: โลโก้ + ปุ่มเปลี่ยนภาษา */}
      <header className="flex items-center justify-between px-6 py-4">

        {/* ปุ่มเปลี่ยนภาษาที่หน้า Login / Profile */}
        <LanguageSwitcher compact />
      </header>

      {/* เนื้อหา */}
      <main className="flex flex-1 items-center justify-center px-4 pb-10">
        {children}
      </main>
    </div>
  );
};

export default AuthShell;
