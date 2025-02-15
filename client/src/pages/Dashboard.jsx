import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const { name, jobTitle, location: jobLocation } = location.state || { 
        name: 'User',
        jobTitle: '',
        location: ''
    };
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [searchTitle, setSearchTitle] = useState(jobTitle || '');
    const [searchLocation, setSearchLocation] = useState(jobLocation || '');

    // List of available skills
    const skillsList = [
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "Java",
        "C++",
        "HTML/CSS",
        "SQL",
        "AWS",
        "Docker",
        "Machine Learning",
        "Data Analysis",
        "UI/UX Design",
        "Project Management",
        "Agile",
        "Programming & Development",
        "Data & AI",
        "Cloud & DevOps",
        "Cybersecurity",
        "Blockchain",
        "Mobile Development",
        "Game Development",
        "Cybersecurity & Networking",
        "IT Support & Networking",
        "Design & UI/UX",
        "Project Management & Leadership",
        "Specialized Fields",
        "Game & AR/VR",
        "Robotics & IoT",
        "Development",
        "Software Testing & QA"
    ];

    // Sample jobs data - Replace with your actual jobs data or API call
    const jobsData = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "New York",
            skills: ["JavaScript", "React", "HTML/CSS"],
            salary: "₹80,000 - ₹100,000"
        },
        {
            "id": 2,
            "title": "Data Scientist",
            "company": "Data Analytics Inc",
            "location": "Bangalore, Karnataka",
            "skills": ["Python", "Machine Learning", "Data Analysis"],
            "salary": "₹90,000 - ₹120,000"
        },
        {
            "id": 3,
            "title": "Full Stack Developer",
            "company": "Web Solutions",
            "location": "Hyderabad, Telangana",
            "skills": ["JavaScript", "Node.js", "React", "SQL"],
            "salary": "₹85,000 - ₹110,000"
        },
        {
            "id": 4,
            "title": "Project Manager",
            "company": "Innovation Labs",
            "location": "Mumbai, Maharashtra",
            "skills": ["Project Management", "Agile", "Leadership"],
            "salary": "₹95,000 - ₹125,000"
        },
        {
            "id": 5,
            "title": "Cybersecurity Analyst",
            "company": "SecureTech",
            "location": "Pune, Maharashtra",
            "skills": ["Cybersecurity", "Network Security", "Penetration Testing"],
            "salary": "₹80,000 - ₹110,000"
        },
        {
            "id": 6,
            "title": "DevOps Engineer",
            "company": "CloudOps Solutions",
            "location": "Chennai, Tamil Nadu",
            "skills": ["AWS", "Docker", "Kubernetes", "CI/CD"],
            "salary": "₹90,000 - ₹130,000"
        },
        {
            "id": 7,
            "title": "AI Engineer",
            "company": "AI Innovations",
            "location": "Delhi",
            "skills": ["Artificial Intelligence", "Deep Learning", "TensorFlow", "NLP"],
            "salary": "₹95,000 - ₹135,000"
        },
        {
            "id": 8,
            "title": "Software Engineer",
            "company": "Tech Solutions",
            "location": "Noida, Uttar Pradesh",
            "skills": ["Java", "Spring Boot", "Microservices"],
            "salary": "₹80,000 - ₹115,000"
        },
        {
            "id": 9,
            "title": "Cloud Architect",
            "company": "Cloud Masters",
            "location": "Kolkata, West Bengal",
            "skills": ["AWS", "Azure", "Google Cloud", "Cloud Security"],
            "salary": "₹100,000 - ₹140,000"
        },
        {
            "id": 10,
            "title": "Data Engineer",
            "company": "Big Data Corp",
            "location": "Gurgaon, Haryana",
            "skills": ["Hadoop", "Spark", "Kafka", "SQL"],
            "salary": "₹85,000 - ₹120,000"
        },
        {
            "id": 11,
            "title": "Blockchain Developer",
            "company": "CryptoTech",
            "location": "Ahmedabad, Gujarat",
            "skills": ["Blockchain", "Ethereum", "Solidity"],
            "salary": "₹90,000 - ₹125,000"
        },
        {
            "id": 12,
            "title": "UI/UX Designer",
            "company": "Design Hub",
            "location": "Jaipur, Rajasthan",
            "skills": ["Figma", "Sketch", "Adobe XD", "User Research"],
            "salary": "₹70,000 - ₹100,000"
        },
        {
            "id": 13,
            "title": "Mobile App Developer",
            "company": "App Innovators",
            "location": "Lucknow, Uttar Pradesh",
            "skills": ["Flutter", "React Native", "Kotlin", "Swift"],
            "salary": "₹75,000 - ₹110,000"
        },
        {
            "id": 14,
            "title": "Database Administrator",
            "company": "DB Masters",
            "location": "Indore, Madhya Pradesh",
            "skills": ["SQL", "MySQL", "PostgreSQL", "Database Tuning"],
            "salary": "₹85,000 - ₹115,000"
        },
        {
            "id": 15,
            "title": "IT Support Specialist",
            "company": "Tech Support Solutions",
            "location": "Bhubaneswar, Odisha",
            "skills": ["IT Support", "Networking", "Troubleshooting"],
            "salary": "₹60,000 - ₹90,000"
        },
        {
            "id": 16,
            "title": "Embedded Systems Engineer",
            "company": "Embedded Tech",
            "location": "Nagpur, Maharashtra",
            "skills": ["Embedded C", "Microcontrollers", "IoT"],
            "salary": "₹85,000 - ₹110,000"
        },
        {
            "id": 17,
            "title": "Game Developer",
            "company": "Gaming Studios",
            "location": "Chandigarh",
            "skills": ["Unity", "Unreal Engine", "C#", "Game Physics"],
            "salary": "₹80,000 - ₹115,000"
        },
        
        {
            "id": 18,
            "title": "Machine Learning Engineer",
            "company": "AI Corp",
            "location": "Bangalore, Karnataka",
            "skills": ["Python", "TensorFlow", "Deep Learning", "NLP"],
            "salary": "₹95,000 - ₹140,000"
        },
        {
            "id": 19,
            "title": "Frontend Developer",
            "company": "Creative Web",
            "location": "Hyderabad, Telangana",
            "skills": ["React", "JavaScript", "CSS", "HTML"],
            "salary": "₹75,000 - ₹110,000"
        },
        {
            "id": 20,
            "title": "Backend Developer",
            "company": "ServerSide Tech",
            "location": "Pune, Maharashtra",
            "skills": ["Node.js", "Express", "MongoDB", "SQL"],
            "salary": "₹85,000 - ₹120,000"
        },
        {
            "id": 21,
            "title": "Software Architect",
            "company": "Tech Visionaries",
            "location": "Delhi",
            "skills": ["Microservices", "Cloud Architecture", "System Design"],
            "salary": "₹120,000 - ₹160,000"
        },
        {
            "id": 22,
            "title": "Network Engineer",
            "company": "NetSecure",
            "location": "Mumbai, Maharashtra",
            "skills": ["Networking", "Firewall Management", "CCNA"],
            "salary": "₹75,000 - ₹105,000"
        },
        {
            "id": 23,
            "title": "AI Researcher",
            "company": "AI Labs",
            "location": "Chennai, Tamil Nadu",
            "skills": ["AI", "ML", "Reinforcement Learning"],
            "salary": "₹100,000 - ₹150,000"
        },
        {
            "id": 24,
            "title": "IoT Developer",
            "company": "SmartTech Solutions",
            "location": "Gurgaon, Haryana",
            "skills": ["IoT", "Embedded C", "Microcontrollers"],
            "salary": "₹85,000 - ₹115,000"
        },
        {
            "id": 25,
            "title": "DevSecOps Engineer",
            "company": "SecureCloud",
            "location": "Kolkata, West Bengal",
            "skills": ["DevOps", "Security", "Cloud Security", "Kubernetes"],
            "salary": "₹95,000 - ₹135,000"
        },
        {
            "id": 26,
            "title": "Automation Tester",
            "company": "QA Experts",
            "location": "Noida, Uttar Pradesh",
            "skills": ["Selenium", "JMeter", "API Testing"],
            "salary": "₹70,000 - ₹100,000"
        },
        {
            "id": 27,
            "title": "Technical Writer",
            "company": "DocuTech",
            "location": "Jaipur, Rajasthan",
            "skills": ["Technical Writing", "Documentation", "API Docs"],
            "salary": "₹60,000 - ₹90,000"
        },
        {
            "id": 28,
            "title": "Game Designer",
            "company": "Game Studio",
            "location": "Chandigarh",
            "skills": ["Game Design", "3D Modeling", "Unity"],
            "salary": "₹80,000 - ₹110,000"
        },
        {
            "id": 29,
            "title": "IT Consultant",
            "company": "IT Solutions Ltd.",
            "location": "Lucknow, Uttar Pradesh",
            "skills": ["Consulting", "IT Strategy", "Business Analysis"],
            "salary": "₹100,000 - ₹140,000"
        },
        {
            "id": 30,
            "title": "Cloud Engineer",
            "company": "CloudX",
            "location": "Indore, Madhya Pradesh",
            "skills": ["AWS", "Azure", "Kubernetes", "Docker"],
            "salary": "₹90,000 - ₹130,000"
        },
        {
            "id": 31,
            "title": "Big Data Engineer",
            "company": "DataFlow",
            "location": "Bhubaneswar, Odisha",
            "skills": ["Hadoop", "Spark", "Kafka"],
            "salary": "₹95,000 - ₹130,000"
        },
        {
            "id": 32,
            "title": "ERP Consultant",
            "company": "Enterprise Solutions",
            "location": "Ahmedabad, Gujarat",
            "skills": ["SAP", "Oracle ERP", "Business Process Management"],
            "salary": "₹110,000 - ₹150,000"
        },
        {
            "id": 33,
            "title": "AI Product Manager",
            "company": "AI Innovations",
            "location": "Bangalore, Karnataka",
            "skills": ["AI", "Product Management", "Data Strategy"],
            "salary": "₹120,000 - ₹170,000"
        },
        {
            "id": 34,
            "title": "Robotics Engineer",
            "company": "Automation Labs",
            "location": "Pune, Maharashtra",
            "skills": ["Robotics", "ROS", "C++"],
            "salary": "₹110,000 - ₹160,000"
        },
        {
            "id": 35,
            "title": "Ethical Hacker",
            "company": "CyberSec Solutions",
            "location": "Hyderabad, Telangana",
            "skills": ["Penetration Testing", "Ethical Hacking", "Cybersecurity"],
            "salary": "₹95,000 - ₹130,000"
        },
        {
            "id": 36,
            "title": "IT Support Engineer",
            "company": "IT Care",
            "location": "Nagpur, Maharashtra",
            "skills": ["Help Desk", "Troubleshooting", "Networking"],
            "salary": "₹55,000 - ₹80,000"
        },
        {
            "id": 37,
            "title": "Security Engineer",
            "company": "InfoSec Ltd.",
            "location": "Delhi",
            "skills": ["Cybersecurity", "SIEM", "Threat Intelligence"],
            "salary": "₹105,000 - ₹150,000"
        },
        {
            "id": 38,
            "title": "Software Tester",
            "company": "TestWorks",
            "location": "Bangalore, Karnataka",
            "skills": ["Manual Testing", "Automation", "Bug Tracking"],
            "salary": "₹70,000 - ₹95,000"
        },
        {
            "id": 39,
            "title": "AI Data Scientist",
            "company": "AI Analytics",
            "location": "Mumbai, Maharashtra",
            "skills": ["Machine Learning", "Data Science", "AI Models"],
            "salary": "₹110,000 - ₹160,000"
        },
        {
            "id": 40,
            "title": "Augmented Reality Developer",
            "company": "AR Studio",
            "location": "Chennai, Tamil Nadu",
            "skills": ["ARKit", "Unity", "Computer Vision"],
            "salary": "₹90,000 - ₹130,000"
        }



    ];

    const handleSkillToggle = (skill) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    // Update jobs filtering to include search parameters
    useEffect(() => {
        let filteredJobs = [...jobsData];

        // Filter by skills if any are selected
        if (selectedSkills.length > 0) {
            filteredJobs = filteredJobs.filter(job =>
                job.skills.some(skill => selectedSkills.includes(skill))
            );
        }

        // Filter by job title
        if (searchTitle) {
            filteredJobs = filteredJobs.filter(job =>
                job.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
        }

        // Filter by location
        if (searchLocation) {
            filteredJobs = filteredJobs.filter(job =>
                job.location.toLowerCase().includes(searchLocation.toLowerCase())
            );
        }

        setRecommendedJobs(filteredJobs);
    }, [selectedSkills, searchTitle, searchLocation]);

    // Initialize with all jobs
    useEffect(() => {
        setRecommendedJobs(jobsData);
    }, []);

    // Get current time for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Greeting Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {getGreeting()}, {name}!
                </h1>
                <p className="text-gray-600">
                    Welcome to your dashboard. Select your skills below to get started.
                </p>
            </div>

            {/* Add search section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search job title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className="flex-1 p-2 border rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="flex-1 p-2 border rounded-md"
                    />
                </div>
            </div>

            {/* Skills Filter Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Select Your Skills
                </h2>

                <div className="flex flex-wrap gap-3">
                    {skillsList.map((skill) => (
                        <button
                            key={skill}
                            onClick={() => handleSkillToggle(skill)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedSkills.includes(skill)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {skill}
                        </button>
                    ))}
                </div>

                {/* Selected Skills Summary */}
                {selectedSkills.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            Your Selected Skills:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Jobs Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {selectedSkills.length > 0 ? 'Recommended Jobs' : 'All Available Jobs'}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {recommendedJobs.map((job) => (
                        <div key={job.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <p className="text-gray-500 mb-2">{job.location}</p>
                            <p className="text-blue-600 font-medium mb-2">{job.salary}</p>
                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 