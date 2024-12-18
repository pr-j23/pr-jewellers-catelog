import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import axios from "axios";
import { mobileNum, shopAddress, shopEmailId, shopOpenTime } from "../mockData";

const MAILGUN_API_KEY = "7d7ad251657d493767e2245cf4437894-0920befd-9884a6ff";
const MAILGUN_DOMAIN_NAME =
  "sandbox858bccc008104400819401843e3d74f9.mailgun.org";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `https://api.mailgun.net/v3/${MAILGUN_DOMAIN_NAME}/messages`,
        null,
        {
          auth: {
            username: "api",
            password: MAILGUN_API_KEY, // your Mailgun API key
          },
          params: {
            from: `${formData.name} <${formData.email}>`,
            to: shopEmailId, // Mailgun email address you own
            subject: "Contact Form Submission",
            text: formData.message,
          },
        }
      );

      console.log("Email sent successfully!", response.data);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message.", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {successMessage && (
              <p className="text-center text-green-600 mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-6">Visit Our Store</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-balance">{shopAddress}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <span>{mobileNum}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-3" />
                <span>{shopEmailId}</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                <div>
                  <p>{shopOpenTime.weekDays}</p>
                  <p>{shopOpenTime.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?auto=format&fit=crop&w=800"
                alt="Store Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
