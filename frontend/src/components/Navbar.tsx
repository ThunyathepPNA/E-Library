// Navbar.tsx - แถบเมนูด้านบน มีโลโก้ ช่องค้นหา และเปลี่ยนภาษา
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-20 w-full bg-primary/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex h-[60px] items-center gap-4 px-6 py-3">
        {/* โลโก้ + ชื่อระบบ */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="E-Library Logo"
            className="size-32 object-contain"
          />
          <span className="text-lg font-bold tracking-wide">E-Library</span>
        </Link>

        {/* ช่องค้นหา - ซ่อนบนจอเล็ก */}
        <div className="hidden flex-1 items-center gap-2 rounded-full bg-slate-900/40 px-3 py-1 text-sm md:flex">
          <span className="text-xs opacity-80">🔎</span>
          <input
            type="text"
            placeholder="ค้นหาหนังสือ ชื่อผู้เขียน หรือหมวดหมู่..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-300/70 focus:outline-none"
          />
        </div>

        {/* ปุ่มด้านขวา */}
        <div className="ml-auto flex items-center gap-3 text-xs md:text-sm">
          <select className="rounded-full border border-slate-200/60 bg-slate-900/40 px-3 py-1 text-slate-100">
            <option value="th">TH</option>
            <option value="en">EN</option>
          </select>

          <Link to="/login">
            <button
              className={`rounded-full border px-4 py-1 font-semibold transition ${pathname === '/login'
                  ? 'border-accent bg-accent text-slate-900 shadow'
                  : 'border-slate-200/70 bg-transparent text-slate-100 hover:bg-white/10'
                }`}
            >
              เข้าสู่ระบบ
            </button>
          </Link>

          <Link to="/profile">
            <button className="hidden items-center gap-1 rounded-full bg-accent px-4 py-1 font-semibold text-slate-900 shadow-md hover:shadow-lg md:inline-flex">
              โปรไฟล์
              <span></span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
