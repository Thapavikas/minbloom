import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 dark:from-gray-800 dark:via-gray-900 dark:to-black py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-white text-5xl font-extrabold mb-6 leading-tight">
          Unlock Your Potential
        </h1>
        <p className="text-gray-100 dark:text-gray-400 text-lg mb-10">
          Explore expert-led courses designed to help you learn, grow, and
          achieve your goals. Start your journey today!
        </p>

        {/* Search Form */}
        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-xl overflow-hidden max-w-xl mx-auto mb-8"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for courses (e.g., Web Development)"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
          <Button
            type="submit"
            className="bg-indigo-600 dark:bg-indigo-700 text-white px-6 py-3 rounded-r-full hover:bg-indigo-700 dark:hover:bg-indigo-800"
          >
            Search
          </Button>
        </form>

        {/* CTA Button */}
        <Button
          onClick={() => navigate(`/course/search?query`)}
          className="bg-white dark:bg-gray-800 text-indigo-600 rounded-full px-6 py-3 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Explore All Courses
        </Button>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;
