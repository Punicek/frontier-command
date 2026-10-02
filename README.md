# Frontier Command

2D real-time strategy game currently in development.

## Test Build

Frontier Command is currently available as an early Windows test build.

The current tester version is **Alpha v0.9.4**. Approved testers receive access credentials privately from the developer. This repository does not contain those credentials or the game download.

## Official website

A responsive landing page built with plain HTML, CSS and JavaScript. No build step, package manager, analytics or advertising services are required.

Planned GitHub Pages address: **https://punicek.github.io/frontier-command/**

### Website files

- `index.html`: hero, Alpha notice, gameplay features, real screenshot gallery, development video, current development, private test and tester information.
- `styles.css`: dark navy/cyan styling, responsive layouts and reduced-motion support.
- `script.js`: mobile navigation, accessible screenshot dialog and click-to-load official YouTube embed.
- `assets/`: supplied screenshots converted to WebP, supplied logo and favicons.
- `.nojekyll`: serve the static website directly.

Screenshots are actual gameplay supplied by the developer. Web copies retain their original composition; conversion does not add or invent gameplay. Branding uses the supplied FC emblem.

### Preview locally

From this repository folder run:

```sh
python -m http.server 8000
```

Open **http://localhost:8000/**. Stop the server with Ctrl+C. Opening `index.html` directly also works for most of the page; HTTP is recommended for testing.

### Enable GitHub Pages

1. Add these website files and `assets/` to the root of the existing `Punicek/frontier-command` repository on `main`. Keep any unrelated existing content. This README expands the original introduction.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Source → Deploy from a branch**.
4. Select **main** and **/ (root)**, then **Save**.
5. Wait for deployment and open **https://punicek.github.io/frontier-command/**. Check the gallery, video and download links.

Paths are relative so the site works under the `/frontier-command/` project subpath. No custom domain or workflow is required. If a custom domain is added later, update the canonical and Open Graph URLs in `index.html`.

### Private tester download

Both DOWNLOAD TEST BUILD buttons open the supplied external Proton Drive URL. Password protection stays on Proton Drive. No access password is stored here, and no game executable/archive is hosted here.

### Video and privacy

The YouTube player loads only after the viewer presses **Play development video**. It uses YouTube's privacy-enhanced embed host. Before that action this website loads only its own assets; it creates no cookies or storage and includes no analytics, advertising or trackers. Once activated, YouTube's own player behavior and privacy policies apply. A normal YouTube link is available as a fallback.

### Future bug-report link

The tester section is prepared for a future developer-approved contact or reporting URL. No email, Discord invite or issue tracker has been invented.

## Public repository boundary

This is a **website-only repository**. Do not add Godot projects, gameplay scripts, game source, EXE/PCK files, game ZIPs, test reports, credentials or private development files. The game and downloadable build remain outside this repository.

## Manual publishing checks

GitHub Pages is not enabled by this local preparation. After deployment, verify desktop/mobile display, confirm YouTube permits this video to be embedded, and check Proton access using privately supplied credentials. No changes to Proton protection are required.
