import React from "react";
import Latex from "react-latex-next";

const EEEFIntegration = () => {
    // Left integrals 
    const leftIntegrals = [
        "\\int x^4 dx = \\frac{x^5}{5}",
        "\\int 3x^3 dx = \\frac{3x^4}{4}",
        "\\int -2x^2 dx = -\\frac{2x^3}{3}",
        "\\int 5x dx = \\frac{5x^2}{2}",
        "\\int -7 dx = -7x",
        "\\int x^3 dx = \\frac{x^4}{4}",
        "\\int 2x^2 dx = \\frac{2x^3}{3}",
        "\\int -3x dx = -\\frac{3x^2}{2}",
        "\\int 4 dx = 4x",
        "\\int \\sin(x) dx = -\\cos(x)",
        "\\int \\cos(x) dx = \\sin(x)",
        "\\int 2\\sin(x) dx = -2\\cos(x)",
        "\\int -3\\cos(x) dx = -3\\sin(x)",
        "\\int e^x dx = e^x",
        "\\int 2e^x dx = 2e^x",
        "\\int x dx = \\frac{x^2}{2}",
        "\\int x^2 dx = \\frac{x^3}{3}",
        "\\int x^5 dx = \\frac{x^6}{6}",
        "\\int 7x dx = \\frac{7x^2}{2}",
        "\\int -5 dx = -5x"
    ];

    // Right integrals 
    const rightIntegrals = [
        "\\int x^6 dx = \\frac{x^7}{7}",
        "\\int 4x^5 dx = \\frac{4x^6}{6}",
        "\\int -x^4 dx = -\\frac{x^5}{5}",
        "\\int 6x^3 dx = \\frac{6x^4}{4}",
        "\\int -2x^2 dx = -\\frac{2x^3}{3}",
        "\\int 3x dx = \\frac{3x^2}{2}",
        "\\int -8 dx = -8x",
        "\\int x^3 dx = \\frac{x^4}{4}",
        "\\int 5x^2 dx = \\frac{5x^3}{3}",
        "\\int -x dx = -\\frac{x^2}{2}",
        "\\int 7 dx = 7x",
        "\\int \\sin(2x) dx = -\\frac{1}{2} \\cos(2x)",
        "\\int \\cos(3x) dx = \\frac{1}{3} \\sin(3x)",
        "\\int 2e^{2x} dx = e^{2x}",
        "\\int e^{3x} dx = \\frac{1}{3} e^{3x}",
        "\\int 4x^4 dx = \\frac{4x^5}{5}",
        "\\int -x^3 dx = -\\frac{x^4}{4}",
        "\\int 6x^2 dx = 2x^3",
        "\\int -3x dx = -\\frac{3x^2}{2}",
        "\\int 5 dx = 5x"
    ];

    const renderIntegrals = (arr) =>
        arr.map((line, index) => (
            <div key={index} className="mb-2">
                <Latex>{`$${line}$`}</Latex>
            </div>
        ));

    return (
        <div className="px-2 sm:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg space-y-12">
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                    Side-by-Side Integration Examples
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side */}
                    <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                             Integration One
                        </h2>
                        {renderIntegrals(leftIntegrals)}
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                             Integration Two
                        </h2>
                        {renderIntegrals(rightIntegrals)}
                    </div>
                </div>

                {/* Left Final Expression */}
                <div className="mt-8 p-6 bg-gray-800 dark:bg-gray-800 rounded-xl shadow-inner">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                        Integration One Final Expression
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        <Latex>{`$\\frac{x^5}{5} + \\frac{3x^4}{4} - \\frac{2x^3}{3} + \\frac{5x^2}{2} - 7x + \\frac{x^4}{4} + \\frac{2x^3}{3} - \\frac{3x^2}{2} + 4x - \\cos(x) + \\sin(x) - 2\\cos(x) - 3\\sin(x) + e^x + 2e^x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\frac{x^6}{6} + \\frac{7x^2}{2} - 5x + C$`}</Latex>
                    </p>
                </div>

                {/* Right Final Expression */}
                <div className="mt-8 p-6 bg-gray-800 dark:bg-gray-800 rounded-xl shadow-inner">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                        Integration Two Final Expression
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        <Latex>{`$\\frac{x^7}{7} + \\frac{4x^6}{6} - \\frac{x^5}{5} + \\frac{6x^4}{4} - \\frac{2x^3}{3} + \\frac{3x^2}{2} - 8x + \\frac{x^4}{4} + \\frac{5x^3}{3} - \\frac{x^2}{2} + 7x - \\frac{1}{2}\\cos(2x) + \\frac{1}{3}\\sin(3x) + e^{2x} + \\frac{1}{3} e^{3x} + \\frac{4x^5}{5} - \\frac{x^4}{4} + 2x^3 - \\frac{3x^2}{2} + 5x + C$`}</Latex>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default EEEFIntegration;
