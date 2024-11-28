import Form from "@/components/form";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SignUp() {

  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { name, email, password, rePassword } = Object.fromEntries(formData);

    if (password !== rePassword) {
      alert("Please review your password again...");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/sign-up", {
        name,
        email,
        password
      });
      
      const user = response.data
      alert("Successfully signed up!");
      router.push("/sign-in");
      localStorage.setItem("user", JSON.stringify(user));

    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/2">
        <Form
          header="Create Geld account"
          paragraph="Sign up below to create your Wallet account"
          Input={
            <>
              <Input placeholder="Name" name="name" />
              <Input placeholder="Email" name="email" />
              <Input placeholder="Password" name="password" />
              <Input placeholder="Re-Password" name="rePassword" />
            </>
          }
          buttonLabel="Sign Up"
          accountStatus="Already have account?"
          loginOrSignUp="Log In"
          hrefValue="sign-in"
          onSubmit={handleSubmit}
          ref={formRef}
        />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
