"use client";

import React from "react";
import { InlineMath, BlockMath } from "react-katex";

export default function Class11Math() {
    return (
        <main className="bg-gray-950 min-h-screen text-gray-200 px-2 sm:px-6 lg:px-16 py-16">

            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Class 11 Mathematics: Key Formulas
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Important Class 11 math formulas for Algebra, Trigonometry, Calculus, Coordinate Geometry and Probability.
                </p>

                <div className="mt-6 text-lg text-indigo-400 flex flex-wrap justify-center gap-4">
                    <InlineMath math="a^2 + b^2 = c^2" />
                    <InlineMath math="(a+b)^2 = a^2 + 2ab + b^2" />
                </div>
            </section>

            {/* Formula Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/*Algebraic Identities */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Algebraic Identities</h2>
                    <BlockMath math="(a+b)^2 = a^2 + 2ab + b^2" />
                    <BlockMath math="(a-b)^2 = a^2 - 2ab + b^2" />
                    <BlockMath math="a^2 - b^2 = (a-b)(a+b)" />
                    <p className="text-sm text-gray-400">Basic algebraic identities</p>
                </div>


                {/* Factorization */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Factorization</h2>
                    <BlockMath math="a^2 - b^2 = (a-b)(a+b)" />
                    <BlockMath math="a^3 + b^3 = (a+b)(a^2 - ab + b^2)" />
                    <BlockMath math="a^3 - b^3 = (a-b)(a^2 + ab + b^2)" />
                    <p className="text-sm text-gray-400">Common algebraic identities</p>
                </div>

                {/* Trigonometry */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Trigonometry</h2>
                    <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
                    <BlockMath math="\tan \theta = \frac{\sin \theta}{\cos \theta}" />
                    <BlockMath math="\sin 2\theta = 2 \sin\theta \cos\theta" />
                    <BlockMath math="\cos 2\theta = \cos^2 \theta - \sin^2 \theta" />
                    <p className="text-sm text-gray-400">Basic trigonometric identities</p>
                </div>

                {/* Coordinate Geometry */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Coordinate Geometry</h2>
                    <BlockMath math="Distance = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
                    <BlockMath math="Midpoint = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)" />
                    <BlockMath math="Slope = \frac{y_2-y_1}{x_2-x_1}" />
                    <BlockMath math="Section = \left(\frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n}\right)" />
                    <p className="text-sm text-gray-400">Distance, midpoint, slope, and section formulas</p>
                </div>

                {/* Calculus */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Calculus</h2>
                    <BlockMath math="\lim_{x \to a} f(x) = L" />
                    <BlockMath math="\frac{d}{dx} x^n = nx^{n-1}" />
                    <BlockMath math="\frac{d}{dx} \sin x = \cos x" />
                    <BlockMath math="\frac{d}{dx} \cos x = -\sin x" />
                    <p className="text-sm text-gray-400">Limit and derivative formulas</p>
                </div>

                {/* Probability */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow flex flex-col space-y-3 break-words">
                    <h2 className="text-xl font-semibold text-white">Probability</h2>
                    <BlockMath math="P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of outcomes}}" />
                    <BlockMath math="^nC_r = \frac{n!}{r!(n-r)!}" />
                    <p className="text-sm text-gray-400">Basic probability and combinatorics</p>
                </div>

            </section>
        </main>
    );
}
