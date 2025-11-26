// mockBooks.ts - ข้อมูลหนังสือจำลองสำหรับแสดงผล
import type { Book } from '../types';

export const mockBooks: Book[] = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    author: 'John Smith',
    category: 'เทคโนโลยี / IT',
    pages: 230,
    isPopular: true,
    pdfUrl: '/pdfs/Data Structures & Algorithms.pdf', 
  },
  {
    id: 2,
    title: 'พื้นฐานจิตวิทยา',
    author: 'ดร.สุชาติ ใจดี',
    category: 'จิตวิทยา',
    pages: 180,
    isNew: true,
    pdfUrl: '/pdfs/พื้นฐานจิตวิทยา (Basic Psychology).pdf', 
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    author: 'Jane Doe',
    category: 'เทคโนโลยี / IT',
    pages: 320,
    isPopular: true,
    pdfUrl: '/pdfs/Introduction to Web Development.pdf',
  },
  {
    id: 4,
    title: 'นิยายเวลาพักเที่ยง',
    author: 'พลอยใส แสงจันทร์',
    category: 'นิยาย',
    pages: 260,
    continueReading: true,
    pdfUrl: '/pdfs/นิยายเวลาพักเที่ยง.pdf', 
  },
];
