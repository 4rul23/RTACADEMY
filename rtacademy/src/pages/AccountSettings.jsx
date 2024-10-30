import React, { useState } from "react";
import ruanmei from '../assets/images/ruanmei.jfif'
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Target,
  Award,
  Book,
  GraduationCap,
  Edit,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  Zap,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");

  // Tabs Configuration
  const tabs = [
    {
      id: "account",
      label: "Profile",
      icon: User,
      color: "cyan",
    },
    {
      id: "learning",
      label: "Learning Path",
      icon: Target,
      color: "blue",
    },
    {
      id: "billing",
      label: "Subscription",
      icon: CreditCard,
      color: "purple",
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: Award,
      color: "yellow",
    },
  ];

  // User Data State
  const [userData, setUserData] = useState({
    profile: {
      fullName: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      role: "Student",
      avatar:
        ruanmei,
      bio: "Frontend Developer | Learning Enthusiast",
      interests: ["Frontend", "UI/UX", "React"],
      socialLinks: {
        github: "github.com/johndoe",
        linkedin: "linkedin.com/in/johndoe",
      },
    },
    learningPath: {
      currentPath: "Frontend Development",
      progress: 65,
      completedCourses: 3,
      totalCourses: 12,
      currentCourse: "Advanced React",
      nextMilestone: "React Testing",
      learningStreak: 7,
      totalHours: 45.5,
    },
    subscription: {
      plan: "Pro",
      status: "Active",
      nextBilling: "2024-08-01",
      price: "$29.99",
      features: [
        "Unlimited Access to Courses",
        "Premium Projects",
        "Certificate Generation",
        "Priority Support",
      ],
    },
    achievements: {
      totalBadges: 12,
      completedBadges: 5,
      recentAchievements: [
        {
          title: "Frontend Master",
          description: "Completed Frontend Fundamentals",
          date: "2024-07-15",
          icon: Book,
        },
        {
          title: "Consistent Learner",
          description: "7 Days Streak",
          date: "2024-07-14",
          icon: Zap,
        },
      ],
      certificates: [
        {
          title: "React Development",
          issueDate: "2024-06-01",
          credential: "CERT-001",
        },
      ],
    },
  });

  const handleInputChange = (section, field, value) => {
    setUserData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A1525] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative px-4 py-12 mx-auto max-w-7xl">
        {/* Settings Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold">Account Settings</h1>
              <p className="text-gray-400">
                Manage your profile and preferences
              </p>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/Choose-platform")}
                className="px-4 py-2 text-gray-400 border border-gray-700 rounded-lg hover:text-white hover:border-gray-600"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            {/* Profile Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl"
            >
              <div className="relative group">
                <img
                  src={userData.profile.avatar}
                  alt={userData.profile.fullName}
                  className="w-20 h-20 mx-auto mb-4 border-2 rounded-xl border-cyan-500/20"
                />
                <button className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity opacity-0 rounded-xl bg-gray-900/50 group-hover:opacity-100">
                  <Edit className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-lg font-semibold">
                  {userData.profile.fullName}
                </h3>
                <p className="text-sm text-gray-400">{userData.profile.role}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 mt-4 rounded-lg bg-gray-900/50">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">
                    {userData.learningPath.completedCourses}
                  </p>
                  <p className="text-xs text-gray-400">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">
                    {userData.achievements.totalBadges}
                  </p>
                  <p className="text-xs text-gray-400">Badges</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Tabs */}
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r from-${tab.color}-500/10 to-${tab.color}-500/5 text-white border border-${tab.color}-500/20`
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Quick Stats */}
            <div className="p-4 space-y-4 border border-gray-700 rounded-xl bg-gray-800/50">
              <h3 className="text-sm font-medium text-gray-400">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">Learning Time</span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    {userData.learningPath.totalHours}h
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Streak</span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    {userData.learningPath.learningStreak} days
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Rating</span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    4.8/5.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="col-span-9">
            <div className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl">
              {/* Right Content Area - Tab Contents */}
              {activeTab === "account" && (
                <div className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">
                      Basic Information
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={userData.profile.fullName}
                          onChange={(e) =>
                            handleInputChange(
                              "profile",
                              "fullName",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">
                          Username
                        </label>
                        <input
                          type="text"
                          value={userData.profile.username}
                          onChange={(e) =>
                            handleInputChange(
                              "profile",
                              "username",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                          type="email"
                          value={userData.profile.email}
                          onChange={(e) =>
                            handleInputChange(
                              "profile",
                              "email",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Role</label>
                        <select
                          value={userData.profile.role}
                          onChange={(e) =>
                            handleInputChange("profile", "role", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                        >
                          <option value="Student">Student</option>
                          <option value="Professional">Professional</option>
                          <option value="Instructor">Instructor</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Bio & Interests */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">
                      Bio & Interests
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Bio</label>
                        <textarea
                          value={userData.profile.bio}
                          onChange={(e) =>
                            handleInputChange("profile", "bio", e.target.value)
                          }
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">
                          Interests
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {userData.profile.interests.map((interest, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm border rounded-full text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
                            >
                              {interest}
                            </span>
                          ))}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-1 text-sm text-gray-400 border border-gray-700 rounded-full hover:text-cyan-400 hover:border-cyan-500/20"
                          >
                            + Add Interest
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">Social Links</h2>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(userData.profile.socialLinks).map(
                        ([platform, link]) => (
                          <div key={platform} className="space-y-2">
                            <label className="text-sm text-gray-400 capitalize">
                              {platform}
                            </label>
                            <input
                              type="text"
                              value={link}
                              onChange={(e) =>
                                handleInputChange(
                                  "profile",
                                  `socialLinks.${platform}`,
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 focus:outline-none focus:border-cyan-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "learning" && (
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">
                      Learning Progress
                    </h2>
                    <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="mb-1 text-lg font-medium">
                            {userData.learningPath.currentPath}
                          </h3>
                          <p className="text-sm text-gray-400">
                            Current Learning Path
                          </p>
                        </div>
                        <div className="px-3 py-1 text-sm rounded-full text-cyan-400 bg-cyan-500/10">
                          {userData.learningPath.progress}% Complete
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="h-2 mb-2 overflow-hidden rounded-full bg-gray-700/50">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${userData.learningPath.progress}%`,
                            }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-gray-400">
                            {userData.learningPath.completedCourses}/
                            {userData.learningPath.totalCourses} Courses
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-gray-800/50">
                          <h4 className="mb-1 text-sm text-gray-400">
                            Current Course
                          </h4>
                          <p className="font-medium text-white">
                            {userData.learningPath.currentCourse}
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50">
                          <h4 className="mb-1 text-sm text-gray-400">
                            Next Milestone
                          </h4>
                          <p className="font-medium text-white">
                            {userData.learningPath.nextMilestone}
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50">
                          <h4 className="mb-1 text-sm text-gray-400">
                            Learning Streak
                          </h4>
                          <p className="font-medium text-white">
                            {userData.learningPath.learningStreak} days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Course Progress</h2>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-cyan-400 bg-cyan-500/10"
                      >
                        View All Courses
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <div className="space-y-4">
                      {/* Add course progress cards here */}
                      {/* Example card structure below */}
                      <div className="p-4 border border-gray-700 rounded-xl bg-gray-900/30">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="mb-1 font-medium">Advanced React</h3>
                            <p className="text-sm text-gray-400">
                              8/12 Modules Completed
                            </p>
                          </div>
                          <span className="px-3 py-1 text-sm text-green-400 rounded-full bg-green-500/10">
                            In Progress
                          </span>
                        </div>
                        <div className="h-2 mb-4 overflow-hidden rounded-full bg-gray-700/50">
                          <div className="w-2/3 h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>65% Complete</span>
                          <span>Est. 2 hours left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "billing" && (
                <div className="space-y-8">
                  {/* Current Plan */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">Current Plan</h2>
                    <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-medium">
                              {userData.subscription.plan} Plan
                            </h3>
                            <span className="px-2 py-0.5 text-xs rounded-full text-cyan-400 bg-cyan-500/10">
                              {userData.subscription.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            Billed monthly • Next payment on{" "}
                            {userData.subscription.nextBilling}
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {userData.subscription.price}
                          <span className="text-sm text-gray-400">/mo</span>
                        </p>
                      </div>
                      <div className="space-y-3">
                        {userData.subscription.features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              {feature}
                            </div>
                          )
                        )}
                      </div>
                      <div className="flex gap-4 mt-6">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                        >
                          Upgrade Plan
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 text-gray-400 border border-gray-700 rounded-lg"
                        >
                          Cancel Subscription
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Payment History */}
                  <div>
                    <h2 className="mb-6 text-xl font-semibold">
                      Payment History
                    </h2>
                    <div className="space-y-4">
                      {/* Add payment history items here */}
                      {/* Example item structure below */}
                      <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/30">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-green-500/10">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="font-medium text-white">
                              July 2024 • Pro Plan
                            </p>
                            <p className="text-sm text-gray-400">
                              Paid on Jul 1, 2024
                            </p>
                          </div>
                        </div>
                        <p className="font-medium text-white">$29.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'achievements' && (
  <div className="space-y-8">
    {/* Achievements Overview (lanjutan) */}
    <div>
      <h2 className="mb-6 text-xl font-semibold">Achievements</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
          <div className="p-3 mb-4 w-fit rounded-xl bg-cyan-500/10">
            <Award className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="mb-1 text-2xl font-bold text-white">{userData.achievements.completedBadges}</h3>
          <p className="text-sm text-gray-400">Badges Earned</p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
          <div className="p-3 mb-4 w-fit rounded-xl bg-purple-500/10">
            <BookOpen className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="mb-1 text-2xl font-bold text-white">{userData.learningPath.completedCourses}</h3>
          <p className="text-sm text-gray-400">Courses Completed</p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
          <div className="p-3 mb-4 w-fit rounded-xl bg-yellow-500/10">
            <GraduationCap className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="mb-1 text-2xl font-bold text-white">{userData.achievements.certificates.length}</h3>
          <p className="text-sm text-gray-400">Certificates Earned</p>
        </div>
      </div>
    </div>

    {/* Recent Achievements */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Achievements</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-cyan-400 bg-cyan-500/10"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {userData.achievements.recentAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            className="p-4 transition-all border border-gray-700 rounded-xl bg-gray-900/30 hover:border-cyan-500/50"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <achievement.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">{achievement.title}</h3>
                <p className="mb-2 text-sm text-gray-400">{achievement.description}</p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Certificates */}
    <div>
      <h2 className="mb-6 text-xl font-semibold">Your Certificates</h2>
      <div className="space-y-4">
        {userData.achievements.certificates.map((certificate, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            className="flex items-center justify-between p-4 transition-all border border-gray-700 rounded-xl bg-gray-900/30 hover:border-cyan-500/50"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/10">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">{certificate.title}</h3>
                <p className="text-sm text-gray-400">Issued on {certificate.issueDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-400">ID: {certificate.credential}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-cyan-400 bg-cyan-500/10"
              >
                View Certificate
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Achievement Progress */}
    <div>
      <h2 className="mb-6 text-xl font-semibold">Progress Towards Next Achievement</h2>
      <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30">
        <div className="flex items-start gap-6 mb-6">
          <div className="p-4 rounded-xl bg-purple-500/10">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h3 className="mb-1 text-lg font-medium">Frontend Expert</h3>
            <p className="text-sm text-gray-400">Complete all Frontend Development courses</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-cyan-400">75%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-700/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 p-3 rounded-lg bg-gray-800/50">
            <h4 className="mb-1 text-sm text-gray-400">Completed</h4>
            <p className="font-medium text-white">6 of 8 requirements</p>
          </div>
          <div className="flex-1 p-3 rounded-lg bg-gray-800/50">
            <h4 className="mb-1 text-sm text-gray-400">Estimated Time</h4>
            <p className="font-medium text-white">2 weeks left</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
