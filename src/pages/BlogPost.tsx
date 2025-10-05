
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Facebook, Twitter, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

// Sample blog posts data (in a real app, this would come from an API)
const SAMPLE_POSTS = [
  {
    title: "Getting Started with IPTV: A Complete Guide",
    excerpt: "Learn everything you need to know about IPTV and how to get started with our comprehensive guide.",
    slug: "getting-started-with-iptv",
    image: "/placeholder.svg",
    date: "April 26, 2025",
    content: `
      <h2>What is IPTV?</h2>
      <p>IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol networks. This is in contrast to delivery through traditional terrestrial, satellite, and cable television formats.</p>
      
      <p>Unlike downloaded media, IPTV offers the ability to stream the source media continuously. As a result, a client media player can begin playing the content almost immediately without having to wait for the download to complete.</p>
      
      <h2>How Does IPTV Work?</h2>
      <p>IPTV converts traditional TV signals into small packets of data, which are then transmitted across the internet. These packets travel through fiber-optic cables to deliver high-quality video and audio directly to your device.</p>
      
      <p>The three main components of IPTV are:</p>
      <ul>
        <li><strong>IPTV Content:</strong> The actual TV shows, movies, and live channels</li>
        <li><strong>IPTV Provider:</strong> The company that maintains the servers and delivers the content</li>
        <li><strong>IPTV Client:</strong> Your device and app that receives and displays the content</li>
      </ul>
      
      <h2>Choosing the Right IPTV Subscription</h2>
      <p>When selecting an IPTV service, consider these factors:</p>
      <ul>
        <li>Channel selection and content library</li>
        <li>Streaming quality and reliability</li>
        <li>Device compatibility and number of connections</li>
        <li>Customer support and service uptime</li>
        <li>Price and subscription options</li>
      </ul>
      
      <p>IPTVPlus offers flexible plans to meet different needs. Whether you're looking for international channels, sports coverage, or on-demand entertainment, we have options for every viewer.</p>
      
      <h2>Setting Up Your IPTV Service</h2>
      <p>Getting started with IPTVPlus is simple:</p>
      <ol>
        <li>Select a subscription plan that fits your needs</li>
        <li>Complete the purchase and receive your login credentials</li>
        <li>Download the appropriate app for your device</li>
        <li>Enter your credentials and start watching</li>
      </ol>
      
      <p>For detailed setup instructions for specific devices, check out our device-specific guides in the blog.</p>
    `,
    author: "IPTV Team",
    tags: ["Getting Started", "IPTV Basics"],
    category: "IPTV Tutorials"
  },
  {
    title: "Best Devices for Streaming IPTV in 2025",
    excerpt: "Discover the top devices for the ultimate IPTV streaming experience this year.",
    slug: "best-devices-for-iptv-2025",
    image: "/placeholder.svg",
    date: "April 25, 2025",
    content: `
      <h2>Finding the Perfect IPTV Device</h2>
      <p>With so many streaming devices on the market, choosing the right one for IPTV can be challenging. Here, we've compiled a list of the best devices for IPTV streaming in 2025.</p>
      
      <h2>1. Amazon Fire TV Stick 4K Max</h2>
      <p>The Amazon Fire TV Stick 4K Max remains one of the most popular choices for IPTV enthusiasts. Its powerful processor and wifi 6 support ensure smooth streaming even for 4K content.</p>
      
      <p><strong>Key features:</strong></p>
      <ul>
        <li>4K Ultra HD streaming capability</li>
        <li>Support for Dolby Vision and Dolby Atmos</li>
        <li>Easy sideloading of IPTV apps</li>
        <li>Affordable price point</li>
      </ul>
      
      <h2>2. NVIDIA Shield TV Pro</h2>
      <p>For premium performance, the NVIDIA Shield TV Pro continues to be the gold standard in 2025. While more expensive than other options, its processing power and features make it worth the investment for serious streamers.</p>
      
      <p><strong>Key features:</strong></p>
      <ul>
        <li>AI upscaling for enhanced picture quality</li>
        <li>Powerful Tegra X1+ processor</li>
        <li>Full Google Play Store access</li>
        <li>Support for various IPTV player apps</li>
      </ul>
      
      <h2>3. Formuler Z10 Pro Max</h2>
      <p>Built specifically with IPTV in mind, the Formuler Z10 Pro Max offers a dedicated IPTV experience with its custom MyTVOnline 2 interface.</p>
      
      <p><strong>Key features:</strong></p>
      <ul>
        <li>Dedicated IPTV-focused interface</li>
        <li>Electronic program guide integration</li>
        <li>Recording capabilities</li>
        <li>Fast channel switching</li>
      </ul>
      
      <h2>Setting Up Your Device</h2>
      <p>After choosing your device, setting up IPTV is straightforward. With IPTVPlus, simply download our recommended app for your device, enter your credentials, and start enjoying thousands of channels.</p>
      
      <p>For device-specific setup guides, check our dedicated tutorials section.</p>
    `,
    author: "Tech Team",
    tags: ["Devices", "Streaming", "Hardware"],
    category: "Device Guides"
  },
  {
    title: "How to Optimize Your IPTV Connection",
    excerpt: "Tips and tricks to get the best possible streaming quality from your IPTV subscription.",
    slug: "optimize-iptv-connection",
    image: "/placeholder.svg",
    date: "April 24, 2025",
    content: `
      <h2>Improving Your IPTV Experience</h2>
      <p>Experiencing buffering or quality issues with your IPTV service? Here are proven methods to optimize your connection and enjoy smoother streaming.</p>
      
      <h2>Check Your Internet Speed</h2>
      <p>The foundation of good IPTV performance is a stable internet connection with sufficient bandwidth:</p>
      <ul>
        <li>For SD channels: Minimum 5 Mbps</li>
        <li>For HD channels: Minimum 10 Mbps</li>
        <li>For 4K content: Minimum 25 Mbps</li>
      </ul>
      
      <p>Run a speed test at different times of the day to ensure consistent performance.</p>
      
      <h2>Use a Wired Connection When Possible</h2>
      <p>While WiFi is convenient, an ethernet connection provides better stability and reduces latency. If your streaming device supports it, connect it directly to your router using an ethernet cable.</p>
      
      <h2>Optimize Your WiFi Setup</h2>
      <p>If you must use WiFi, consider these improvements:</p>
      <ul>
        <li>Place your router in a central location</li>
        <li>Minimize interference from other devices</li>
        <li>Use the 5GHz band instead of 2.4GHz when available</li>
        <li>Consider a mesh WiFi system for larger homes</li>
      </ul>
      
      <h2>Adjust Buffer Settings</h2>
      <p>Many IPTV applications allow you to customize buffer settings. Increasing the buffer size can help prevent interruptions on less stable connections, though it may increase channel switching time.</p>
      
      <h2>Use a VPN Strategically</h2>
      <p>Some ISPs throttle streaming traffic. A quality VPN can bypass throttling, but choose a fast server close to your location. Note that a VPN might reduce speed, so test with and without it.</p>
      
      <h2>Keep Your Apps and Devices Updated</h2>
      <p>Regular updates often include performance improvements. Make sure your IPTV app and device firmware are up-to-date.</p>
      
      <p>IPTVPlus is continuously optimizing our service for better performance. For specific issues with our service, don't hesitate to contact our support team.</p>
    `,
    author: "Network Team",
    tags: ["Optimization", "Streaming Quality", "Troubleshooting"],
    category: "Troubleshooting"
  }
];

// Find related posts (exclude current post and limit to 3)
const getRelatedPosts = (currentSlug: string) => {
  return SAMPLE_POSTS.filter(post => post.slug !== currentSlug).slice(0, 3);
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = SAMPLE_POSTS.find(post => post.slug === slug);
  const relatedPosts = getRelatedPosts(slug || "");
  
  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
    
    // Set page title for SEO
    document.title = post ? `${post.title} | IPTVPlus Blog` : "Blog Post Not Found | IPTVPlus";
  }, [post, slug]);

  if (!post) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen bg-black pt-20 pb-10">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
              <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog">
                <Button className="bg-iptv-red hover:bg-iptv-red/80">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-black pt-16 pb-10">
        {/* Back to blog link */}
        <div className="container mx-auto px-4 pt-4">
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Post header */}
            <div className="mb-8">
              <div className="flex items-center text-gray-400 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
                {post.category && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </>
                )}
                {post.author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Post content */}
            <div 
              className="prose prose-invert prose-lg max-w-none mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Social sharing */}
            <div className="border-t border-gray-800 pt-6 mb-10">
              <div className="flex items-center">
                <span className="text-gray-400 mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" className="rounded-full p-2" aria-label="Share on Facebook">
                    <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full p-2" aria-label="Share on Twitter">
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full p-2" aria-label="Share">
                    <Share2 className="h-5 w-5 text-gray-400 hover:text-white" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Related posts */}
            <div className="border-t border-gray-800 pt-10">
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.slug} {...relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
