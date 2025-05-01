[...document.querySelectorAll('iframe')].forEach((frame, i) => {
  try {
    const vids = frame.contentDocument?.querySelectorAll('video') || [];
    console.log(`Iframe ${i}: found ${vids.length} video(s)`);

    if (vids.length > 0) {
      const video = vids[0];

      // Unlock rate control
      video.onratechange = null;
      Object.defineProperty(video, 'onratechange', {
        set: () => {},
        get: () => null
      });

      // Set playback speed
      video.playbackRate = 3;

      console.log(`✅ Playback rate set to 3x in iframe ${i}`);
    }
  } catch (e) {
    console.warn(`⚠️ Iframe ${i}: Cross-origin - cannot inspect`, e);
  }
});
