import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div
      style={{
        overflow: 'hidden',
        paddingBottom: '56.25%',
        position: 'relative',
        height: 0,
        width: '100%',
      }}
    >
      <iframe
        src={videoUrl}
        style={{
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded YouTube Video'
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
