import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - zkCertify",
  description: "",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
