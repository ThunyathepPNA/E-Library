// PageShell.tsx - layout พื้นฐานของทุกหน้า (Navbar + เนื้อหา + Footer)
import Navbar from './Navbar';
import Footer from './Footer';
import type { PropsWithChildren } from 'react';

const PageShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Navbar />
      {/* main content */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
