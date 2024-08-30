import { useRouter } from "next/router";
import { useRef } from "react";
import { axiosInstance } from "@/lib";
import { LOGIN_INPUTS } from "@/constants";
import { CustomForm, CustomLink, Header, WelcomeMessage } from "@/components";

const Login = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    try {
      const response = await axiosInstance.post("/api/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user[0]));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-center w-1/2 h-screen">
        <div className="flex flex-col gap-10 min-w-[384px]">
          <Header />
          <WelcomeMessage
            title="Welcome Back"
            subTitle="Welcome back, please enter your details."
          />
          <CustomForm
            ref={formRef}
            onSubmit={handleSubmit}
            inputs={LOGIN_INPUTS}
            btnText="Log in"
          />
          <CustomLink
            title="Don't have an account?"
            href="/sign-up"
            linkName="Sign up"
          />
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0166FF]" />
    </div>
  );
};

export default Login;
