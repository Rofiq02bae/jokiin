import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Benefits />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}