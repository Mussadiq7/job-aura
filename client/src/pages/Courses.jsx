import React, { useState } from 'react';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const courses = [
        {
            id: 1,
            category: "Programming & Development",
            courses: [
                {
                    title: "Full Stack Development",
                    description: "Master both frontend and backend development",
                    duration: "6 months",
                    level: "Beginner to Advanced"
                },
                {
                    title: "Web Development",
                    description: "Learn modern web development techniques",
                    duration: "4 months",
                    level: "Beginner Friendly"
                }
            ]
        },
        {
            id: 2,
            category: "Data & AI",
            courses: [
                {
                    title: "Data Science",
                    description: "Comprehensive data science and analytics",
                    duration: "6 months",
                    level: "Intermediate"
                },
                {
                    title: "Machine Learning",
                    description: "Learn ML algorithms and implementations",
                    duration: "5 months",
                    level: "Advanced"
                }
            ]
        },
        {
            id: 3,
            category: "Cloud & DevOps",
            courses: [
                {
                    title: "AWS Cloud Computing",
                    description: "Master cloud services and deployment",
                    duration: "4 months",
                    level: "Intermediate"
                },
                {
                    title: "DevOps Engineering",
                    description: "Learn modern DevOps practices",
                    duration: "5 months",
                    level: "Advanced"
                }
            ]
        },
        {
            id: 4,
            category: "Cybersecurity",
            courses: [
                {
                    title: "Network Security",
                    description: "Master network security fundamentals",
                    duration: "4 months",
                    level: "Intermediate"
                },
                {
                    title: "Ethical Hacking",
                    description: "Learn penetration testing and security",
                    duration: "5 months",
                    level: "Advanced"
                }
            ]
        }
    ];

    const categories = ['All', ...new Set(courses.map(cat => cat.category))];

    const filteredCourses = selectedCategory === 'All' 
        ? courses
        : courses.filter(cat => cat.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Explore Our Courses
                    </h1>
                    <p className="text-gray-600 text-xl">
                        Transform your career with industry-leading courses
                    </p>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center mb-12 space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.flatMap(category => 
                        category.courses.map((course, index) => (
                            <div 
                                key={`${category.id}-${index}`}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="p-8">
                                    <div className="text-sm font-medium text-blue-600 mb-2">
                                        {category.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-lg">
                                        {course.description}
                                    </p>
                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                                        <span className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {course.duration}
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                                            {course.level}
                                        </span>
                                    </div>
                                    <a 
                                        href="https://coursevita.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                                    >
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-600 text-xl mb-6">
                        Can't find what you're looking for?
                    </p>
                    <a 
                        href="https://coursevita.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-10 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Browse All Programs
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Courses; 