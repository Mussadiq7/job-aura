import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";

const VerifyCredentials = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    apaarId: "",
    securityPin: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your verification logic here
    console.log("Verifying credentials:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Credentials</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextInput
          name="apaarId"
          label="Apaar ID"
          placeholder="Enter your Apaar ID"
          type="text"
          value={formData.apaarId}
          onChange={handleChange}
          error={errors.apaarId}
        />

        <TextInput
          name="securityPin"
          label="Security PIN"
          placeholder="Enter your Security PIN"
          type="password"
          value={formData.securityPin}
          onChange={handleChange}
          error={errors.securityPin}
        />

        <CustomButton
          type="submit"
          containerStyles="w-full inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800"
          title="Verify"
        />
      </form>
    </div>
  );
};

export default VerifyCredentials; 