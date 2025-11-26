// BookGrid.tsx - รวม BookCard หลายเล่ม + filter tag
import type { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <section className="mt-4">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold">หนังสือแนะนำสำหรับคุณ</h2>
          <p className="text-xs text-slate-500">
            ระบบจะใช้ข้อมูลจากโปรไฟล์ของคุณเพื่อแนะนำหนังสือที่ตรงความสนใจ
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {['ทั้งหมด', 'มาใหม่', 'ยอดนิยม', 'อ่านต่อจากครั้งที่แล้ว'].map((tag, idx) => (
            <button
              key={tag}
              className={`rounded-full px-3 py-1 ${
                idx === 0
                  ? 'bg-slate-900 text-slate-50'
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
