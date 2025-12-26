import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx'

export default function VideoBackground() {
  return (
    <>
      <ScrollyVideo
        src="/hero.mp4"
        scrollyVideoContainer={<div className="fixed inset-0 w-full h-full object-cover z-0" />}
      />
      {/* Dark Overlay for entire application */}
      <div className="fixed inset-0 bg-black/60 z-10"></div>
    </>
  )
}

