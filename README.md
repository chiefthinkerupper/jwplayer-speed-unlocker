# jwplayer-speed-unlocker
Unlock JW Player playback speed restrictions (e.g., on Keep Me Certified) with a one-click bookmarklet.

# 🔓 JWPlayer Speed Unlocker (Keep Me Certified Compatible)

A simple script and bookmarklet to bypass JW Player's forced playback speed restrictions (e.g., 1x max) used by platforms like [Keep Me Certified](https://nj.keepmecertified.com/).

## 🚀 Features

- Automatically detects which `<iframe>` contains the `<video>` element
- Removes JavaScript restrictions (`onratechange`)
- Sets video playback to `3x` speed (or any value)
- Easy-to-use bookmarklet
- No external dependencies

---

## 💡 Use Case

This is especially useful for:
- Online real estate courses
- Corporate training portals
- LMS platforms using JWPlayer with forced 1x speed

---

## 📦 Installation

### 🔗 Method 1: Bookmarklet

1. Copy the [bookmarklet script](bookmarklet/boost-speed.bookmarklet.js).
2. Create a new browser bookmark.
3. In the **URL** field, paste the entire script (starting with `javascript:`).
4. Click it while the video page is open and playing.

### 🧪 Method 2: DevTools Console

Paste the script in [src/detect-and-unlock-speed.js](src/detect-and-unlock-speed.js) into your browser's DevTools Console on the video page.

---

## 📜 Bookmarklet Code (1-Liner)

```javascript
javascript:(function(){[...document.querySelectorAll('iframe')].forEach((frame,i)=>{try{const vids=frame.contentDocument?.querySelectorAll('video')||[];console.log(`Iframe ${i}: found ${vids.length} video(s)`);if(vids.length>0){const video=vids[0];video.onratechange=null;Object.defineProperty(video,'onratechange',{set:()=>{},get:()=>null});video.playbackRate=3;console.log(`✅ Playback rate set to 3x in iframe ${i}`);}}catch(e){console.warn(`⚠️ Iframe ${i}: Cross-origin - cannot inspect`);}});})();
