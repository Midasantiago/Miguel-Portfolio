import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 flex flex-col items-center">
            <img src='/Headshot.jpg' alt='My Headshot' className="w-1/4 mb-8" />
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
                <p className="text-lg leading-relaxed">
                    My name is Miguel Ruiz, and throughout my career of working in the federal government,
                    and my academic journey in Rutgers SPAA, I have been able to encapsulate my most
                    notable works throughout my graduate program. Upon viewing these subjects, you will
                    be able to see the evolving journey of not just my advancement in the program, but
                    the changing perspectives that were thoroughly challenged and refined. Thank you.
                </p>
                <div className="flex justify-center mt-8">
                    <div className="mb-8 mr-4">
                        <h2 className="text-2xl font-bold mb-4">PORTFOLIO</h2>
                        <a href='/papers/Capstone_Portfolio.zip' download='Capstone_Portfolio.zip' className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600 transition duration-300">
                            Download Portfolio Here!
                        </a>
                    </div>
                    <div className="mb-8 mr-4">
                        <h2 className="text-2xl font-bold mb-4">RESUME</h2>
                        <a href='/papers/Indeed_Resume.pdf' download='Indeed_Resume.pdf' className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600 transition duration-300">
                            Download Resume Here!
                        </a>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">EDITORIAL REPORT</h2>
                        <a href='/papers/Editorial_Report_Portfolio_Project.docx' download='Editorial_Report_Portfolio_Project.docx' className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600 transition duration-300">
                            Download Editorial Report Here!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home