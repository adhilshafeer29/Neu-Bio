import { useEffect, useRef } from 'react'

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Autoplay failed", e));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Video background - behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/Video/Video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Full screen image - on top of video */}
      <img
        src="/Images/img1.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
    </section>
  )
}

export default HeroSection
