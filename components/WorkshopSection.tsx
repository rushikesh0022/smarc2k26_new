
import React, { useState } from 'react';
import { WORKSHOP_DAYS } from '../constants';

const WorkshopSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const currentDay = WORKSHOP_DAYS.find(d => d.id === activeDay);

  return (
    <section id="workshops" className="py-24 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Hands-on Experience</h2>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">Medical Workshops</h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {WORKSHOP_DAYS.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${
                activeDay === day.id
                  ? 'bg-primary text-navy-900 scale-105'
                  : 'bg-navy-800 text-gray-400 hover:bg-navy-700'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {currentDay?.mom.map((item, idx) => (
            <div 
              key={idx}
              className="bg-navy-800/50 p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group animate-fadeIn"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <span className="px-4 py-1 bg-medical-green text-primary text-xs font-bold rounded-full border border-primary/20">
                  {item.time}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Expert:</span>
                <span className="text-sm font-semibold text-primary italic">{item.speaker}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
