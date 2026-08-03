/**
 * Metadata for the standalone app pages served from public/.
 *
 * These files are authored elsewhere (single-file HTML, vanilla JS + canvas)
 * and copied into public/ as-is, so they carry no <head> metadata of their
 * own. The injectAppMetadata integration in astro.config.mjs uses this table
 * to add canonical URLs, descriptions, social tags, favicons, and
 * SoftwareApplication structured data at build time — which means the app
 * files can be replaced wholesale without any of it being lost.
 */
export const SITE = 'https://ebenthurston.com';

export const apps = [
  {
    slug: 'golf',
    name: 'BallFlight',
    description:
      'A golf setup and swing sandbox: adjust club, attack angle, face and path, then watch real ball-flight physics produce the carry, curve and shape.',
    category: 'SportsApplication',
  },
  {
    slug: 'freethrow',
    name: 'FreeThrow',
    description:
      'A basketball shot-mechanics sandbox: adjust stance, grip, arc and rhythm to see simulated make percentage, shot dispersion, and a cue card for the real line.',
    category: 'SportsApplication',
  },
  {
    slug: 'powder',
    name: 'Powder',
    description:
      "First-person backcountry snowboarding where the board follows the rider's gaze. Stare at a tree and you hit it — ride the gaps to build flow.",
    category: 'GameApplication',
  },
  {
    slug: 'intercept',
    name: 'Intercept',
    description:
      'A missile-defense game: ballistic warheads fall at varying speeds while your interceptors fly at a fixed one. Lead the track and time the blast.',
    category: 'GameApplication',
  },
  {
    slug: 'intercept-global',
    name: 'Intercept: Strategic',
    description:
      'Slow missile defense where interceptors are scarce and the firing window closes while you wait to learn where each warhead is aimed. Triage is the game.',
    category: 'GameApplication',
  },
];
