import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit.
                Tellus cras adipiscing enim eu turpis egestas pretium aenean. Enim neque volutpat ac
                tincidunt vitae. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
                Tristique sollicitudin nibh sit amet commodo nulla. Sit amet commodo nulla facilisi.
                Volutpat lacus laoreet non curabitur gravida. Euismod nisi porta lorem mollis aliquam ut
                porttitor. Non arcu risus quis varius quam quisque. Urna porttitor rhoncus dolor purus.
                Id diam maecenas ultricies mi eget mauris pharetra et ultrices.
            </p>
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">My Papers</h2>
                <a href='#' download='#' className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600 transition duration-300">
                    Download My Papers Here!
                </a>
                <p className="mt-4">Test Description</p>
            </div>
        </div>

    )
}

export default Home