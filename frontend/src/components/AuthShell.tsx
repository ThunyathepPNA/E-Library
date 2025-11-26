// AuthShell.tsx - layout สำหรับหน้า Login / Profile (ไม่มี navbar + footer)
import type { PropsWithChildren } from 'react';
// import { Link } from 'react-router-dom';

const AuthShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* <header className="flex items-center justify-center py-6">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-white via-accent to-primary text-xs font-bold text-primary">
            E
          </div>
          <span>E-Library</span>
        </Link>
      </header> */}

      {/* เนื้อหาตรงกลาง */}
      <main className="flex flex-1 items-center justify-center px-4 pb-10">
        {children}
      </main>
    </div>
  );
};

export default AuthShell;
