"use client";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function LatexInputDemo() {
    const [value, setValue] = useState("");
    const [isLatex, setIsLatex] = useState(false);

    return (
        <div className="px-2 sm:px-6 lg:px-10 ">
            <div className="max-w-7xl mx-auto mt-16 p-6 bg-gray-900 rounded-xl shadow-lg text-white">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
                    <BlockMath math="Smart\ LaTeX\ Input\ System" />
                </h1>

                {/* input */}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter LaTeX..."
                    className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-md text-white border border-white/30 shadow-lg outline-none transition-all duration-300 focus:ring-1 focus:ring-gray-400 placeholder:text-white/70"
                />

                {/* Button */}
                <button
                    onClick={() => setIsLatex(!isLatex)}
                    className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold border border-gray-700 shadow transition"
                >
                    {isLatex ? <BlockMath math="LaTeX\ Mode\ ON" /> : <BlockMath math="Turn\ ON\ LaTeX" />}
                </button>

                {/* Output */}
                <div className="mt-6 p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold border border-gray-700 shadow transition min-h-[80px] flex items-center justify-center">
                    {!isLatex ? (
                        <BlockMath math="\text{❌ LaTeX Mode is OFF}" />
                    ) : value ? (
                        <BlockMath math={value} />
                    ) : (
                        <BlockMath math="\text{Enter LaTeX code to see output}" />
                    )}
                </div>
            </div>
        </div>
    );
}
