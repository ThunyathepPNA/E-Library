// HomePage.tsx - หน้า Main Webpage ของ E-Library
import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import CategorySidebar from '../components/CategorySidebar';
import Hero from '../components/Hero';
import { mockBooks } from '../data/mockBooks';
import type { Book } from '../types';
import BookCard from '../components/BookCard';
import BookDetailModal from '../components/BookDetailModal';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState<string>('ทั้งหมด');

  // ---------- 1) Bookmark / รายการโปรด ----------
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('favoriteBookIds');
      return raw ? (JSON.parse(raw) as number[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('favoriteBookIds', JSON.stringify(favoriteIds));
    } catch {
      // ignore
    }
  }, [favoriteIds]);

  const handleToggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const favoriteBooks: Book[] = useMemo(
    () => mockBooks.filter((b) => favoriteIds.includes(b.id)),
    [favoriteIds],
  );

  // ---------- 2) Modal รายละเอียดหนังสือ ----------
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleOpenDetail = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  // ---------- 3) หมวดหมู่ + filter ----------
  const categories = useMemo(
    () => Array.from(new Set(mockBooks.map((b) => b.category))),
    [],
  );

  const filteredBooks =
    activeCategory === 'ทั้งหมด'
      ? mockBooks
      : mockBooks.filter((b) => b.category === activeCategory);

  return (
    <PageShell>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-4 px-4 pb-6 lg:flex-row">
        {/* Sidebar เลือกหมวดหมู่ */}
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* ส่วนหลักด้านขวา */}
        <section className="flex-1 space-y-4">
          {/* Hero บนสุด */}
          <Hero />

          {/* SECTION: หนังสือที่บันทึกไว้ */}
          {favoriteBooks.length > 0 && (
            <section className="rounded-2xl bg-white/80 p-4 shadow-soft">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-bold text-primary">
                  {t('home.section.favorites')}
                </h2>
                <span className="text-[11px] text-slate-500">
                  {t('home.section.favoritesCount', {
                    count: favoriteBooks.length,
                  })}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {favoriteBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    isFavorite={favoriteIds.includes(book.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetail={handleOpenDetail}
                  />
                ))}
              </div>
            </section>
          )}

          {/* SECTION: หนังสือแนะนำสำหรับคุณ */}
          <section className="rounded-2xl bg-white/80 p-4 shadow-soft">
            <div className="mb-2">
              <h2 className="text-sm font-bold text-primary">
                {t('home.section.recommended')}
              </h2>
              <p className="text-[11px] text-slate-500">
                {t('home.section.recommendedSubtitle')}
              </p>
            </div>

            {/* ปุ่ม filter บนหัว (ยังเป็น mock อยู่) */}
            <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
              <button className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
                {t('home.filter.all')}
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-200">
                {t('home.filter.new')}
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-200">
                {t('home.filter.popular')}
              </button>
              <button className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-200">
                {t('home.filter.continue')}
              </button>
            </div>

            {/* กริดหนังสือตามหมวดที่เลือก */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  isFavorite={favoriteIds.includes(book.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenDetail={handleOpenDetail}
                />
              ))}
            </div>
          </section>
        </section>
      </div>

      {/* Modal รายละเอียดหนังสือ */}
      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={handleCloseDetail} />
      )}
    </PageShell>
  );
};

export default HomePage;
