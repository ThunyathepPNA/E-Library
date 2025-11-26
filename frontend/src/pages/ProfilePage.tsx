// ProfilePage.tsx - หน้าใส่ข้อมูลส่วนตัว
import AuthShell from '../components/AuthShell';
import ProfileForm from '../components/ProfileForm';

const ProfilePage: React.FC = () => {
  return (
    <AuthShell>
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center px-4 py-8">
        <ProfileForm />
      </div>
    </AuthShell>
  );
};

export default ProfilePage;
