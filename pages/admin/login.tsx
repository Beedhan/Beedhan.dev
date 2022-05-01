import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import style from "../../components/admin/login/LoginStyle.module.css";
import supabase from "../../utils/SupabaseClient";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push("/");
      toast.success(`Logged in as ${user?.email}`, {
        position: "top-right",
      });
    }
  }, []);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    console.log(user, error);
    toast.success(`Logged in as ${user?.email}`, {
      position: "top-right",
    });
  };
  return (
    <form className={style.container}>
      Login page this is
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={style.loginButton} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
