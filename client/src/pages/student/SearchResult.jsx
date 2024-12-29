import { Badge } from "@/components/ui/badge";
import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white py-4 px-6 gap-6">
      <Link
        to={`/course-detail/${course._id}`}
        className="flex flex-col md:flex-row gap-6 w-full md:w-auto group"
      >
        <img
          src={course.courseThumbnail}
          alt="course-thumbnail"
          className="h-36 w-full md:w-60 object-cover rounded-lg transition-transform transform group-hover:scale-105"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg md:text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">
            {course.courseTitle}
          </h1>
          <p className="text-sm text-gray-600">{course.subTitle}</p>
          <p className="text-sm text-gray-700">
            Instructor:{" "}
            <span className="font-bold text-gray-800">{course.creator?.name}</span>
          </p>
          <Badge className="w-fit px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-md">
            {course.courseLevel}
          </Badge>
        </div>
      </Link>
      <div className="mt-4 md:mt-0 md:text-right w-full md:w-auto">
        <div className="flex flex-col items-end">
          <h1 className="font-bold text-xl md:text-2xl text-gray-900">
            ₹{course.coursePrice}
          </h1>
          <p className="text-sm text-gray-500">Exclusive Price</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
