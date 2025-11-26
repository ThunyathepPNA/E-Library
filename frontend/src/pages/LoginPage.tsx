// LoginPage.tsx - หน้าเข้าสู่ระบบ (ฟอร์ม + social login)
import AuthShell from '../components/AuthShell';
import LoginForm from '../components/LoginForm';
import SocialLoginPanel from '../components/SocialLoginPanel';

const LoginPage: React.FC = () => {
  return (
    <AuthShell>
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center px-4 py-8">
        <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-soft md:grid-cols-[1.3fr,1.1fr]">
          <LoginForm />
          <SocialLoginPanel />
        </div>
      </div>
    </AuthShell>
  );
};

export default LoginPage;
