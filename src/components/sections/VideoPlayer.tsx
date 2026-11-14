import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { Icon } from '../ui/Icon';

const formatTime = (s: number) =>
  Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00';

interface Props {
  src: string;
  title: string;
}

export function VideoPlayer({ src, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fullscreen = () => {
    const el = playerRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  const seekTo = (time: number) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    v.currentTime = Math.max(0, Math.min(duration, time));
  };

  const onProgressPointer = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    seekTo(((e.clientX - rect.left) / rect.width) * duration);
  };

  const onProgressKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5 }[e.key];
    if (step !== undefined) {
      e.preventDefault();
      seekTo(current + step);
    } else if (e.key === 'Home') {
      e.preventDefault();
      seekTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      seekTo(duration);
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="video-player" ref={playerRef}>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          preload="metadata"
          playsInline
          aria-label={title}
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="video-overlay"
          style={{ opacity: playing ? 0 : 1, pointerEvents: playing ? 'none' : 'auto' }}
          onClick={togglePlay}
        >
          <button type="button" className="big-play-btn" aria-label="Play video" tabIndex={playing ? -1 : 0}>
            <Icon name="play" />
          </button>
        </div>
      </div>

      <div className="video-controls-bar">
        <div className="vc-left">
          <button type="button" className="vc-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            <Icon name={playing ? 'pause' : 'play'} />
          </button>
          <span className="vc-time">{formatTime(current)}</span>
          <span className="vc-sep" aria-hidden="true">
            /
          </span>
          <span className="vc-time">{formatTime(duration)}</span>
        </div>

        <div
          className="vc-progress"
          role="slider"
          tabIndex={0}
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(current)}
          aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
          onPointerDown={onProgressPointer}
          onKeyDown={onProgressKey}
        >
          <div className="vc-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="vc-right">
          <button type="button" className="vc-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            <Icon name={muted ? 'mute' : 'volume'} />
          </button>
          <button type="button" className="vc-btn" onClick={fullscreen} aria-label="Toggle fullscreen">
            <Icon name="expand" />
          </button>
          <a href={src} download className="vc-btn" aria-label="Download video">
            <Icon name="download" />
          </a>
        </div>
      </div>
    </div>
  );
}
