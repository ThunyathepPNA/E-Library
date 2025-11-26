// ProfileForm.tsx - ฟอร์มกรอก/แก้ไขข้อมูลส่วนตัว (ใช้ mock state)
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { UserProfile } from '../types';
import { defaultUser } from '../data/mockUser';
import { useNavigate } from 'react-router-dom';

const ProfileForm: React.FC = () => {
  // ใช้ useState เก็บข้อมูลโปรไฟล์แบบ mock
  const [profile, setProfile] = useState<UserProfile>(defaultUser);

  const navigate = useNavigate();

  const handleChange = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]:
        field === 'language'
          ? (value as UserProfile['language'])
          : field === 'level'
          ? (value as UserProfile['level'])
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ตอนนี้ยังเป็น mock – แค่แสดงใน console
    console.log('Saved profile (mock):', profile);
     navigate('/home');
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-soft">
      <div className="mb-4 text-center">
        <p className="text-xs text-slate-500">ตั้งค่าครั้งเดียว ใช้ได้ตลอด</p>
        <h1 className="text-xl font-bold text-primary">ข้อมูลส่วนตัวสำหรับ E-Library</h1>
        <p className="mt-1 text-xs text-slate-500">
          ใช้ข้อมูลนี้เพื่อปรับการแนะนำหนังสือ และใช้งานร่วมกับระบบของมหาวิทยาลัย
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 text-xs">
        {/* Avatar mock */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent" />
          <div className="text-[11px]">
            <div className="font-semibold">รูปโปรไฟล์</div>
            <div className="text-slate-500">
              (ส่วนนี้เป็นตัวอย่าง UI – ยังไม่ได้เชื่อมอัปโหลดรูปจริง)
            </div>
          </div>
        </div>

        {/* ชื่อ - นามสกุล */}
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold">ชื่อ</label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">นามสกุล</label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold">อีเมลนักศึกษา</label>
          <input
            type="email"
            className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={profile.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold">รหัสนักศึกษา</label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.studentId}
              onChange={(e) => handleChange('studentId', e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">คณะ / สาขา</label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.faculty}
              onChange={(e) => handleChange('faculty', e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              ภาษาที่ต้องการแสดงผล
            </label>
            <select
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.language}
              onChange={(e) => handleChange('language', e.target.value)}
            >
              <option value="th">ภาษาไทย</option>
              <option value="en">English</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">ระดับการศึกษา</label>
            <select
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.level}
              onChange={(e) => handleChange('level', e.target.value)}
            >
              <option value="bachelor">ปริญญาตรี</option>
              <option value="master">ปริญญาโท</option>
              <option value="other">อื่น ๆ</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold">
            หมวดหนังสือที่สนใจเป็นพิเศษ
          </label>
          <textarea
            className="min-h-[80px] w-full rounded-2xl border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={profile.interests}
            onChange={(e) => handleChange('interests', e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-full bg-primary py-2 text-xs font-semibold text-white shadow-md hover:bg-primary/90"
        >
          บันทึกข้อมูล
        </button>

        <p className="text-center text-[11px] text-slate-500">
          เมื่อบันทึกแล้ว ระบบจะใช้ข้อมูลนี้ในการแนะนำหนังสือให้ตรงกับความสนใจของคุณมากขึ้น
        </p>
      </form>
    </div>
  );
};

export default ProfileForm;
