"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InlineMath } from "react-katex";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-gray-200 border-b border-gray-700 relative z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">

                {/* Logo with LaTeX */}
                <div className="flex items-center gap-2 text-xl font-bold text-white">
                    <span>MathWeb</span>
                    <span className="text-indigo-400">
                        <InlineMath math="\LaTeX" />
                    </span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-sm">
                    <li>
                        <Link href="/" className="hover:text-white transition">
                            Home <InlineMath math="x" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/math" className="hover:text-white transition">
                            Pythagoras <InlineMath math="a^2+b^2=c^2" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/physics" className="hover:text-white transition">
                            Relativity <InlineMath math="E=mc^2" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/calculus" className="hover:text-white transition">
                            Calculus <InlineMath math="\int xdx" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact <InlineMath math="\Sigma" />
                        </Link>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold border border-gray-700 shadow transition">
                        Start Learning 🚀
                    </button>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-3xl relative z-50"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-sm absolute top-16 left-0 w-full z-40 shadow-lg">
                    <Link onClick={() => setOpen(false)} href="/" className="block hover:text-white">
                        Home <InlineMath math="x" />
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/math" className="block hover:text-white">
                        Pythagoras <InlineMath math="a^2+b^2=c^2" />
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/physics" className="block hover:text-white">
                        Relativity <InlineMath math="E=mc^2" />
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/calculus" className="block hover:text-white">
                        Calculus <InlineMath math="\int xdx" />
                    </Link>
                    <Link onClick={() => setOpen(false)} href="/contact" className="block hover:text-white">
                        Contact <InlineMath math="\Sigma" />
                    </Link>
                    <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-full text-sm font-semibold border border-gray-600 transition">
                        Start Learning 🚀
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
