# JBFE Sea to Sea website

Astro static site for seatosea.co.za, hosted on Vercel. Same setup as the Tour de Addo site.
Built on the Sea to Sea design system (Night theme, Frutiger LT Pro, Sun/Sky palette).

## Edit
    npm install
    npm run dev        # preview at http://localhost:4321

- Dates, hotels, prices, entry link, day-by-day text, grades, sponsors: `src/data/site.ts`
- Pages: `src/pages/` · Shared pieces: `src/components/` · Colours/fonts: `src/styles/global.css`
- Photos: `public/img/<name>-800.webp` and `<name>-1600.webp` (pulled from the old WordPress site)
- Old WordPress addresses are redirected in `vercel.json`.

## Contact form
Create a free form at formspree.io using team@redcherryevents.co.za, then in Vercel add the
environment variable `PUBLIC_FORMSPREE_ID` (the code after /f/) and redeploy.
Until then, the form opens the visitor's email app.

## Still to confirm (South 2027)
- Rider and Supporter prices (`packages[].price`, shows "Price TBC" while null)
- Deposit amount (`deposit`) and the refund schedule
- Entry link for South 2027 (`event.enterUrl`)
- Team size (old pages say 2–6, 2–8 and 2–25; site says 2 to 25)
- Day distances once routes are ridden in
- Photos of Trennerys and Kob Inn (current photos are from riding days, plus North hotels which are not used)
- Frutiger LT Pro web font licence (self-hosted from the design system)
