// types.ts - เก็บ Type ที่ใช้ร่วมกันทั้งโปรเจกต์

// ข้อมูลหนังสือในระบบ
export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  pages: number;
  isNew?: boolean;
  isPopular?: boolean;
  continueReading?: boolean;
}

// ข้อมูลผู้ใช้ (mock)
export interface UserProfile {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  faculty: string;
  language: 'th' | 'en';
  level: 'bachelor' | 'master' | 'other';
  interests: string;
}
