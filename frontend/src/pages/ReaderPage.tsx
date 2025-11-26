// ReaderPage.tsx - หน้าอ่านหนังสือแบบฝัง PDF
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import { mockBooks } from '../data/mockBooks';
import type { Book } from '../types';

const ReaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // แปลงพารามิเตอร์จาก url ให้เป็นตัวเลข
  const bookId = Number(id);
  const book: Book | undefined = mockBooks.find((b) => b.id === bookId);

  // ถ้าไม่เจอเล่ม
  if (!book) {
    return (
      <PageShell>
        <div className="mx-auto mt-10 max-w-4xl px-4">
          <div className="rounded-2xl bg-white p-6 text-sm shadow-soft">
            <p className="font-semibold text-red-600">
              {t('reader.notFound')}
            </p>
            <Link
              to="/home"
              className="mt-3 inline-block text-primary underline"
            >
              {t('reader.back')}
            </Link>
          </div>
        </div>
      </PageShell>
    );
  }

  const hasPdf = Boolean(book.pdfUrl);

  return (
    <PageShell>
      <div className="mx-auto mt-6 mb-8 flex max-w-6xl flex-col gap-4 px-4">
        {/* หัวหน้า reader */}
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">{book.title}</h1>
            <p className="text-sm text-slate-600">
              {t('book.byAuthor', { author: book.author })}
            </p>
            <p className="text-xs text-slate-500">
              {t('book.category', { category: book.category })} •{' '}
              {t('book.pages', { pages: book.pages })}
            </p>
          </div>
          <Link
            to="/home"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-100"
          >
            {t('reader.back')}
          </Link>
        </div>

        {/* ตัว viewer PDF */}
        {hasPdf ? (
          <div className="h-[70vh] overflow-hidden rounded-xl bg-slate-200 shadow-soft">
            <iframe
              src={book.pdfUrl}
              title={book.title}
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="rounded-xl bg-white p-6 text-sm shadow-soft">
            <p className="font-semibold">{t('reader.noPdf')}</p>
            <p className="mt-2 text-slate-600">
              {t('reader.noPdfDescription')}
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default ReaderPage;
