import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/src/components/Layout';
import Player from '@/src/components/Player';

const Watch = () => {
  const router = useRouter();
  const { videoId, title } = router.query;
  const demoVideos: Record<string, string> = {
    'bbb': 'https://www.w3schools.com/html/mov_bbb.mp4',
    'sample': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  };
  const videoUrl = demoVideos[videoId as string] || demoVideos['bbb'];
  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        <div className="relative w-full">
          <Player 
           videoUrl={videoUrl}
           title={title as string}
          />
          <div className="absolute top-4 left-4 z-10">
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