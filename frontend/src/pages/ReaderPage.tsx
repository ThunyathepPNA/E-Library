// ReaderPage.tsx - หน้าอ่านหนังสือแบบฝัง PDF
import { useParams, Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { mockBooks } from '../data/mockBooks';
import type { Book } from '../types';

const ReaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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
              ไม่พบหนังสือเล่มนี้ในระบบ (mock data)
            </p>
            <Link to="/home" className="mt-3 inline-block text-primary underline">
              ← กลับไปหน้า E-Library
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
            <p className="text-sm text-slate-600">ผู้เขียน: {book.author}</p>
            <p className="text-xs text-slate-500">
              หมวด: {book.category} • {book.pages} หน้า
            </p>
          </div>
          <Link
            to="/home"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-100"
          >
            ← กลับไปหน้า E-Library
          </Link>
        </div>

        {/* ตัว viewer PDF */}
        {hasPdf ? (
          <div className="h-[70vh] overflow-hidden rounded-xl bg-slate-200 shadow-soft">
            {/* ใช้ iframe ฝัง PDF (Front-end only) */}
            {/* Debug pdfUrl: {book.pdfUrl} */}
            <iframe
              src={book.pdfUrl}
              title={book.title}
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="rounded-xl bg-white p-6 text-sm shadow-soft">
            <p className="font-semibold">
              ยังไม่มีไฟล์ PDF สำหรับหนังสือเล่มนี้ (mock)
            </p>
            <p className="mt-2 text-slate-600">
              ในระบบจริงจะต้องเก็บลิงก์ไฟล์ PDF จากฐานข้อมูลหรือระบบจัดเก็บไฟล์
              แล้วแสดงผลในส่วนนี้แทน mock data.
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default ReaderPage;
