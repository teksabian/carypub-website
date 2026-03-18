# The Cary Pub — Website

Static site for The Cary Pub, Cary NC. No build step required.

## Project Structure

```
cary-pub-site/
├── index.html          ← Main page
├── css/
│   └── styles.css      ← All styling
├── js/
│   ├── site-data.js    ← ⭐ EDIT THIS for menu, specials, prices, hours
│   └── main.js         ← Site logic (tabs, specials board, etc.)
├── images/             ← Put images here (logo, interior photos, etc.)
└── README.md
```

## How to Update Content

### Menu items & prices
Open `js/site-data.js` and edit the `MENU_DATA` object. Each item has:
- `name` — Item name (add * for raw items)
- `desc` — Description
- `price` — Number (e.g. 11.99)

### Daily specials
Edit the `DAILY_SPECIALS` object in `js/site-data.js`. Each day has:
- `food` — Food special text
- `drinks` — Array of drink special strings
- `emoji` — Emoji for the day

### Pub info (hours, phone, address)
Edit the `PUB_INFO` object in `js/site-data.js`.

### Styling
Edit `css/styles.css`. Colors are defined as CSS variables at the top.

## Deploy on Render

1. Push this folder to a GitHub repo
2. On Render, create a new **Static Site**
3. Set the publish directory to the root of this folder
4. Done — Render will serve `index.html`

## Local Preview

Just open `index.html` in a browser. No server needed.
