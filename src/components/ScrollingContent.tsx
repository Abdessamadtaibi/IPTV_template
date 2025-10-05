import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MovieModal from './MovieModal';

// Channel logos data
const channelLogos = [
  { id: 1, name: "Netflix", image: "images/channels/netflix1.png", category: "streaming" },
  { id: 2, name: "HBO", image: "images/channels/hbo.png", category: "streaming" },
  { id: 3, name: "Disney+", image: "images/channels/disney.png", category: "streaming" },
  { id: 4, name: "Prime", image: "images/channels/prime.png", category: "streaming" },
  { id: 5, name: "BeIN Sports", image: "images/channels/bein.png", category: "sports" },
  { id: 6, name: "Videoland", image: "images/channels/videoland.png", category: "streaming" },
  { id: 7, name: "FOX", image: "images/channels/FOX.png", category: "tv" },
  { id: 8, name: "SKY", image: "images/channels/SKY1.png", category: "tv" },
  { id: 9, name: "Formula1", image: "images/channels/formula1.png", category: "sports" },
  { id: 10, name: "Hulu", image: "images/channels/hulu.png", category: "streaming" },
  { id: 11, name: "Apple TV+", image: "images/channels/apple.png", category: "streaming" },
  { id: 1, name: "Netflix", image: "images/channels/netflix1.png", category: "streaming" },
  { id: 2, name: "HBO", image: "images/channels/hbo.png", category: "streaming" },
  { id: 3, name: "Disney+", image: "images/channels/disney.png", category: "streaming" },
  { id: 4, name: "Prime", image: "images/channels/prime.png", category: "streaming" },
  { id: 5, name: "BeIN Sports", image: "images/channels/bein.png", category: "sports" },
  { id: 6, name: "Videoland", image: "images/channels/videoland.png", category: "streaming" },
  { id: 7, name: "FOX", image: "images/channels/FOX.png", category: "tv" },
  { id: 8, name: "SKY", image: "images/channels/SKY1.png", category: "tv" },
  { id: 9, name: "Formula1", image: "images/channels/formula1.png", category: "sports" },
  { id: 10, name: "Hulu", image: "images/channels/hulu.png", category: "streaming" },
  { id: 11, name: "Apple TV+", image: "images/channels/apple.png", category: "streaming" },
];

// Movie data
const movieCovers = [
  { 
    id: 1, 
    title: "Joker", 
    image: "images/series/joker.webp", 
    genre: "Crime, Drama, Thriller",
    rating: "8.4",
    year: "2025"
  },
  { 
    id: 2, 
    title: "Money Heist", 
    image: "images/series/money-heist.webp", 
    genre: "Action, Crime, Drama",
    rating: "8.2",
    year: "2021"
  },
  { 
    id: 3, 
    title: "Fast And Furieus", 
    image: "images/series/fast.webp", 
    genre: "Action, Crime, Thriller",
    rating: "8.0",
    year: "2024"
  },
  { 
    id: 4, 
    title: "Dark", 
    image: "images/series/dark.webp", 
    genre: "Crime, Drama, Mystery",
    rating: "8.7",
    year: "2020"
  },
  { 
    id: 5, 
    title: "John Wick", 
    image: "images/series/john-wick.webp", 
    genre: "Action, Thriller",
    rating: "7.4",
    year: "2014"
  },
  { 
    id: 6, 
    title: "Peaky Blinders", 
    image: "images/series/peaky-blinders.webp", 
    genre: "Crime, Drama",
    rating: "8.8",
    year: "2017"
  },
  { 
    id: 7, 
    title: "Game of Thrones", 
    image: "images/series/game-of-thrones.webp", 
    genre: "Action, Adventure, Drama",
    rating: "9.2",
    year: "2019"
  },
  { 
    id: 8, 
    title: "Vikings", 
    image: "images/series/vikings.webp", 
    genre: "Action, Adventure, Drama",
    rating: "8.5",
    year: "2020"
  },
  { 
    id: 9, 
    title: "Avengers", 
    image: "images/series/avengers.webp", 
    genre: "Action, Adventure, Sci-Fi",
    rating: "8.4",
    year: "2025"
  },
  { 
    id: 10, 
    title: "Breaking Bad", 
    image: "images/series/breaking-bad.webp", 
    genre: "Crime, Drama, Thriller",
    rating: "9.5",
    year: "2013"
  },
  { 
    id: 11, 
    title: "Prison Break", 
    image: "images/series/prison-break.webp", 
    genre: "Action, Crime, Drama",
    rating: "8.3",
    year: "2017"
  },
  { 
    id: 12, 
    title: "Squid Game", 
    image: "images/series/squid-game.webp", 
    genre: " Action, Crime, Drama",
    rating: "8.3",
    year: "2021"
  },
  { 
    id: 13, 
    title: "The 100", 
    image: "images/series/the-100.webp", 
    genre: "Drama, Mystery, Sci-Fi",
    rating: "7.6",
    year: "2020"
  },
  { 
    id: 1, 
    title: "Joker", 
    image: "images/series/joker.webp", 
    genre: "Crime, Drama, Thriller",
    rating: "8.4",
    year: "2025"
  },
  { 
    id: 2, 
    title: "Money Heist", 
    image: "images/series/money-heist.webp", 
    genre: "Action, Crime, Drama",
    rating: "8.2",
    year: "2021"
  },
  { 
    id: 3, 
    title: "Fast And Furieus", 
    image: "images/series/fast.webp", 
    genre: "Action, Crime, Thriller",
    rating: "8.0",
    year: "2024"
  },
  { 
    id: 4, 
    title: "Dark", 
    image: "images/series/dark.webp", 
    genre: "Crime, Drama, Mystery",
    rating: "8.7",
    year: "2020"
  },
  { 
    id: 5, 
    title: "John Wick", 
    image: "images/series/john-wick.webp", 
    genre: "Action, Thriller",
    rating: "7.4",
    year: "2014"
  },
  { 
    id: 6, 
    title: "Peaky Blinders", 
    image: "images/series/peaky-blinders.webp", 
    genre: "Crime, Drama",
    rating: "8.8",
    year: "2017"
  },
  { 
    id: 7, 
    title: "Game of Thrones", 
    image: "images/series/game-of-thrones.webp", 
    genre: "Action, Adventure, Drama",
    rating: "9.2",
    year: "2019"
  },
  { 
    id: 8, 
    title: "Vikings", 
    image: "images/series/vikings.webp", 
    genre: "Action, Adventure, Drama",
    rating: "8.5",
    year: "2020"
  },
  { 
    id: 9, 
    title: "Avengers", 
    image: "images/series/avengers.webp", 
    genre: "Action, Adventure, Sci-Fi",
    rating: "8.4",
    year: "2025"
  },
  { 
    id: 10, 
    title: "Breaking Bad", 
    image: "images/series/breaking-bad.webp", 
    genre: "Crime, Drama, Thriller",
    rating: "9.5",
    year: "2013"
  },
  { 
    id: 11, 
    title: "Prison Break", 
    image: "images/series/prison-break.webp", 
    genre: "Action, Crime, Drama",
    rating: "8.3",
    year: "2017"
  },
  { 
    id: 12, 
    title: "Squid Game", 
    image: "images/series/squid-game.webp", 
    genre: " Action, Crime, Drama",
    rating: "8.3",
    year: "2021"
  },
  { 
    id: 13, 
    title: "The 100", 
    image: "images/series/the-100.webp", 
    genre: "Drama, Mystery, Sci-Fi",
    rating: "7.6",
    year: "2020"
  }
  
];

// Main component that combines both carousels
export default function MediaDisplay() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // For top channel carousel
  const channelsLogoRef = useRef(null);
  const [index, setIndex] = useState(1);
  const totalChannels = 26;
  const channelWidth = 170 + 40; // width + margin
  
  // For content sections
  const channelsRef = useRef(null);
  const moviesRef = useRef(null);
  const [channelIndex, setChannelIndex] = useState(0);
  const [movieIndex, setMovieIndex] = useState(0);

  useEffect(() => {
    // Top channels carousel effect
    if (channelsLogoRef.current) {
      channelsLogoRef.current.style.transform = `translateX(-${index * channelWidth}px)`;
    }
    
    const topCarouselInterval = setInterval(() => {
      setIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        
        if (channelsLogoRef.current) {
          channelsLogoRef.current.style.transition = "transform 2.7s linear";
          channelsLogoRef.current.style.transform = `translateX(-${newIndex * channelWidth}px)`;
        }
        
        // Reset position after reaching the duplicate set
        if (newIndex >= totalChannels) {
          setTimeout(() => {
            if (channelsLogoRef.current) {
              channelsLogoRef.current.style.transition = "none";
              channelsLogoRef.current.style.transform = `translateX(-${1 * channelWidth}px)`;
            }
          }, 500);
          return 1;
        }
        
        return newIndex;
      });
    }, 2000);
    
    // Content section carousels
    let channelInterval;
    let movieInterval;

    const startChannelScroll = () => {
      channelInterval = setInterval(() => {
        setChannelIndex(prev => {
          const nextIndex = prev + 1;
          if (nextIndex >= channelLogos.length) {
            return 0;
          }
          return nextIndex;
        });
      }, 2000);
    };

    const startMovieScroll = () => {
      movieInterval = setInterval(() => {
        setMovieIndex(prev => {
          const nextIndex = prev + 1;
          if (nextIndex >= movieCovers.length) {
            return 0;
          }
          return nextIndex;
        });
      }, 3000);
    };

    startChannelScroll();
    startMovieScroll();

    // Clean up all intervals on component unmount
    return () => {
      clearInterval(topCarouselInterval);
      clearInterval(channelInterval);
      clearInterval(movieInterval);
    };
  }, []);
  
  return (
    <>
      {/* Content sections with channel and movie carousels */}
      <section className="py-20 bg-gradient-to-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Premium Content at Your <span className="text-iptv-red">Fingertips</span>
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 ml-2">Live TV Channels</h3>
            <div className="carousel-container w-full overflow-hidden relative flex justify-center mb-16">
            <div 
              ref={channelsLogoRef} 
              className="channels-logo flex pt-8 h-[80px] w-full"
            >
              {[...channelLogos, ...channelLogos].map((channel, idx) => (
                <div key={`${channel.id}-${idx}`} className="channel-box flex-none mx-8">
                  <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-0"></div>
                    <img 
                      src={channel.image} 
                      alt={channel.name}
                      loading="lazy" 
                      className="w-full h-full object-cover relative z-10"
                    />
                </div>
              ))}
            </div>
          </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 ml-2">Movies & TV Shows</h3>
            <div className="relative overflow-hidden">
              <motion.div 
                ref={moviesRef}
                className="flex space-x-8 py-2"
                animate={{ x: `-${movieIndex * 331}px` }}
                transition={{ duration: 0.7, ease: "linear" }}
              >
                {movieCovers.concat(movieCovers).map((movie, index) => (
                  <div 
                    key={`${movie.id}-${index}`} 
                    className="relative group flex-none cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredItem(movie.id + 100);
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className={`w-[300px] h-[400px] relative rounded-lg overflow-hidden transition-all duration-300 ${
                      hoveredItem === movie.id + 100 ? 'scale-105' : ''
                    }`}>
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 p-6 w-full">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{movie.year}</span>
                            <span className="text-sm text-red-500">★ {movie.rating}</span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{movie.title}</h4>
                          <p className="text-sm text-gray-400 capitalize">{movie.genre}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <MovieModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          movie={selectedMovie}
        />
      </section>
    </>
  );
}