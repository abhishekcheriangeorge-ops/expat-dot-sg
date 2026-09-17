export const CLONE_REDIRECTS: Array<{
  source: string;
  destination: string;
}> = [
  ...[
    "activesg-archery-range-booking-singapore",
    "activesg-athletics-track-booking-singapore",
    "activesg-badminton-court-booking-singapore",
    "activesg-bowling-booking-singapore",
    "activesg-climbing-wall-booking-singapore",
    "activesg-cricket-nets-booking-singapore",
    "activesg-cycling-circuit-booking-singapore",
    "activesg-fencing-booking-singapore",
    "activesg-football-futsal-booking-singapore",
    "activesg-gateball-petanque-booking-singapore",
    "activesg-gym-standard-rate-singapore",
    "activesg-holiday-camps-booking-singapore",
    "activesg-lawn-bowls-booking-singapore",
    "activesg-netball-booking-singapore",
    "activesg-pickleball-booking-singapore",
    "activesg-sepak-takraw-booking-singapore",
    "activesg-skating-booking-singapore",
    "activesg-squash-court-booking-singapore",
    "activesg-stadium-indoor-courts-singapore",
    "activesg-studio-dance-class-booking-singapore",
    "activesg-swimming-lessons-booking-singapore",
    "activesg-table-tennis-booking-singapore",
    "activesg-tennis-court-booking-singapore",
    "activesg-yoga-pilates-class-booking-singapore",
  ].map((slug) => ({
    source: `/guides/${slug}`,
    destination: "/guides/sports-fitness-singapore",
  })),
  ...[
    "activesg-swim-parent-belonging-singapore",
    "community-centre-parent-belonging-singapore",
    "dance-studio-waiting-parent-belonging-singapore",
    "faith-preschool-parent-belonging-singapore",
    "foodcourt-dinner-parent-belonging-singapore",
    "gymnastics-studio-waiting-parent-belonging-singapore",
    "hawker-breakfast-parent-belonging-singapore",
    "mall-indoor-playground-parent-belonging-singapore",
    "martial-arts-dojo-waiting-parent-belonging-singapore",
    "music-lesson-studio-waiting-parent-belonging-singapore",
    "nlb-library-parent-belonging-singapore",
    "park-playground-parent-belonging-singapore",
    "supermarket-evening-parent-belonging-singapore",
    "swim-school-waiting-area-parent-belonging-singapore",
    "tuition-centre-lobby-parent-belonging-singapore",
    "void-deck-kopi-parent-belonging-singapore",
    "wet-market-morning-parent-belonging-singapore",
    "youth-sports-sideline-parent-belonging-singapore",
  ].map((slug) => ({
    source: `/guides/${slug}`,
    destination: "/guides/find-my-people-singapore",
  })),
];

const CLONE_SLUGS = new Set(
  CLONE_REDIRECTS.map((item) => item.source.replace("/guides/", "")),
);

export function isCloneSlug(slug: string) {
  return CLONE_SLUGS.has(slug);
}
