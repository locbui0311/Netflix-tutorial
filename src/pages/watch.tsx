import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/src/components/Layout';
import Player from '@/src/components/Player';

interface VideoData {
  id: string;
  name: string;
  url: string;
  description: string;
}

const videos: VideoData[] = [
  {
    id: 'video',
    name: 'Big Buck Bunny',
    url: '../data/Video/video.mp4',
    description: 'Phim hoạt hình Big Bunny'
  }
];

const Watch = () => {
  const router = useRouter();
  const video = {
    url: '/videos/video.mp4', // đường dẫn sau khi đã đặt vào public/videos/
    name: 'Video Demo'
  };

  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        <div className="relative w-full">
          <Player 
            videoUrl={video.url}
            title={video.name}
          />
          <div className="absolute top-16 left-4 z-10">
            <button
              onClick={() => router.back()}
              className="text-white hover:text-netflix-red transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Watch; 