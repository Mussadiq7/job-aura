import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const Community = () => {
  const discordInviteLink = "https://discord.com/invite/AJRWrHhrXW"; // Replace with your actual Discord invite link

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Developer Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together in our vibrant Discord community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Networking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with developers from around the world and build meaningful professional relationships.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Knowledge Sharing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share your expertise, learn from others, and stay updated with the latest industry trends.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Job Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access exclusive job opportunities and get referrals from community members.
            </p>
          </div>
        </div>

        {/* Discord Invitation Card */}
        <div className="bg-indigo-600 text-white rounded-xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Discord Server
              </h2>
              <p className="text-indigo-100 mb-6">
                Be part of our growing community of developers. Get help, share knowledge, and make connections.
              </p>
              <a
                href={discordInviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
              >
                <FaDiscord className="w-6 h-6 mr-2" />
                Join Discord
              </a>
            </div>
            <div className="w-48 h-48 flex-shrink-0">
              {/* <img
                src="https://cdn.discordapp.com/attachments/1094198226909147166/1197891910537842858/discord-mascot.png?ex=65bc6c65&is=65a9f765&hm=4d3d02f0b3e7fc8f1c1c1e7fb1b6b18c0b36c60a9c5b0f5c8c8d1b7c0b1b1b1b&"
                alt="Discord Mascot"
                className="w-full h-full object-contain"
              /> */}
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              5000+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Active Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Countries
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Active Support
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                For Job Seekers
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Access to exclusive job opportunities</li>
                <li>• Resume review and interview preparation</li>
                <li>• Career guidance from experienced professionals</li>
                <li>• Networking with potential employers</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                For Developers
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Technical discussions and problem-solving</li>
                <li>• Code reviews and pair programming</li>
                <li>• Project collaboration opportunities</li>
                <li>• Learning resources and workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community; 