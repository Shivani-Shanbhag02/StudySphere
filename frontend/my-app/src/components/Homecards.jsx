import React from 'react'
import { Link } from 'react-router-dom';

function Homecards() {

    const Cards = [
  {
    title: "Home",
    description: "Your central hub that gives a quick snapshot of everything important — recent activity, progress, and shortcuts to key features."
  },
  {
    title: "Dashboard",
    description: "A visual overview of your performance, habits, and usage patterns with insights that help you track growth over time."
  },
  {
    title: "Tasks",
    description: "Plan, prioritize, and manage your daily and long-term tasks with deadlines, reminders, and progress tracking."
  },
  {
    title: "Notes",
    description: "Create, edit, and organize notes efficiently for lectures, ideas, or quick thoughts, all stored securely in one place."
  },
  {
    title: "Flashcards",
    description: "Boost memory and revision efficiency using interactive flashcards designed for quick learning and spaced repetition."
  },
  {
    title: "Quiz",
    description: "Challenge yourself with topic-based quizzes to evaluate understanding, identify weak areas, and reinforce learning."
  },
  {
    title: "Chatbot",
    description: "An intelligent assistant that helps answer questions, explain concepts, and guide you through problems in real time."
  },
  {
    title: "Resume",
    description: "Build, edit, and customize professional resumes with structured sections, templates, and skill-focused highlights."
  },
  {
    title: "Interview",
    description: "Prepare confidently for interviews with practice questions, tips, mock sessions, and curated preparation resources."
  },
  {
    title: "Mental health",
    description: "Support your well-being through mood tracking, stress-management tools, and gentle reminders for self-care."
  },
];


  return (
    <div className='container mx-auto grid grid-cols-3 gap-6 text-white text-center py-10 '>  
        {Cards.map((card,index)=>(
        <Link to={`/${card.title}`} className="bg-[#dcd0e239] block max-w-sm p-6 border border-default rounded-3xl shadow-xs hover:bg-neutral-secondary-medium transition-transform duration-200 hover:scale-105">
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{card.title}</h5>
            <p className="text-body">{card.description}</p>
        </Link>
        ))}
      
    </div>
  )
}

export default Homecards
