// HomePage.tsx - หน้า Main Webpage ของ E-Library
import { useMemo, useState } from 'react';
import PageShell from '../components/PageShell';
import CategorySidebar from '../components/CategorySidebar';
import Hero from '../components/Hero';
import BookGrid from '../components/BookGrid';
import { mockBooks } from '../data/mockBooks';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ทั้งหมด');

  // ดึงชื่อหมวดหมู่ไม่ซ้ำจาก mockBooks
  const categories = useMemo(
    () => Array.from(new Set(mockBooks.map((b) => b.category))),
    []
  );

  // filter หนังสือตามหมวดที่เลือก (mock logic)
  const filteredBooks =
    activeCategory === 'ทั้งหมด'
      ? mockBooks
      : mockBooks.filter((b) => b.category === activeCategory);

  return (
    <PageShell>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-4 px-4 pb-6 lg:flex-row">
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <section className="flex-1 space-y-4">
          <Hero />
          <BookGrid books={filteredBooks} />
        </section>
      </div>
    </PageShell>
  );
};

export default HomePage;
