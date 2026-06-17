# Project Design Standards — Read Before Any Build

## Non-Negotiable Rules

1. NEVER use placeholder gradients where real 
   photography has been provided. If images are 
   given, save them to assets/images/ and use them 
   directly via img tags or CSS background-image. 
   A gradient is not an acceptable substitute for 
   a real photo.

2. If a prompt requests a real interactive 3D object 
   (Three.js, WebGL), it must be visibly present and 
   functional in the final build. A CSS animation or 
   a text fade is not a substitute for an actual 3D 
   rendered object. If something cannot be built as 
   specified, STOP and say so explicitly before 
   declaring the task complete, do not silently 
   downgrade the deliverable and call it done.

3. If a prompt requests scroll-driven animation tied 
   to ScrollTrigger scrub, the animation progress 
   must be mathematically tied to scroll position, 
   reversible on scroll up, and testable by manually 
   scrolling back and forth. A one-time fade-in on 
   page load is not scroll-driven animation.

4. Before reporting a task as complete, re-read the 
   original prompt line by line and confirm each 
   specific requirement was actually implemented in 
   code, not just conceptually addressed. List each 
   requirement and confirm BUILT or NOT BUILT before 
   declaring the task finished.

5. Never reduce the scope of a prompt due to 
   complexity without explicitly flagging it first. 
   If a 3D scroll sequence is technically difficult, 
   say so and ask before substituting something 
   simpler.

6. Match the existing site's actual visual quality 
   bar. Before starting any new build, review the 
   most recent completed demo or page in this repo 
   to calibrate expected quality. If the new output 
   would look noticeably more basic than existing 
   work, stop and flag it rather than shipping a 
   downgrade.

7. When real reference screenshots or source website 
   content are provided, the final build must visibly 
   reflect that reference, real images used, real 
   copy patterns matched, real layout structure 
   considered. Generic stock-feeling output when a 
   specific real reference was given is a failure.
