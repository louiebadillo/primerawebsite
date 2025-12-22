import React from "react";

const ProgramsOverview = () => {
  const coreComponents = [
    {
      title: "Culturally Safe and Supportive Environment",
      description: "Incorporates cultural activities, language programs, and Elder visits to foster identity and belonging",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Trauma-Informed Care & Psychological Support",
      description: "Provides therapy and crisis intervention to support emotional healing and well-being.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Health and Wellness Services",
      description: "Facilitate access to medical, dental, optical, mental health and traditional healing services by connecting individuals with trusted providers for holistic care.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Educational Support",
      description: "Provides academic support, life skills training, and career guidance for academic and personal growth.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      )
    },
    {
      title: "Family and Community Engagement",
      description: "Strengthens family bonds and supports community connections through reunification and cultural engagement.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    },
    {
      title: "Behavior Management & Positive Discipline",
      description: "Focuses on behavior management, restorative justice, and positive reinforcement.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Transition and Life Preparation Services",
      description: "Supports independent living, job readiness, life skills training and accommodation assistance.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Recreational and Social Development",
      description: "Encourages creative expression, social activities, and peer relationships.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Crisis and Emergency Response",
      description: "Provides 24/7 crisis support and immediate intervention.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Staff Training and Support",
      description: "Ensures ongoing training in trauma-informed care and cultural competency.",
      icon: (
        <svg className="w-6 h-6" fill="#87afb1" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 md:mb-10">
            
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed px-4 sm:px-6">
            At Pluming Eagle Lodge, we offer comprehensive programs designed to address the diverse and unique needs of children, youth, and families we serve. We believe in healing, empowerment, and fostering strong communities.
          </p>
        </div>

        {/* Core Components Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white text-center mb-8 sm:mb-12">
            Core Components of Our Programs
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {coreComponents.map((component, index) => (
                              <div 
                  key={index}
                  className="flex flex-col items-start gap-3 p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#87afb1]">
                      {component.icon}
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                      {component.title}
                    </h4>
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
            Ready to learn more about our specific programs?
          </p>
          <a 
            href="/programs" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview; 