import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required!");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required!");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters!");
      hasError = true;
    }

    if (!hasError) {
      navigate("/");

      alert("Login successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-black/20"
      >
        <legend className="text-center text-2xl font-bold mb-4">Login</legend>

        {/* Email */}
        <label className="block my-2">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          className="w-full p-3 rounded-md bg-transparent border outline-none placeholder-gray-400 text-gray-900 dark:text-gray-100 mb-1"
        />
        {emailError && (
          <p className="text-red-500 text-sm my-2">{emailError}</p>
        )}

        {/* Password */}
        <label className="block mb-1 my-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError("");
            }}
            className="w-full p-3 rounded-md bg-transparent border outline-none placeholder-gray-400 text-gray-900 dark:text-gray-100"
          />
          {password && (
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        {passwordError && (
          <p className="text-red-500 text-sm my-2">{passwordError}</p>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-md bg-white/40 dark:bg-black/40 text-gray-900 dark:text-gray-100 font-semibold hover:bg-white/50 dark:hover:bg-black/50 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
