import Logo from "../../ui/Logo";

function AuthLayout({ children, type }) {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="p-16 pt-18 pb-28 bg-[var(--bg-secondary)] rounded-xl max-md:h-full max-md:w-full max-md:rounded-none max-sm:px-10">
        <div className="flex justify-center mb-2">
          <Logo isVisible={true} />
        </div>
        <p className="text-3xl mb-10 font-bold">{type} your account</p>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
