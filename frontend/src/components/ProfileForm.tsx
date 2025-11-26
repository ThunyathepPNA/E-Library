// ProfileForm.tsx - ฟอร์มกรอก/แก้ไขข้อมูลส่วนตัว (ใช้ mock state)
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { UserProfile } from '../types';
import { defaultUser } from '../data/mockUser';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfileForm: React.FC = () => {
  // ใช้ useState เก็บข้อมูลโปรไฟล์แบบ mock
  const [profile, setProfile] = useState<UserProfile>(defaultUser);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

    // ถ้าเปลี่ยนภาษาที่ต้องการแสดงผล ให้เปลี่ยนภาษา UI ทันที
    if (field === 'language') {
      const lng = value === 'en' ? 'en' : 'th';
      i18n.changeLanguage(lng);
    }
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
        <p className="text-xs text-slate-500">
          {t('profile.oneTime')} 
        </p>
        <h1 className="text-xl font-bold text-primary">
          {t('profile.title')}
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          {t('profile.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 text-xs">
        {/* Avatar mock */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent" />
          <div className="text-[11px]">
            <div className="font-semibold">
              {t('profile.avatarLabel')}
            </div>
            <div className="text-slate-500">
              {t('profile.avatarNote')}
            </div>
          </div>
        </div>

        {/* ชื่อ - นามสกุล */}
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              {t('profile.firstName')}
            </label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              {t('profile.lastName')}
            </label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold">
            {t('profile.studentEmail')}
          </label>
          <input
            type="email"
            className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={profile.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              {t('profile.studentId')}
            </label>
            <input
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.studentId}
              onChange={(e) => handleChange('studentId', e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              {t('profile.faculty')}
            </label>
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
              {t('profile.language')}
            </label>
            <select
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.language}
              onChange={(e) => handleChange('language', e.target.value)}
            >
              <option value="th">{t('profile.language.th')}</option>
              <option value="en">{t('profile.language.en')}</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold">
              {t('profile.level')}
            </label>
            <select
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={profile.level}
              onChange={(e) => handleChange('level', e.target.value)}
            >
              <option value="bachelor">
                {t('profile.level.bachelor')}
              </option>
              <option value="master">
                {t('profile.level.master')}
              </option>
              <option value="other">
                {t('profile.level.other')}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[11px] font-semibold">
            {t('profile.interests')}
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
          {t('profile.save')}
        </button>

        <p className="text-center text-[11px] text-slate-500">
          {t('profile.afterSaveNote')}
        </p>
      </form>
    </div>
  );
};

export default ProfileForm;
