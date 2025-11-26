// BookCard.tsx - แสดงข้อมูลหนังสือหนึ่งเล่ม + ปุ่มอ่าน + ดูรายละเอียด + Favorite
import type { Book } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BookCardProps {
  book: Book;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
  onOpenDetail?: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  isFavorite = false,
  onToggleFavorite,
  onOpenDetail,
}) => {
  const { t } = useTranslation();

  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(book.id);
    }
  };

  const handleOpenDetail = () => {
    if (onOpenDetail) {
      onOpenDetail(book);
    }
  };

  return (
    <article className="relative flex flex-col gap-2 rounded-xl bg-white p-3 text-xs shadow-soft">
      {/* ปุ่ม Bookmark มุมขวาบน (หากมี onToggleFavorite ส่งมา) */}
      {onToggleFavorite && (
        <button
          type="button"
          onClick={handleToggleFavorite}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-[13px] shadow-sm hover:bg-accent hover:text-slate-900"
          aria-label={
            isFavorite
              ? t('book.favorite.remove')
              : t('book.favorite.add')
          }
        >
          {isFavorite ? '★' : '☆'}
        </button>
      )}

      {/* ปกหนังสือ */}
      <div className="mb-1 h-36 overflow-hidden rounded-lg bg-slate-200">
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

      {/* ข้อมูลหนังสือ */}
      <h3 className="pr-5 text-sm font-semibold line-clamp-2">{book.title}</h3>
      <p className="text-[11px] text-slate-500">
        {t('book.byAuthor', { author: book.author })}
      </p>

      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>{t('book.category', { category: book.category })}</span>
        <span>{t('book.pages', { pages: book.pages })}</span>
      </div>

      {/* ปุ่ม action */}
      <div className="mt-1 flex gap-2">
        <Link
          to={`/reader/${book.id}`}
          className="flex-1 rounded-full bg-primary py-1 text-center text-[11px] font-semibold text-white hover:bg-primary/90"
        >
          {t('book.readNow')}
        </Link>
        <button
          type="button"
          onClick={handleOpenDetail}
          className="flex-1 rounded-full bg-slate-100 py-1 text-[11px] font-semibold text-slate-900 hover:bg-slate-200"
        >
          {t('book.details')}
        </button>
      </div>
    </article>
  );
};

export default BookCard;
