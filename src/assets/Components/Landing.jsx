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

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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
    gsap.set(mainCam, { rotation: 10, opacity:0, scale: 1.8 })

    // Animate entrance
    tl.to("nav", { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to(".left", { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .to(".hero h1", { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=0.7")
      .to(mainCam, { rotation: 35, opacity:1, duration: 0.8, ease: "power2.out" }, "-=0.5")

    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top 30%",
        end: "45% bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          
          let yPosition, rotation, scale
          
          if (progress <= 0.33) {
            const pageProgress = progress / 0.33
            const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
            
            yPosition = 0 
            rotation = 35 + (easedProgress * 15) 
            scale = 1 + (easedProgress * 0.1) 
            
          } else if (progress <= 0.66) {
            const pageProgress = (progress - 0.33) / 0.33
            const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
            
            yPosition = easedProgress * (window.innerHeight * 0.8) 
            rotation = 50 + (easedProgress * 40) 
            scale = 1.1 + (easedProgress * 0.4) 
            
          } else {
            const pageProgress = (progress - 0.66) / 0.34
            const easedProgress = pageProgress * pageProgress * (3 - 2 * pageProgress)
            
            yPosition = (window.innerHeight * 0.8) + (easedProgress * (window.innerHeight * 0.6)) 
            rotation = 90 + (easedProgress * -(40)) 
            scale = 1.5 - (easedProgress * 0.3) 
            
            const xPosition = -(easedProgress * (window.innerWidth * 0.3)) 
            
            gsap.set(mainCam, {
              x: xPosition, 
              y: yPosition,
              rotation: rotation,
              scale: scale,
              ease: "none"
            })
            return 
          }
          
          gsap.set(mainCam, {
            x: 0,
            y: yPosition,
            rotation: rotation,
            scale: scale,
            ease: "none" 
          })
        }
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "50% bottom", 
        end: "100% bottom", 
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const easedProgress = progress * progress * (3 - 2 * progress)
          
          const startX = -(window.innerWidth * 0.3) 
          const startY = window.innerHeight * 1.4 
          const startRotation = 50 
          const startScale = 1.2 
          
          const targetX = -50 
          const targetY = window.innerHeight * 3.88 
          const targetRotation = 0 
          const targetScale = 0.9 
          
        
          gsap.set(mainCam, {
            x: startX + (easedProgress * (targetX - startX)),
            y: startY + (easedProgress * (targetY - startY)),
            rotation: startRotation + (easedProgress * (targetRotation - startRotation)),
            scale: startScale + (easedProgress * (targetScale - startScale)),
            ease: "none"
          })
        }
      }
    })


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      lenis.destroy()
    }
  }, [])
  return (
    <>
    <div className='landing-page font-[bystander] w-full h-screen bg-[#F3E4D3] flex flex-col md:flex-row'>
        <div className="left w-full md:w-[5%] border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 my-2 md:my-4">
            <div className="icons flex flex-row md:flex-col items-center justify-center md:justify-start gap-6 py-4 md:py-0">
                <FontAwesomeIcon icon={faBars} className="text-xl md:text-2xl text-zinc-800 cursor-pointer hover:text-[#9C3B01]" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl md:text-2xl text-zinc-800 cursor-pointer hover:text-[#9C3B01]" />
             
            </div>
        </div>
        <div className="right w-full md:w-[95%] relative">
            <div ref={mainCamRef} className="mainCam h-82 w-132 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-35 z-20">
                <img src={MainCam} className="h-full w-full object-cover" alt="" />
            </div>
            <nav className='h-[10%] md:h-[10%]'>
                <div className="contain flex flex-col md:flex-row justify-between md:items-center h-full w-full px-4 md:px-12 pt-2 md:pt-0 mt-1">
                <div className="logo h-12 md:h-16 w-16 md:w-22 mb-2 md:mb-0">
                    <img src={Logo} className="h-full w-full object-contain" alt="" />
                </div>
                <div className="buy bg-[#9C3B01] text-center flex items-center justify-center h-[35px] md:h-[45px] w-full md:w-auto">
                    <button className='text-center px-6 md:px-12 text-white text-sm md:text-base'>Buy Now</button>
                </div>
                </div>
            </nav>
            <div className="hero relative h-[70%] md:h-[70%] w-full flex items-center justify-center py-38">
                <div className="container flex flex-col items-center justify-center px-4 md:px-0">
                    <h1 className='text-[80px] sm:text-[150px] md:text-[250px] lg:text-[300px] xl:text-[300px] tracking-tight text-[#80320b] font-bold text-center uppercase whitespace-wrap leading-[60px] sm:leading-[120px] md:leading-[200px] lg:leading-[240px] xl:leading-[270px]'>unlimited Releases ipa</h1>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Landing