import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-1/2 h-full grid place-items-center">
      <SignIn />
    </div>
  );
}
