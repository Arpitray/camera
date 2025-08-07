import React, { useEffect, useRef } from 'react'
import Logo from '../unnamed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCamera, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Cam from '../cam.png'
import MainCam from '../maincam.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)



function Landing() {
  const mainCamRef = useRef(null)

  const animationConfig = {
    screen1: { yMove: 0, rotation: 35 },
    screen2: { yMove: 100, rotation: -30 },
    screen3: { yMove: 200, rotation: 180 }
  }

  useEffect(() => {
    const mainCam = mainCamRef.current

    // Responsive scale factor for iPad and mobile
    const getResponsiveScale = () => {
      const width = window.innerWidth
      if (width >= 1024) return 1 // Desktop (lg+)
      if (width >= 768) return 0.75 // iPad (md)
      return 0.6 // Mobile (sm and below)
    }

    const responsiveScale = getResponsiveScale()

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
      syncTouch: true,
      normalizeWheel: true,
    })

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // ENTRANCE ANIMATIONS - When user enters the site
    const tl = gsap.timeline()
    
    // Set initial states
    gsap.set("nav", { y: -100, opacity: 0 })
    gsap.set(".left", { x: -100, opacity: 0 })
    gsap.set(".hero h1", { scale: 0, opacity: 0 })
    gsap.set(mainCam, { rotation: 5, opacity:0, scale: 1.8 * responsiveScale })

    // Animate entrance
    tl.to("nav", { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to(".left", { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .to(".hero h1", { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=0.7")
      .to(mainCam, { rotation: 40, opacity:1, duration: 0.8, ease: "power2.out" }, "-=0.5")

    // FIRST SCROLLTRIGGER - Landing to Third Page (with device-specific timelines)
    const isDesktop = window.innerWidth >= 1024
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
    const isMobile = window.innerWidth < 768

    if (isDesktop) {
      // DESKTOP FIRST SCROLLTRIGGER - Original logic (unchanged)
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top 40%",
          end: "43% bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            let yPosition, rotation, scale
            
            if (progress <= 0.33) {
              const pageProgress = progress / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = 0 
              rotation = 35 + (easedProgress * 15) 
              scale = (1 + (easedProgress * 0.1))
              
            } else if (progress <= 0.66) {
              const pageProgress = (progress - 0.33) / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = easedProgress * (window.innerHeight * 0.8) 
              rotation = 50 + (easedProgress * 40) 
              scale = (1.1 + (easedProgress * 0.2))
              
            } else {
              const pageProgress = (progress - 0.66) / 0.34
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = (window.innerHeight * 0.8) + (easedProgress * (window.innerHeight * 0.7)) 
              rotation = 90 + (easedProgress * -(40)) 
              scale = (1.3 - (easedProgress * 0.3))
              
              const xPosition = -(easedProgress * (window.innerWidth * 0.3)) 
              
              const shadowIntensity = 0.15 + (progress * 0.25)
              const shadowBlur = 15 + (scale * 20)
              const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 15
              const shadowOffsetY = 10 + (yPosition * 0.01)
              
              gsap.set(mainCam, {
                x: xPosition, 
                y: yPosition,
                rotation: rotation,
                scale: scale,
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
              return 
            }
            
            const shadowIntensity = 0.15 + (progress * 0.25)
            const shadowBlur = 15 + (scale * 20)
            const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 15
            const shadowOffsetY = 10 + (yPosition * 0.01)
            
            gsap.set(mainCam, {
              x: 0,
              y: yPosition,
              rotation: rotation,
              scale: scale,
              filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
              ease: "none" 
            })
          }
        }
      })
    } else if (isTablet) {
      // IPAD FIRST SCROLLTRIGGER - Separate iPad logic
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top 50%",
          end: "60% bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            let yPosition, rotation, scale
            
            if (progress <= 0.33) {
              const pageProgress = progress / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = 0 
              rotation = 35 + (easedProgress * 15) 
              scale = (1 + (easedProgress * 0.1)) * responsiveScale 
              
            } else if (progress <= 0.66) {
              const pageProgress = (progress - 0.33) / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = easedProgress * (window.innerHeight * 0.8) 
              rotation = 50 + (easedProgress * 40) 
              scale = (1.1 + (easedProgress * 0.2)) * responsiveScale 
              
            } else {
              const pageProgress = (progress - 0.66) / 0.34
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = (window.innerHeight * 0.8) + (easedProgress * (window.innerHeight * 0.7)) 
              rotation = 90 + (easedProgress * -(40)) 
              scale = (1.3 - (easedProgress * 0.3)) * responsiveScale 
              
              const xPosition = -(easedProgress * (window.innerWidth * 0.3)) 
              
              const shadowIntensity = 0.15 + (progress * 0.25)
              const shadowBlur = 15 + (scale * 20)
              const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 15
              const shadowOffsetY = 10 + (yPosition * 0.01)
              
              gsap.set(mainCam, {
                x: xPosition, 
                y: yPosition,
                rotation: rotation,
                scale: scale,
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
              return 
            }
            
            const shadowIntensity = 0.15 + (progress * 0.25)
            const shadowBlur = 15 + (scale * 20)
            const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 15
            const shadowOffsetY = 10 + (yPosition * 0.01)
            
            gsap.set(mainCam, {
              x: 0,
              y: yPosition,
              rotation: rotation,
              scale: scale,
              filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
              ease: "none" 
            })
          }
        }
      })
    } else if (isMobile) {
      // MOBILE FIRST SCROLLTRIGGER - Separate mobile logic
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top 50%",
          end: "35% bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            let yPosition, rotation, scale
            
            if (progress <= 0.33) {
              const pageProgress = progress / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = 0 
              rotation = 35 + (easedProgress * 10) 
              scale = (1 + (easedProgress * 0.05)) * responsiveScale 
              
            } else if (progress <= 0.66) {
              const pageProgress = (progress - 0.33) / 0.33
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = easedProgress * (window.innerHeight * 0.6) 
              rotation = 45 + (easedProgress * 30) 
              scale = (1.05 + (easedProgress * 0.15)) * responsiveScale 
              
            } else {
              const pageProgress = (progress - 0.66) / 0.34
              const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
              
              yPosition = (window.innerHeight * 0.6) + (easedProgress * (window.innerHeight * 0.5)) 
              rotation = 75 + (easedProgress * -(30)) 
              scale = (1.2 - (easedProgress * 0.2)) * responsiveScale 
              
              const xPosition = -(easedProgress * (window.innerWidth * 0.25)) 
              
              const shadowIntensity = 0.12 + (progress * 0.2)
              const shadowBlur = 12 + (scale * 15)
              const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 12
              const shadowOffsetY = 8 + (yPosition * 0.008)
              
              gsap.set(mainCam, {
                x: xPosition, 
                y: yPosition,
                rotation: rotation,
                scale: scale,
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
              return 
            }
            
            const shadowIntensity = 0.12 + (progress * 0.2)
            const shadowBlur = 12 + (scale * 15)
            const shadowOffsetX = Math.sin(rotation * Math.PI / 180) * 12
            const shadowOffsetY = 8 + (yPosition * 0.008)
            
            gsap.set(mainCam, {
              x: 0,
              y: yPosition,
              rotation: rotation,
              scale: scale,
              filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
              ease: "none" 
            })
          }
        }
      })
    }

    // SECOND SCROLLTRIGGER - Third Page to Fourth Page (existing device-specific timelines)
    if (isDesktop) {
      // DESKTOP SCROLLTRIGGER - Original logic (unchanged)
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "43% bottom",
          end: "85% bottom", 
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            const startX = -(window.innerWidth * 0.3) 
            const startY = window.innerHeight * 1.5 
            const startRotation = 50 
            const startScale = 1
            
            const middleX = 0
            const middleY = window.innerHeight * 2.6
            const middleRotation = 0
            const middleScale = 1.4
            
            const targetX = -50
            const targetY = window.innerHeight * 3.9
            const targetRotation = 0 
            const targetScale = 0.9
            
            if (progress <= 0.5) {
              const phaseProgress = progress / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.4 + (phaseProgress * 0.2)
              const shadowBlur = 25 + (middleScale * 15)
              const shadowOffsetX = Math.sin(startRotation * (1 - easedProgress) * Math.PI / 180) * 20
              const shadowOffsetY = 15 + (easedProgress * 10)
              
              gsap.set(mainCam, {
                x: startX + (easedProgress * (middleX - startX)),
                y: startY + (easedProgress * (middleY - startY)),
                rotation: startRotation + (easedProgress * (middleRotation - startRotation)),
                scale: startScale + (easedProgress * (middleScale - startScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            } else {
              const phaseProgress = (progress - 0.5) / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.6 - (phaseProgress * 0.2)
              const shadowBlur = 40 - (phaseProgress * 15)
              const shadowOffsetX = -10 + (phaseProgress * -5)
              const shadowOffsetY = 25 + (phaseProgress * 10)
              
              gsap.set(mainCam, {
                x: middleX + (easedProgress * (targetX - middleX)),
                y: middleY + (easedProgress * (targetY - middleY)),
                rotation: middleRotation + (easedProgress * (targetRotation - middleRotation)),
                scale: middleScale + (easedProgress * (targetScale - middleScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            }
          }
        }
      })
    } else if (isTablet) {
      // IPAD SCROLLTRIGGER - Existing iPad logic (unchanged)
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "60% bottom",
          end: "95% bottom", 
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            const startX = -(window.innerWidth * 0.3) 
            const startY = window.innerHeight * 1.5
            const startRotation = 50 
            const startScale = 1 * responsiveScale
            
            const middleX = 0
            const middleY = window.innerHeight * 2
            const middleRotation = 0
            const middleScale = 1.4 * responsiveScale
            
            const targetX = window.innerWidth * 0.18
            const targetY = window.innerHeight * 2.57
            const targetRotation = 0 
            const targetScale = 0.9 * responsiveScale 
            
            if (progress <= 0.5) {
              const phaseProgress = progress / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.4 + (phaseProgress * 0.2)
              const shadowBlur = 25 + (middleScale * 15)
              const shadowOffsetX = Math.sin(startRotation * (1 - easedProgress) * Math.PI / 180) * 20
              const shadowOffsetY = 15 + (easedProgress * 10)
              
              gsap.set(mainCam, {
                x: startX + (easedProgress * (middleX - startX)),
                y: startY + (easedProgress * (middleY - startY)),
                rotation: startRotation + (easedProgress * (middleRotation - startRotation)),
                scale: startScale + (easedProgress * (middleScale - startScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            } else {
              const phaseProgress = (progress - 0.5) / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.6 - (phaseProgress * 0.2)
              const shadowBlur = 40 - (phaseProgress * 15)
              const shadowOffsetX = -10 + (phaseProgress * -5)
              const shadowOffsetY = 25 + (phaseProgress * 10)
              
              gsap.set(mainCam, {
                x: middleX + (easedProgress * (targetX - middleX)),
                y: middleY + (easedProgress * (targetY - middleY)),
                rotation: middleRotation + (easedProgress * (targetRotation - middleRotation)),
                scale: middleScale + (easedProgress * (targetScale - middleScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            }
          }
        }
      })
    } else if (isMobile) {
      // MOBILE SCROLLTRIGGER - Separate logic for mobile only
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "35% bottom",
          end: "75% bottom", 
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            
            const startX = -(window.innerWidth * 0.25) 
            const startY = window.innerHeight * 1.1 
            const startRotation = 45 
            const startScale = 1 * responsiveScale
            
            const middleX = 0
            const middleY = window.innerHeight * 2.0
            const middleRotation = 0
            const middleScale = 1.2 * responsiveScale
            
            const targetX = 0
            const targetY = window.innerHeight * 3.79
            const targetRotation = 0 
            const targetScale = 1.2 * responsiveScale 
            
            if (progress <= 0.5) {
              const phaseProgress = progress / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.3 + (phaseProgress * 0.2)
              const shadowBlur = 20 + (middleScale * 10)
              const shadowOffsetX = Math.sin(startRotation * (1 - easedProgress) * Math.PI / 180) * 15
              const shadowOffsetY = 12 + (easedProgress * 8)
              
              gsap.set(mainCam, {
                x: startX + (easedProgress * (middleX - startX)),
                y: startY + (easedProgress * (middleY - startY)),
                rotation: startRotation + (easedProgress * (middleRotation - startRotation)),
                scale: startScale + (easedProgress * (middleScale - startScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            } else {
              const phaseProgress = (progress - 0.5) / 0.5
              const easedProgress = phaseProgress * phaseProgress * (3 - 2 * phaseProgress)
              
              const shadowIntensity = 0.5 - (phaseProgress * 0.1)
              const shadowBlur = 30 - (phaseProgress * 10)
              const shadowOffsetX = -5 + (phaseProgress * -3)
              const shadowOffsetY = 20 + (phaseProgress * 8)
              
              gsap.set(mainCam, {
                x: middleX + (easedProgress * (targetX - middleX)),
                y: middleY + (easedProgress * (targetY - middleY)),
                rotation: middleRotation + (easedProgress * (targetRotation - middleRotation)),
                scale: middleScale + (easedProgress * (targetScale - middleScale)),
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}))`,
                ease: "none"
              })
            }
          }
        }
      })
    }


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      lenis.destroy()
    }
  }, [])
  return (
    <>
    <div className='landing-page font-[bystander] w-full bg-[#F3E4D3] flex flex-col md:flex-row'>
        <div className="left w-full md:w-[8%] lg:w-[5%] border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 my-2 md:my-4">
            <div className="icons flex flex-row md:flex-col items-center justify-center md:justify-start gap-4 md:gap-6 py-3 md:py-4 lg:py-0">
                <FontAwesomeIcon icon={faBars} className="text-lg md:text-xl lg:text-2xl text-zinc-800 cursor-pointer hover:text-[#9C3B01]" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg md:text-xl lg:text-2xl text-zinc-800 cursor-pointer hover:text-[#9C3B01]" />
             
            </div>
        </div>
        <div className="right w-full md:w-[92%] lg:w-[95%] relative">
            <div ref={mainCamRef} className="mainCam h-64 mt-20 lg:mt-0 w-100 md:h-72 md:w-96 lg:h-82 lg:w-132 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-35 z-20">
                <img src={MainCam} className="h-full w-full object-cover" alt="" />
            </div>
            <nav className='h-[12%] md:h-[10%]'>
                <div className="contain flex flex-col md:flex-row justify-between md:items-center h-full w-full px-3 md:px-8 lg:px-12 pt-2 md:pt-0 mt-1">
                <div className="logo h-10 md:h-12 lg:h-16 w-12 md:w-16 lg:w-22 mb-2 md:mb-0">
                    <img src={Logo} className="h-full w-full object-contain" alt="" />
                </div>
                <div className="buy bg-[#9C3B01] text-center flex items-center justify-center h-[32px] md:h-[38px] lg:h-[45px] w-full md:w-auto">
                    <button className='text-center px-4 md:px-8 lg:px-12 text-white text-xs md:text-sm lg:text-base'>Buy Now</button>
                </div>
                </div>
            </nav>
            <div className="hero relative h-[68%] md:h-[70%] w-full flex items-center justify-center py-20 md:py-32 lg:py-38">
                <div className="container flex flex-col items-center justify-center px-4 md:px-0">
                    <h1 className='text-[60px] sm:text-[100px] md:text-[180px] lg:text-[250px] xl:text-[300px] tracking-tight text-[#80320b] font-bold text-center uppercase whitespace-wrap leading-[45px] sm:leading-[80px] md:leading-[150px] lg:leading-[200px] xl:leading-[270px]'>unlimited Releases ipa</h1>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Landing