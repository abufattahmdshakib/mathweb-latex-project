"use client";

import React from "react";
import Link from "next/link";
import { InlineMath, BlockMath } from "react-katex";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LaTeX Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">LaTeX MathWeb</h2>
          <p className="text-sm leading-relaxed">
            Scientific web platform powered by LaTeX & Math Rendering.
          </p>

          <p className="mt-3 text-sm">
            Famous Formula: <InlineMath math="E = mc^2" />
          </p>
        </div>

        {/* LaTeX Topics */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">LaTeX Topics</h3>
          <ul className="space-y-2 text-sm">
            <li>Inline Math: <InlineMath math="a^2 + b^2 = c^2" /></li>
            <li>Fractions: <InlineMath math="\frac{a}{b}" /></li>
            <li>Integrals: <InlineMath math="\int x^2 dx" /></li>
            <li>Derivatives: <InlineMath math="\frac{dy}{dx}" /></li>
          </ul>
        </div>

        {/* Math Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Math Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Equation Rendering</li>
            <li>Scientific UI Design</li>
            <li>Engineering Calculations</li>
            <li>Math Documentation</li>
          </ul>
        </div>

        {/* LaTeX Contact + Block Formula */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Featured Equation</h3>

          <div className="bg-gray-800 p-4 rounded-lg text-center overflow-x-auto mb-3">
            <BlockMath math="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" />
          </div>

          <ul className="space-y-2 text-sm">
            <li>Email: abufattah21@gmail.com</li>
            <li>Physics | Math | CSE | EEE</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} LaTeX MathWeb | Rendered by <InlineMath math="\LaTeX" />
      </div>
    </footer>
  );
}

export default Footer;
