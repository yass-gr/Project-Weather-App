You are an HTML/CSS generator. Create a skeleton weather-app UI (two files: index.html(aleady in src), styles.css(in src)) that matches the attached reference image (ref.png) as closely as possible in layout, spacing, and style — do not implement any JavaScript logic or external data fetching. Provide placeholder content and data- attributes where dynamic values will later be filled. Keep the code clean, well-commented, and easy for a beginner to hook up later.

Deliverables

index.html — semantic HTML structure, accessible markup, placeholder text/values, obvious hook points for logic.

styles.css — all styling, CSS variables for colors/spacing/typography, responsive rules. Use only CSS (no preprocessors). Link Google Fonts for headings/body as needed.

Global styling & assets

Dark theme: deep navy/dark charcoal background, slightly lighter card backgrounds, soft rounded corners.

Accent color: cyan/teal for primary buttons/toggles; warm yellow/orange for sun/moon icons; subtle white/gray text hierarchy.

Use CSS custom properties (e.g. --bg, --card, --accent, --muted, --accent-warm, --radius, --gap).

Use Google Fonts: one geometric sans for headings (e.g. Inter or Google Sans), one humanist for body (e.g. Ubuntu). Load via <link> in HTML.

Include a simple, small inline SVG icon placeholders for sun, moon, cloud, and a generic search icon — these can be simple shapes with classes so colors are controlled via CSS.

Subtle card shadows / inner glows but keep them minimal.

Layout & responsiveness

Desktop max-width centered container. Use CSS Grid for main layout.

IMPORTANT: The 7-day forecast must be below the main content (stacked vertically) — not side-by-side — even on wide screens. (You may design a two-column grid where the right column is reserved for decorative or auxiliary items, but the 7-day forecast card itself should always be stacked below the other primary cards in the vertical flow.)

Mobile-first: single column stacking for all cards. At wider screens increase paddings and font sizes but still keep the 7-day forecast stacked after the main cards.

Use max-width container and responsive breakpoints (e.g. min-width: 768px, min-width: 1024px) to scale typography/spacing.

Components to include (with required class names / data attributes)
Produce these visible sections in the HTML with the given class names and data- attributes so logic can be easily attached later:

Header / Search bar

<header class="weather-header">

Left: city name and short description (<h1 class="city-name" data-city>, <p class="city-desc">).

Center/right: search input and search button: <input class="search-input" type="search" placeholder="Search city..." aria-label="Search city" data-search> and <button class="btn-search">Search</button>.

A small unit toggle with buttons for °C and °F: <div class="unit-toggle" role="tablist" aria-label="Units"><button data-unit="c" aria-pressed="true">°C</button><button data-unit="f">°F</button></div>

Current temperature panel (big)

<section class="current-panel">

Large temperature number with degree symbol: <div class="temp-large" data-temp>10<span class="deg">°</span></div>

Large weather icon placeholder (moon/sun) — inline SVG with class .icon-main.

Small text: e.g. “Similar temperatures continuing with no rain expected.” (placeholder)

Today’s hourly forecast (timeline)

<section class="hourly-panel" aria-label="Today's forecast">

Horizontal list of 6–8 time items: each item <div class="hour-item" data-hour="09:00"> containing time, small icon placeholder, and small temp (data-hour-temp).

Put a highlighted state for the currently selected hour with a .active modifier.

Air conditions card

<section class="air-card">

Four metrics in a grid: Feels Like, Humidity, Wind Speed, UV Index. Each metric gets data- attribute, e.g. data-feels-like, data-humidity, data-wind, data-uv.

7-day forecast card

<section class="weekly-card" aria-label="7-day forecast">

Vertical list of 7 day items. Each day item: day name, small icon, high/low temps. Use data-day-index and data-day-high, data-day-low.

Placement requirement: this entire .weekly-card should be below the .current-panel, .hourly-panel, and .air-card in the document flow so it stacks vertically (not positioned as a right-side column). Ensure CSS does not float it to the side; keep it full width of the content area on all viewports.

Footer / small credits (optional)

Small text with version or "learning project" note.

HTML expectations

Use semantic tags (header, main, section, nav, ul/li where appropriate).

Add ARIA roles/labels where appropriate (e.g., aria-label="7-day forecast")

Provide data- attributes exactly as described above to make future JS hooking trivial.

Insert inline comments marking “HOOK: dynamic temp goes here”, “HOOK: hourly list to be populated”, etc.

CSS expectations

All colors are CSS variables at top of styles.css.

Use a grid system for the main content: e.g. .container { display: grid; grid-template-columns: 1fr; gap: var(--gap); } and adjust at breakpoints if desired — but keep weekly card below.

Utility classes for spacing and text (optional) but prefer clear component classes.

Include a .visually-hidden class for accessibility (screen-reader-only text).

Include small, tasteful hover/focus states for interactive controls (search button, unit toggle).

Add comments explaining which classes the JS should update (e.g. .temp-large -> set innerText; .hour-item[data-hour] -> add .active).

Avoid relying on icons from external CDNs — include small inline SVG placeholders; leave comments on how to swap for real icons later.

Extra instructions for the AI

Do not include any JavaScript or logic. Only provide the static HTML and CSS.

Populate the HTML with reasonable placeholder values (city name: guelmim, temp: 10°, hourly samples, humidity 100%, wind 10.3 km/h, etc.) so the UI looks complete.

Put explicit comment blocks in index.html and styles.css indicating where to add JavaScript and which data- attributes to update.

Keep file sizes modest and avoid external frameworks. Using Google Fonts is OK.

Make the CSS easy to read and modify for a beginner: grouped custom properties, clear component sections, and short comments.

Accessibility

Ensure color contrast is sufficient for primary text.

All interactive elements must be keyboard-focusable (button, input) and have visible focus outlines.

Use semantic markup and aria-labels for non-text controls.