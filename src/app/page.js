import Link from "next/link";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Wrapper from "../components/Wrapper";
import SectionHeading from "../components/common/SectionHeading";
import PostCard from "../components/blog/PostCard";
import { getAllPosts } from "../lib/blog";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Hero />
      <Services />
      <Projects />
      
      {/* NEW: Latest Writing Section */}
      <section className="py-16 sm:py-20 bg-white">
        <Wrapper className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <SectionHeading 
              eyebrow="Blog" 
              title="Latest Writing" 
            />
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors pb-1"
            >
              View all →
            </Link>
          </div>
          
          <div className="flex flex-col gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Wrapper>
      </section>

      <Contact />  
      <Footer />
    </div>
  );
}
