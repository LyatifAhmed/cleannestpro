export default function Head() {
  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CleanNestPro" />

      {/* Splash screens */}
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-2048x2732.png"
        media="(device-width: 1024px) and (device-height: 1366px)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-1668x2388.png"
        media="(device-width: 834px) and (device-height: 1194px)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-1536x2048.png"
        media="(device-width: 768px) and (device-height: 1024px)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-1125x2436.png"
        media="(device-width: 375px) and (device-height: 812px)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-1170x2532.png"
        media="(device-width: 390px) and (device-height: 844px)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/apple-splash-1284x2778.png"
        media="(device-width: 428px) and (device-height: 926px)"
      />
    </>
  );
}