import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleBlur = (field) => {
        const value = formData[field];
        let error = "";

        if (!value) {
            error = "This field is required.";
        } else if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
            error = "Please enter a valid email address.";
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: error,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Clear error when the field is corrected
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any fields are empty before submitting
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "This field is required.";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Handle form submission (e.g., send data to a server)
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            Let's Talk
                        </h3>
                        <p>I am open to discuss projects or partnership opportunities.</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-green-400 mr-2" />
                            <a href="mailto:juangirelli@gmail.com" className="hover:underline">
                                Juangirelli@gmail.com
                            </a>
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-green-400 mr-2" />
                            <span>(980) 318-1390</span>
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                            <span>511 Queens Road, Charlotte, NC, USA</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur("name")}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur("email")}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    cols="15"
                                    rows="5"
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur("message")}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;