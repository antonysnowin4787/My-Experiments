# 👤 Profiles — A Multi-Page HTML & CSS Project

A simple multi-page profile website built with pure HTML and CSS. No frameworks, no JavaScript — just clean fundamentals.

---

## 🗂️ Project Structure

```
project/
├── index.html        # Home page — all 3 profile cards
├── elon.html         # Elon Musk profile page
├── tony.html         # Tony Stark profile page
├── bruce.html        # Bruce Wayne profile page
├── Profile.css       # Single shared stylesheet for all pages
├── Elon.jpg
├── Tony-Stark.webp
└── Bruce Wayne.jpg
```

---

## 💡 What's Inside

### `index.html`
The landing page displaying all 3 profiles as cards in a responsive grid. Clicking a name in the nav takes you to that person's dedicated page.

### `elon.html` / `tony.html` / `bruce.html`
Individual profile pages, each containing:
- Circular profile image
- Name and role tagline
- An inspirational quote
- Two detail cards — *On Discipline* and *On Consistency*
- A *Known For* section
- Back to Home button

### `Profile.css`
One CSS file shared across all pages, covering:
- CSS Reset
- Flexbox layout (cards, nav, profile hero)
- CSS Grid-ready structure
- Media queries for mobile, tablet, and desktop
- Mobile landscape mode handling

---

## 📐 CSS Concepts Used

- **Flexbox** — card layout, nav, profile hero section
- **Media Queries** — responsive breakpoints at 576px, 768px, 992px, 1200px
- **`min()` function** — fluid card widths without calc()
- **`scroll-behavior: smooth`** — anchor link navigation
- **`position: sticky`** — header and footer
- **`radial-gradient`** — background atmosphere
- **CSS Reset** — margin/padding/box-sizing baseline

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| Default (mobile) | Single column, stacked cards |
| `576px+` | Cards wrap into a row, centered |
| `768px+` | Cards resize for tablet |
| `992px+` | Wider cards for large screens |
| `1200px+` | Cards fill row using `min(33% - 1rem, 500px)` |
| Landscape mobile | Compact header, horizontal scroll |

---

## 🚀 How to Run

No build tools or dependencies needed.

1. Clone or download the project
2. Open `index.html` in any browser
3. Or use a local dev server:

```bash
# With VS Code Live Server extension — right click index.html → Open with Live Server

# Or with Python
python -m http.server 5500
```

---

## 🛠️ Built With

- HTML5 (semantic elements — `header`, `main`, `article`, `figure`, `nav`, `footer`)
- CSS3 (Flexbox, Media Queries, CSS functions)
- No JavaScript
- No frameworks or libraries

---

## 📌 Key Learnings

- How to share a single CSS file across multiple HTML pages
- Structuring a multi-page site with consistent navigation
- Using `nav a.active` to highlight the current page
- Responsive layout with Flexbox and `flex-wrap`
- Using `min()` for fluid widths without media queries

---

## ✍️ Author

**Antony** — built as a front-end fundamentals practice project.