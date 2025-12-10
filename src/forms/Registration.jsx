import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [userTypeError, setUserTypeError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset all errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setUserTypeError("");

    let hasError = false;

    // Name validation
    if (!name) {
      setNameError("Name is required!");
      hasError = true;
    }

    // Email validation
    if (!email) {
      setEmailError("Email is required!");
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format!");
      hasError = true;
    }

    // Password validation
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;

    const passwordRegex = /^(?=.*[a-z])/;

    if (!password) {
      setPasswordError("Password is required!");
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must have at least 1 lowercase, 1 uppercase, 1 number, 1 special character and minimum 6 characters!"
      );
      hasError = true;
    }

    // Confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password!");
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match!");
      hasError = true;
    }

    // User type
    if (!userType) {
      setUserTypeError("Please select your user type!");
      hasError = true;
    }

    // If no error, handle successful registration
    if (!hasError) {
      // Example: check if user is seller
      if (userType === "seller") {
        alert("Seller registration successful! You can now add products.");
      } else {
        alert("Buyer/Normal user registration successful!");
      }

      // Form data object
      const formData = {
        name: name,
        email: email,
        password: password,
        userType: userType,
      };

      console.log("Form Data to send to DB:", formData);

      // Example: POST request to backend
      // fetch("/api/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })
      //   .then(res => res.json())
      //   .then(data => console.log("Server response:", data))
      //   .catch(err => console.error("Error:", err));

      alert("Registration successful!");

      // Navigate to home page or login page
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-black/20"
      >
        <legend className="text-center text-2xl font-bold mb-4">
          Register
        </legend>

        {/* Name */}
        <label className="block my-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) setNameError("");
          }}
          className="w-full p-3 rounded-md bg-transparent border outline-none placeholder-gray-400 text-gray-900 dark:text-gray-100 mb-1"
        />
        {nameError && <p className="text-red-500 text-sm my-1">{nameError}</p>}

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
          <p className="text-red-500 text-sm my-1">{emailError}</p>
        )}

        {/* Password */}
        <label className="block my-2">Password</label>
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
          <p className="text-red-500 text-sm my-1">{passwordError}</p>
        )}

        {/* Confirm Password */}
        <label className="block my-2">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (confirmPasswordError) setConfirmPasswordError("");
            }}
            className="w-full p-3 rounded-md bg-transparent border outline-none placeholder-gray-400 text-gray-900 dark:text-gray-100"
          />
          {confirmPassword && (
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        {confirmPasswordError && (
          <p className="text-red-500 text-sm my-1">{confirmPasswordError}</p>
        )}

        {/* User type */}
        <label className="block my-2">User Type</label>
        <select
          value={userType}
          onChange={(e) => {
            setUserType(e.target.value);
            if (userTypeError) setUserTypeError("");
          }}
          className="w-full p-3 rounded-md bg-transparent border outline-none text-gray-900 dark:text-gray-100"
        >
          <option value="">Select Type</option>
          <option value="buyer">Buyer / News User</option>
          <option value="seller">Seller / Product Vendor</option>
        </select>
        {userTypeError && (
          <p className="text-red-500 text-sm my-1">{userTypeError}</p>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-md bg-white/40 dark:bg-black/40 text-gray-900 dark:text-gray-100 font-semibold hover:bg-white/50 dark:hover:bg-black/50 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
