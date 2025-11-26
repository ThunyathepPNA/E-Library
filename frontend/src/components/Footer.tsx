// Footer.tsx - ส่วนท้าย มีมาสคอตและลิงก์ต่าง ๆ
const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-slate-300/80 py-4">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary py-6 pl-24 pr-6 text-white shadow-soft">
          {/* มาสคอต + ลิงก์ */}
          <div className="absolute bottom-0 left-3 translate-y-2">
              <img
                src="/images/mascot.png"
                alt="E-Library Mascot"
                className="h-20 w-20 object-contain drop-shadow-lg"
              />      
          </div>

          <div className="ml-4">
            <h2 className="mb-2 text-base font-bold">รู้จักกับเรา</h2>
            <ul className="space-y-1 text-sm text-slate-100">
              <li>
                <a href="#" className="hover:underline">
                  Github โปรเจกต์ E-Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ไฟล์ออกแบบบน Figma
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  รายชื่อผู้จัดทำ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ติดต่อห้องสมุด / ผู้ดูแลระบบ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
