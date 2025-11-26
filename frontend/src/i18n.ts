// src/i18n.ts - ตั้งค่า i18next สำหรับ React ทั้งแอป

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  th: {
    translation: {
      // ========== Global ==========
      "site.name": "E-Library",

      // Navbar
      "nav.searchPlaceholder": "ค้นหาหนังสือ ชื่อผู้เขียน หรือหมวดหมู่...",
      "nav.login": "เข้าสู่ระบบ",
      "nav.profile": "โปรไฟล์",

      // Sidebar
      "sidebar.title": "หมวดหมู่",
      "sidebar.main": "หมวดหลัก",
      "sidebar.all": "ทั้งหมด",
      "sidebar.tech": "เทคโนโลยี / IT",
      "sidebar.psychology": "จิตวิทยา",
      "sidebar.novel": "นิยาย",
      "sidebar.special": "คัดพิเศษ",
      "sidebar.new": "หนังสือมาใหม่",
      "sidebar.popular": "ยอดนิยม",
      "sidebar.recommended": "แนะนำสำหรับคุณ",

      // Hero / Home
      "hero.badge": "อ่านหนังสือออนไลน์ได้ทุกที่ ทุกเวลา",
      "hero.title": "E-Library สำหรับนักศึกษา DPU",
      "hero.subtitle":
        "รวมหนังสือเรียน เอกสารประกอบการสอน และหนังสืออ่านเล่นในที่เดียว เข้าถึงง่ายบนทุกอุปกรณ์",
      "hero.stat.books": "เล่มในคลัง",
      "hero.stat.hours": "เปิดให้บริการ",
      "hero.stat.allFaculties.title": "ทุกคณะ",
      "hero.stat.allFaculties.subtitle": "เข้าถึงได้",

      "hero.cta.readNow": "เริ่มอ่านทันที",
      "hero.cta.newBooks": "ดูหนังสือมาใหม่",

      // Book card
      "book.byAuthor": "ผู้เขียน: {{author}}",
      "book.category": "หมวด: {{category}}",
      "book.pages": "{{pages}} หน้า",
      "book.readNow": "อ่านเลย",
      "book.details": "ดูรายละเอียด",
      "book.badge.new": "ใหม่",
      "book.badge.popular": "ยอดนิยม",
      "book.badge.continue": "อ่านต่อ",

      // Footer
      "footer.aboutTitle": "รู้จักกับเรา",
      "footer.github": "Github โปรเจกต์ E-Library",
      "footer.figma": "ไฟล์ออกแบบบน Figma",
      "footer.credits": "รายชื่อผู้จัดทำ",
      "footer.contact": "ติดต่อห้องสมุด / ผู้ดูแลระบบ",

      // Login page
      "login.welcomeBack": "ยินดีต้อนรับกลับมา",
      "login.title": "เข้าสู่ระบบ E-Library",
      "login.description":
        "ใช้อีเมลนักศึกษาและรหัสผ่านของคุณ เพื่อเข้าถึงคลังหนังสือออนไลน์",
      "login.email": "อีเมลนักศึกษา",
      "login.password": "รหัสผ่าน",
      "login.remember": "Remember me",
      "login.submit": "เข้าสู่ระบบ",
      "login.forgot": "ลืมรหัสผ่าน? ติดต่อเจ้าหน้าที่ห้องสมุด",
      "login.noProfile": "ยังไม่มีโปรไฟล์?",
      "login.createProfile": "สร้างข้อมูลส่วนตัว",
      "login.guest": "เข้าสู่หน้าแรก โดยยังไม่เข้าสู่ระบบ",

      // Social login (mock)
      "login.orWith": "หรือเข้าสู่ระบบด้วย",
      "login.facebook": "Continue with Facebook",
      "login.google": "Continue with Google",
      "login.apple": "Continue with Apple",

      // Profile form
      profile: {
        oneTime: "ตั้งค่าครั้งเดียว ใช้ได้ตลอด",
        title: "ข้อมูลส่วนตัวสำหรับ E-Library",
        subtitle:
          "ใช้ข้อมูลนี้เพื่อปรับการแนะนำหนังสือ และใช้งานร่วมกับระบบของมหาวิทยาลัย",

        avatarLabel: "รูปโปรไฟล์",
        avatarNote: "(ส่วนนี้เป็นตัวอย่าง UI – ยังไม่ได้เชื่อมอัปโหลดรูปจริง)",

        firstName: "ชื่อ",
        lastName: "นามสกุล",
        studentEmail: "อีเมลนักศึกษา",
        studentId: "รหัสนักศึกษา",
        faculty: "คณะ / สาขา",

        language: "ภาษาที่ต้องการแสดงผล",
        "language.th": "ภาษาไทย",
        "language.en": "English",

        level: "ระดับการศึกษา",
        "level.bachelor": "ปริญญาตรี",
        "level.master": "ปริญญาโท",
        "level.other": "อื่น ๆ",

        interests: "หมวดหนังสือที่สนใจเป็นพิเศษ",
        save: "บันทึกข้อมูล",
        afterSaveNote:
          "เมื่อบันทึกแล้ว ระบบจะใช้ข้อมูลนี้ในการแนะนำหนังสือให้ตรงกับความสนใจของคุณมากขึ้น",
      },

      // Reader
      "reader.back": "← กลับไปหน้า E-Library",
      "reader.notFound": "ไม่พบหนังสือเล่มนี้ในระบบ (mock data)",
      "reader.noPdf": "ยังไม่มีไฟล์ PDF สำหรับหนังสือเล่มนี้ (mock)",

      // AuthShell
      "auth.brand": "E-Library",
    },
  },
  en: {
    translation: {
      "site.name": "E-Library",

      // Navbar
      "nav.searchPlaceholder": "Search books, authors or categories...",
      "nav.login": "Login",
      "nav.profile": "Profile",

      // ==== Sidebar ====
      "sidebar.title": "Categories",
      "sidebar.main": "Main",
      "sidebar.special": "Highlights",
      "sidebar.all": "All",
      "sidebar.tech": "Technology / IT",
      "sidebar.psychology": "Psychology",
      "sidebar.novel": "Novel",
      "sidebar.new": "New arrivals",
      "sidebar.popular": "Popular",
      "sidebar.recommended": "Recommended for you",

      // ==== Hero ====
      "hero.badge": "Read anywhere, anytime",
      "hero.title": "E-Library for DPU students",
      "hero.subtitle":
        "All textbooks, lecture notes and leisure reads in one place. Easy access on any device.",
      "hero.stat.books": "books available",
      "hero.stat.hours": "open 24/7",
      "hero.stat.allFaculties.title": "All faculties",
      "hero.stat.allFaculties.subtitle": "can access",

      "hero.cta.readNow": "Start reading",
      "hero.cta.newBooks": "View new arrivals",

      // ==== BookCard ====
      "book.byAuthor": "Author: {{author}}",
      "book.category": "Category: {{category}}",
      "book.pages": "{{pages}} pages",
      "book.readNow": "Read now",
      "book.details": "View details",

      // ==== Footer ====
      "footer.aboutTitle": "About us",
      "footer.github": "E-Library project on Github",
      "footer.figma": "Design file on Figma",
      "footer.credits": "Contributors",
      "footer.contact": "Contact library / admins",

      // Login
      "login.welcomeBack": "Welcome back",
      "login.title": "Sign in to E-Library",
      "login.description":
        "Use your student email and password to access the online library.",
      "login.email": "Student email",
      "login.password": "Password",
      "login.remember": "Remember me",
      "login.submit": "Sign in",
      "login.forgot": "Forgot password? Contact library staff.",
      "login.noProfile": "Don't have a profile yet?",
      "login.createProfile": "Create profile",
      "login.guest": "Enter as guest",

      // Social login (mock)
      "login.orWith": "Or continue with",
      "login.facebook": "Continue with Facebook",
      "login.google": "Continue with Google",
      "login.apple": "Continue with Apple",

      // Profile
      profile: {
        oneTime: "Set up once, use everywhere",
        title: "Profile for E-Library",
        subtitle:
          "We use this information to personalize book recommendations and connect with university systems.",

        avatarLabel: "Profile picture",
        avatarNote:
          "(This is only a UI example – image upload is not yet implemented.)",

        firstName: "First name",
        lastName: "Last name",
        studentEmail: "Student email",
        studentId: "Student ID",
        faculty: "Faculty / Program",

        language: "Display language",
        "language.th": "Thai",
        "language.en": "English",

        level: "Education level",
        "level.bachelor": "Bachelor",
        "level.master": "Master",
        "level.other": "Other",

        interests: "Preferred book topics",
        save: "Save profile",
        afterSaveNote:
          "Once saved, we will use this information to recommend books that match your interests.",
      },

      // Reader
      "reader.notFound": "This book cannot be found in mock data.",
      "reader.back": "← Back to E-Library",
      "reader.noPdf": "No PDF file is available for this book (mock).",
      "reader.noPdfDescription":
        "In a real system, this section would show a PDF link loaded from a database or file storage.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "th", // ภาษาเริ่มต้น
  fallbackLng: "th",
  interpolation: { escapeValue: false },
});

export default i18n;
