import LightRays from '@/components/LightRays';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0D0716] text-gray-300 px-6 py-20">
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00FFFF"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />
            </div>
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="max-w-3xl text-center text-lg leading-relaxed">
                At xSia System, we are dedicated to empowering businesses with intelligent systems and personalized support that grows with you. Our mission is to help you grow smarter and serve better through innovative technology solutions tailored to your unique needs.
            </p>
        </main>
    );
}