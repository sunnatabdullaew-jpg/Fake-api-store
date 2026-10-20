"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const page = () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errror, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: login,
          password: password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login yoki parol xato");
      }
      router.push("/")
    } catch (err: unknown) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
return (
  <main className="flex min-h-screen items-center justify-center  p-4">
    <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Admin Login
      </h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label
            htmlFor="login"
            className="mb-1 block text-sm text-gray-700"
          >
            Login
          </label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="johnd"
            required
            className="w-full text-blue-400 rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm text-gray-700"
          >
            Parol
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="m38rmF$"
            required
            className="w-full  rounded-md border text-blue-400 border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {errror && (
          <p className="text-sm text-red-500">{errror}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Kirilmoqda..." : "Kirish"}
        </button>
      </form>
    </div>
  </main>
);

};

export default page;
