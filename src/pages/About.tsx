
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
            About <span className="text-iptv-red">IPTVPlus</span>
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-gray-300">
            The Future of Entertainment Delivered to You
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-iptv-red">Story</span></h2>
              <p className="text-gray-300 mb-4">
                Founded in 2018, IPTVPlus began with a simple mission: to revolutionize how people access and enjoy television content worldwide. Frustrated by the limitations of traditional cable services and the fragmentation of streaming platforms, our team of tech enthusiasts and entertainment lovers set out to create something better.
              </p>
              <p className="text-gray-300 mb-4">
                Over the years, we've grown from a small startup to a trusted name in IPTV services, serving thousands of satisfied customers across the globe. Through continuous innovation and an unwavering commitment to quality, we've built a platform that delivers premium entertainment without the premium price tag.
              </p>
              <p className="text-gray-300">
                Today, IPTVPlus offers access to over 20,000 channels and a vast library of on-demand content, all delivered through a stable, user-friendly platform that works on virtually any device.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="/images/about-devices.jpg" 
                alt="Multiple devices streaming IPTV content" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 px-4 bg-gradient-to-b from-iptv-darkgray/30 to-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Our Mission & <span className="text-iptv-red">Vision</span></h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
              <p className="text-xl text-gray-300 italic mb-8">
                "At IPTVPlus, we believe in unlimited access to premium content for everyone, everywhere."
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-xl text-gray-300 italic">
                "To lead the IPTV industry with innovation, stability, and unmatched customer support."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-black/50 p-8 rounded-xl border border-gray-800 transform transition-all hover:border-iptv-red/50 hover:scale-105">
                <div className="w-16 h-16 bg-iptv-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-iptv-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Content Quality</h3>
                <p className="text-gray-400">
                  We meticulously curate our content library to ensure high-definition streaming and comprehensive channel selection.
                </p>
              </div>
              
              <div className="bg-black/50 p-8 rounded-xl border border-gray-800 transform transition-all hover:border-iptv-red/50 hover:scale-105">
                <div className="w-16 h-16 bg-iptv-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-iptv-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Service Reliability</h3>
                <p className="text-gray-400">
                  We invest in robust infrastructure to maintain 99.9% uptime and minimize buffering for uninterrupted viewing experiences.
                </p>
              </div>
              
              <div className="bg-black/50 p-8 rounded-xl border border-gray-800 transform transition-all hover:border-iptv-red/50 hover:scale-105">
                <div className="w-16 h-16 bg-iptv-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-iptv-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
                <p className="text-gray-400">
                  Our dedicated 24/7 support team and user-friendly interfaces ensure that customers always have the best experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-iptv-red">Us</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We stand out in the crowded IPTV market by delivering exceptional value and service quality that others simply can't match.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "24/7 Customer Support",
                desc: "Our dedicated team is always ready to assist with any questions or technical issues."
              },
              {
                title: "20,000+ Channels and VOD",
                desc: "Access an unparalleled library of content from around the world in multiple languages."
              },
              {
                title: "High-Quality Streaming",
                desc: "Enjoy crisp 4K and Full HD content with minimal buffering on a stable platform."
              },
              {
                title: "Competitive Pricing",
                desc: "Premium entertainment without the premium price tag, with flexible subscription options."
              },
              {
                title: "Instant Activation",
                desc: "Get access to your subscription immediately after purchase with our automated system."
              },
              {
                title: "Multi-device Compatibility",
                desc: "Watch on Smart TVs, smartphones, tablets, computers, and streaming devices."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-iptv-darkgray/30 to-black/50 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-start">
                  <Check className="text-iptv-red h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-iptv-darkgray/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our <span className="text-iptv-red">Customers</span> Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our subscribers have to say about IPTVPlus.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Michael K.",
                rating: 5,
                comment: "The best IPTV service I've used. Reliable streams and fantastic customer service when I needed help setting up my devices."
              },
              {
                name: "Sarah L.",
                rating: 5,
                comment: "I'm amazed by the channel selection! As someone who watches international content, IPTVPlus has everything I need from around the world."
              },
              {
                name: "David T.",
                rating: 4,
                comment: "Great value for money and very stable service. Almost never buffers even during prime time and big sporting events."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-iptv-red font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Premium <span className="text-iptv-red">IPTV</span>?
            </h2>
            <p className="text-iptv-gray max-w-2xl mx-auto mb-10 text-lg">
              Join thousands of satisfied customers and unlock a world of entertainment today.
            </p>
            <a href="/plans" className="btn-primary text-lg px-10 py-4">
              View Our Plans
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
