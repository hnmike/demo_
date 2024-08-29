import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const AnimeInfoModal = ({ anime, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{anime.title}</DialogTitle>
          <DialogDescription>Detailed information about the anime</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover rounded-md" />
          <p><strong>Genre:</strong> {anime.genre}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Status:</strong> {anime.status}</p>
          <p><strong>Rating:</strong> {anime.rating}</p>
          <p><strong>Description:</strong> {anime.description || 'No description available.'}</p>
        </div>
        <DialogClose asChild>
          <Button type="button" variant="secondary">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AnimeInfoModal;