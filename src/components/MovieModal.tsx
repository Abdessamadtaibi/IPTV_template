
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    title: string;
    image: string;
    genre: string;
    rating: string;
    year: string;
  } | null;
}

const MovieModal = ({ isOpen, onClose, movie }: MovieModalProps) => {
  if (!movie) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{movie.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-iptv-gray">{movie.year}</span>
                <span className="text-sm text-iptv-red">★ {movie.rating}</span>
              </div>
              <p className="text-sm text-iptv-gray capitalize">Genre: {movie.genre}</p>
              <div className="space-y-2">
                <h3 className="font-semibold">Description</h3>
                <p className="text-sm text-gray-300">
                  This is a sample description for {movie.title}. In a real application, 
                  this would contain the actual movie synopsis and details.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Cast</h3>
                <p className="text-sm text-gray-300">
                  Sample cast members would be listed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;
