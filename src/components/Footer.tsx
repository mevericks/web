import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 sm:py-12 mt-0">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center border-t border-gray-800/20 pt-6 sm:pt-8">
            <div className="flex items-center space-x-6 md:space-x-8 mb-4">
              <a 
                href="https://github.com/solidquant" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400/90 hover:text-[#C2A422] transition-colors duration-200"
              >
                <svg className="w-5 h-5 md:w-[22px] md:h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              <a 
                href="https://medium.com/@solidquant" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400/90 hover:text-[#C2A422] transition-colors duration-200"
              >
                <svg className="w-5 h-5 md:w-[22px] md:h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a 
                href="mailto:solid@mevericks.com" 
                className="text-gray-400/90 hover:text-[#C2A422] transition-colors duration-200"
              >
                <svg className="w-5 h-5 md:w-[22px] md:h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <div className="text-gray-500/80 text-xs sm:text-sm">
              {new Date().getFullYear()} Mevericks Labs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
