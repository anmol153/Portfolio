import React from "react";
import ProjectCard from "./Projectscard";

const Projects = () => {
  return (
    <div className="items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/assests/image.png"
          title="2D Metaverse"
          link = "https://twod-metaverse-zeo3.onrender.com"
          description="A feature-rich 2D multiplayer metaverse built with React, Canvas, Socket.IO, WebRTC, Firebase and LiveKit. Explore, chat, call, and interact in real-time — all from your browser."
        />
        <ProjectCard
          src="/assests/realwstate.png"
          title="Real Estate Marketplace"
          link = "https://real-estate-30cd.onrender.com"
          description="A full-stack Real Estate Listing Platform where users can create accounts, post properties, upload images, manage listings, and directly contact owners -mern "
        />
        <ProjectCard
          src="/assests/chatapp.png"
          title="Real-Time Chat App"
          link = "https://pingme-n98t.onrender.com"
          description="A full-stack real-time chat application using React, Node.js, Socket.IO, and MongoDB. Features include private messaging, typing indicators, and live updates."
        />
        <ProjectCard
          src="/assests/blog.png"
          title="DevBlog"
          description="DevBlog is a full-stack blogging platform where users can create, manage, and explore blog posts. Built with React, Tailwind CSS, and Appwrite for auth, storage, and database."
        />
        <ProjectCard
          src="/assests/brainwware.png"
          title="Brainware Frontend"
          link = "https://brainwave-ui-1.onrender.com"
          description="Brainwave is a visually stunning and futuristic frontend website inspired by cutting-edge AI design trends. Built with React and Tailwind CSS, it showcases smooth animations, glassmorphism effects, and responsive layouts — perfect for AI SaaS landing pages."
        />
        <ProjectCard
          src="/assests/Neu.png"
          title="American Sign Language Recognizer"
          description="An intelligent real-time system that recognizes American Sign Language (ASL) gestures using Convolutional Neural Networks (CNN) and Computer Vision techniques. This project leverages OpenCV for hand tracking and PyTorch to run a custom-trained deep learning model that classifies signs from A–Z."
        />
      </div>
    </div>
  );
};

export default Projects;
