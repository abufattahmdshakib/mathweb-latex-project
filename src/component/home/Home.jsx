"use client";

import React from "react";
import { InlineMath, BlockMath } from "react-katex";

export default function HomePage() {
    return (
        <main className="bg-gray-950 text-gray-200 px-2 sm:px-6 lg:px-10 py-16">

            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Electrical & Electronic Engineering
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Learn and visualize core EEE formulas using LaTeX powered scientific notation.
                </p>

                <div className="mt-6 text-lg text-indigo-400">
                    <InlineMath math="P = VI \quad,\quad V = IR \quad,\quad E = \frac{1}{2}CV^2" />
                </div>
            </section>

            {/* Formula Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                {/* Ohm's Law */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Ohm’s Law
                    </h2>
                    <BlockMath math="V = IR" />
                    <p className="text-sm text-gray-400 mt-2">
                        Voltage equals current multiplied by resistance.
                    </p>
                </div>

                {/* Electric Power */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Electric Power
                    </h2>
                    <BlockMath math="P = VI" />
                    <BlockMath math="P = I^2R" />
                    <p className="text-sm text-gray-400 mt-2">
                        Power consumed by electrical load.
                    </p>
                </div>

                {/* Energy Stored in Capacitor */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Capacitor Energy
                    </h2>
                    <BlockMath math="E = \frac{1}{2}CV^2" />
                    <p className="text-sm text-gray-400 mt-2">
                        Energy stored in a capacitor.
                    </p>
                </div>

                {/* Inductor Voltage */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Inductor Voltage
                    </h2>
                    <BlockMath math="V = L \frac{di}{dt}" />
                    <p className="text-sm text-gray-400 mt-2">
                        Voltage across inductor due to changing current.
                    </p>
                </div>

                {/* Transformer Equation */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Transformer Ratio
                    </h2>
                    <BlockMath math="\frac{V_1}{V_2} = \frac{N_1}{N_2}" />
                    <p className="text-sm text-gray-400 mt-2">
                        Voltage ratio equals turns ratio.
                    </p>
                </div>

                {/* AC RMS Value */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        RMS Voltage
                    </h2>
                    <BlockMath math="V_{rms} = \frac{V_m}{\sqrt{2}}" />
                    <p className="text-sm text-gray-400 mt-2">
                        Root Mean Square of AC voltage.
                    </p>
                </div>

                {/* Three Phase Power */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow sm:col-span-2 lg:col-span-3">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        Three Phase Power
                    </h2>
                    <BlockMath math="P = \sqrt{3} V_L I_L \cos \phi" />
                    <p className="text-sm text-gray-400 mt-2 text-center">
                        Total real power in balanced 3-phase system.
                    </p>
                </div>

            </section>
        </main>
    );
}
