// Footer.tsx - ส่วนท้าย มีมาสคอตและลิงก์ต่าง ๆ
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary py-6 pl-24 pr-6 text-white shadow-soft">
          {/* มาสคอต + ลิงก์ */}
          <div className="absolute bottom-1 left-1 translate-y-8">
            <img
              src="/images/mascot.png"
              alt="E-Library Mascot"
              className="size-60 object-contain drop-shadow-lg"
            />
          </div>

          <div className="ml-40">
            <h2 className="mb-2 text-base font-bold">
              {t('footer.aboutTitle')}
            </h2>
            <ul className="space-y-1 text-sm text-slate-100">
              <li>
                {/* ลิงก์ไป GitHub โปรเจกต์ */}
                <a
                  href="https://github.com/ThunyathepPNA/E-Library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('footer.github')}
                </a>
              </li>
              <li>
                {/* ลิงก์ไปไฟล์ Figma */}
                <a
                  href="https://www.figma.com/design/ZKRwpJhlHVktPafTEB7Hfe/E-Libraly?node-id=0-1&t=2SQPVRvKQuz3Ctmg-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('footer.figma')}
                </a>
              </li>
              <li>
                {/* ลิงก์ไปหน้ารายชื่อผู้จัดทำ (จะเป็น Google Docs / Notion / เว็บเพจก็ได้) */}
                <a
                  href="https://example.com/e-library-credits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t('footer.credits')}
                </a>
              </li>
              <li>
                {/* ลิงก์อีเมลติดต่อ */}
                <a
                  href="mailto:library@example.com"
                  className="hover:underline"
                >
                  {t('footer.contact')}
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
