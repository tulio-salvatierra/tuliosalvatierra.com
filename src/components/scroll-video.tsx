'use client'

import { useEffect, useRef } from 'react'

interface ScrollVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
}

export default function ScrollVideo({ src, className, style }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Load video metadata first
    video.load()

    const handleLoadedMetadata = () => {
      video.currentTime = 0
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    const handleScroll = () => {
      if (!video || !container || !video.duration) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate when video enters and exits viewport
      const videoTop = rect.top
      const videoBottom = rect.top + rect.height
      
      // Start scrubbing when top of video enters viewport
      // End scrubbing when bottom of video exits viewport
      const scrollStart = 0
      const scrollEnd = windowHeight + rect.height
      const scrollProgress = windowHeight - videoTop
      
      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, scrollProgress / scrollEnd))
      
      // Map progress to video time with smooth easing
      const easedProgress = progress * progress * (3 - 2 * progress) // Smoothstep easing
      video.currentTime = easedProgress * video.duration
    }

    // Use requestAnimationFrame for smooth updates
    let rafId: number | null = null
    const updateVideo = () => {
      handleScroll()
      rafId = requestAnimationFrame(updateVideo)
    }

    // Start updating when video is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateVideo()
          } else {
            if (rafId !== null) {
              cancelAnimationFrame(rafId)
              rafId = null
            }
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '50% 0px 50% 0px', // Start earlier, end later
      }
    )

    observer.observe(container)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      observer.disconnect()
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [src])

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        className={className}
        style={style}
      />
    </div>
  )
}

