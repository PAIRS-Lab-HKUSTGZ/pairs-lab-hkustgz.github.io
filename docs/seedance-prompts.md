# Seedance prompts for the homepage media slots

Use one prompt per clip. Recommended output: `16:9`, `6-8 seconds`, `24 fps`, realistic motion, and a clean first/last frame for a seamless loop. Keep the clips silent; the website uses them as muted autoplay media.

## 01 — Open-world sensing

```text
A realistic research-lab video of a compact mobile robot moving slowly through an open indoor-outdoor transition space: glass doors, changing sunlight, a few static obstacles, and subtle dust in the air. The robot uses a visible camera and depth sensor to build a stable spatial understanding while the environment changes from bright sunlight to shade. Show restrained sensor overlays as faint cyan point traces that remain attached to real surfaces, never as a full-screen HUD. Camera movement: slow lateral tracking shot at robot height, then a gentle half-orbit. Motion must be physically plausible, stable, and repeatable. Mood: mature university robotics research, deep graphite and navy tones with soft cyan highlights. No people looking at camera, no logos, no text, no labels, no watermark, no fantasy city, no exaggerated neon, no impossible robot movement, no floating interface panels. End on a composition close to the opening frame for looping.
```

## 02 — Human understanding

```text
A realistic research-lab video showing one researcher and a mobile robotic assistant sharing a workspace. The researcher reaches toward an object, pauses, changes direction, and the robot visibly adjusts its gaze and position to maintain a safe distance and prepare to help. Focus on body motion, hand intent, proxemics, and respectful collaboration rather than a product demonstration. Add only a very subtle cyan skeleton trace around the human joints and a few quiet motion vectors, perfectly aligned to the body and never covering the face. Camera movement: a calm medium-wide dolly from left to right with natural parallax. Lighting: soft window light mixed with cool laboratory fill, editorial and trustworthy. No logos, no text, no labels, no watermark, no exaggerated gestures, no sci-fi holograms, no duplicate limbs, no distorted hands, no unsafe contact. End with the researcher and robot returning to a neutral pose for a seamless loop.
```

## 03 — Long-horizon mobile manipulation

```text
A realistic, continuous research demonstration of a compact mobile manipulator completing a short sequence in a tidy laboratory: navigate around a workbench, align with a tray, grasp one small object, place it accurately, and recover smoothly after a tiny change in the object's position. The sequence should feel like one coherent long-horizon task with clear cause and effect, not a montage. Show the robot's base, arm, gripper, and sensors with mechanically accurate motion and believable contact. Add a very restrained cyan trajectory line near the floor and a small fading path behind the gripper; no large HUD or explanatory graphics. Camera movement: slow three-quarter follow shot, keeping the robot fully in frame. Mood: dependable physical intelligence, graphite, navy, brushed metal, soft cyan accents. No logos, no text, no labels, no watermark, no impossible grasping, no teleporting objects, no extra arms, no dramatic cinematic explosions, no fantasy environment. End near the starting position for looping.
```

## Shared negative prompt

```text
No text, no subtitles, no labels, no logos, no watermark, no UI panels, no fake paper titles, no invented metrics, no recognizable historical project demo, no RadarOcc references, no generic sci-fi city, no excessive neon, no glitch effects, no teleportation, no temporal flicker, no duplicated people or robot parts, no deformed hands, no unsafe human-robot contact.
```
