// SocialLoginPanel.tsx - ปุ่ม Login ด้วย Facebook / Google / Apple
const SocialLoginPanel: React.FC = () => {
  return (
    <aside className="flex h-full items-center justify-center bg-slate-200/70 p-6 md:p-8">
      <div className="w-full max-w-xs space-y-3 text-xs">
        <p className="font-semibold text-slate-800">หรือเข้าสู่ระบบด้วย</p>

        {/* ในที่นี้ทุกปุ่มยังเป็น mock - แค่กดแล้ว console.log */}
        <button
          type="button"
          onClick={() => console.log('Facebook login (mock)')}
          className="flex w-full items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#1877F2]">
            f
          </span>
          <span>Continue with Facebook</span>
        </button>

        <button
          type="button"
          onClick={() => console.log('Google login (mock)')}
          className="flex w-full items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm hover:shadow-md"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[11px] font-bold">
            G
          </span>
          <span>Continue with Google</span>
        </button>

        <button
          type="button"
          onClick={() => console.log('Apple login (mock)')}
          className="flex w-full items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg"
        >
          <span className="flex h-5 w-5 items-center justify-center text-base"></span>
          <span>Continue with Apple</span>
        </button>
      </div>
    </aside>
  );
};

export default SocialLoginPanel;
