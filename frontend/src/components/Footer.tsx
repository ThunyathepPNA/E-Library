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
                <a href="#" className="hover:underline">
                  {t('footer.github')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t('footer.figma')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t('footer.credits')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
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
