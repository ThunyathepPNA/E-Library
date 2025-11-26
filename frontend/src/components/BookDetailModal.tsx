// BookDetailModal.tsx - Modal แสดงรายละเอียดหนังสือ
import type { Book } from '../types';
import { Link } from 'react-router-dom';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start gap-3">
          {/* ปกเล่มเล็ก ๆ */}
          <div className="h-24 w-20 overflow-hidden rounded-lg bg-slate-200">
            {book.coverUrl ? (
              <img
                src={book.coverUrl}
                alt={book.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary to-accent" />
            )}
          </div>

          <div>
            <h2 className="text-base font-bold text-primary">{book.title}</h2>
            <p className="text-xs text-slate-600">ผู้เขียน: {book.author}</p>
            <p className="text-[11px] text-slate-500">
              หมวด: {book.category} • {book.pages} หน้า
            </p>
          </div>
        </div>

        {/* เนื้อหา / คำอธิบาย (mock) */}
        <div className="space-y-2 text-xs text-slate-700">
          <p className="font-semibold">คำอธิบายหนังสือ (ตัวอย่าง mock)</p>
          <p>
            ในระบบจริง จะดึงข้อมูลคำอธิบายจากฐานข้อมูลมาวางในส่วนนี้ เช่น
            เนื้อหาโดยสรุป จุดเด่นของหนังสือ และผู้ที่เหมาะสำหรับอ่านเล่มนี้
          </p>
          <p>
            ตอนนี้ยังเป็น mock frontend-only จึงยังไม่ได้เชื่อมต่อกับ backend
            หรือฐานข้อมูลจริง
          </p>
        </div>

        {/* ปุ่มด้านล่าง */}
        <div className="mt-4 flex flex-wrap justify-end gap-2 text-[11px]">
          <Link
            to={`/reader/${book.id}`}
            className="rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
          >
            อ่านเล่มนี้
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
