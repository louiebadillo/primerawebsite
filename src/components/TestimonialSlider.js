import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "[hidden]",
      role: "Previous Youth in Care",
      content: "Thank you for all the hard work. I am still alive because of all the support and advice that you gave me and now I realize that people really care about me. I'm blessed to be in your care. Thank you for treating me like family - Christmas and New Year card to staff member",

    },
    {
      id: 2,
      name: "[hidden]",
      role: "Former Youth in Care",
      content: "This holiday may be different for me but I don't care because I have you to guide me in the right path and I'm also surrounded by people who love me and care a whole lot for me. I wanna thank you for everything you do for us! - Christmas and New Year card to staff member",
    },
    {
      id: 3,
      name: "[hidden]",
      role: "Former Youth in Care",
      content: "Whenever I ran I felt relief, at first, the I just ran to get out. The staff whenever I was brought back welcomed me with a warm smile and a hello. No yelling or hitting which was something I was used to. I took advantage of the kindness which i know now I regret. Instead of being focused on keeping my reputation and drinking, I should've focused on myself. I would lash out to those around me which was the staff who did nothing but help me all the time. My behaviour was unacceptable and if I could I would apologize to them. -- Letter to staff member",


    },
    {
      id: 4,
      name: "L.P. ",
      role: "Program Guest Instructor",
      content: "The comprehensive approach at Pluming Eagle Lodge is exceptional. They address not just immediate needs but create lasting foundations for healing and growth. They help youth develop life skills and get them ready for independent living while fostering a strong cultural identity.",

    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-150 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Letters from our youth and community members
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 sm:p-10 shadow-lg max-w-4xl mx-auto">


                    {/* Testimonial Content */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex justify-end gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white text-right">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-right">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider; 