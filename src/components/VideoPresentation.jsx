import React, { useEffect, useRef, useState } from "react";

export default function VideoPresentation() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const resetVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.load();
    video.removeAttribute("controls");
    setPlaying(false);
  };

  const onPlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        video.setAttribute("controls", "controls");
        setPlaying(true);
      } catch {
        // autoplay/interaction restrictions
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("ended", resetVideo);
    return () => video.removeEventListener("ended", resetVideo);
  }, []);

  return (
    <section className="video-presentation">
      <div className="video-presentation__bg"></div>

      <div className="container video-presentation__container">
        <div className="video-presentation__header">
          <h2 className="video-presentation__title">
            Straight from the <br /> field to your cup.
          </h2>
          <p className="video-presentation__subtitle">Watch our amazing video tutorial.</p>
        </div>

        <div className="video-presentation__content">
          <div className="video-wrapper">
            <video
              id="promoVideo"
              ref={videoRef}
              className="video-wrapper__poster"
              poster="/video/video-preview.mp4"
            >
              <source src="/video/video-preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              id="playBtn"
              className="video-wrapper__play-btn"
              aria-label="Play video"
              onClick={onPlayClick}
              style={{
                opacity: playing ? 0 : 1,
                pointerEvents: playing ? "none" : "auto",
              }}
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}