// BookCard.tsx - แสดงข้อมูลหนังสือหนึ่งเล่ม
import type { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <article className="flex flex-col gap-2 rounded-xl bg-white p-3 text-xs shadow-soft">
      {/* ปกหนังสือ (ใช้สีไล่เฉดแทนรูปจริง) */}
      <div className="mb-1 h-36 rounded-lg bg-gradient-to-br from-primary to-accent" />

      <h3 className="text-sm font-semibold">{book.title}</h3>
      <p className="text-[11px] text-slate-500">ผู้เขียน: {book.author}</p>

      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>หมวด: {book.category}</span>
        <span>{book.pages} หน้า</span>
      </div>

      <div className="mt-1 flex gap-2">
        <button className="flex-1 rounded-full bg-primary py-1 text-[11px] font-semibold text-white hover:bg-primary/90">
          อ่านเลย
        </button>
        <button className="flex-1 rounded-full bg-slate-100 py-1 text-[11px] font-semibold text-slate-900 hover:bg-slate-200">
          ดูรายละเอียด
        </button>
      </div>
    </article>
  );
};

export default BookCard;
