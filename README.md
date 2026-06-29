# StatEdge — Football Prediction Site

## APIs Integrated
| API | What it provides | Key name in Netlify |
|-----|-----------------|---------------------|
| BSD (Bzzoiro) | Live scores, xG, odds, ML predictions, injuries | `BSD_API_KEY` |
| Football-Data.org | Standings, fixtures, results (12 major leagues) | `FOOTBALLDATA_API_KEY` |
| Anthropic (Claude) | AI narrative analysis | `ANTHROPIC_API_KEY` |

## Get Your Free API Keys
1. **BSD** → https://sports.bzzoiro.com — Sign up, get token instantly. Free, no rate limits.
2. **Football-Data.org** → https://www.football-data.org/client/register — Free forever, 12 leagues.
3. **Anthropic** → https://console.anthropic.com — Create API key (paid per use, very cheap).

## Deploy to Netlify
1. Push this folder to a GitHub repo
2. Go to netlify.com → "Add new site" → "Import from GitHub"
3. In Netlify dashboard → Site Configuration → Environment Variables → Add all 3 keys above
4. Deploy — done!

## Project Structure
```
statedge/
├── index.html                  ← Main site
├── netlify.toml                ← Netlify config
└── netlify/
    └── functions/
        ├── claude.js           ← Proxy for Anthropic API
        ├── bsd.js              ← Proxy for BSD API
        └── footballdata.js     ← Proxy for Football-Data.org
```

## Features
- Today's live matches (BSD)
- Real-time odds comparison (BSD, 17+ bookmakers)
- ML predictions with xG, BTTS, Over/Under (BSD CatBoost model)
- League standings (Football-Data.org)
- Claude AI narrative analysis for any match
- Custom match predictor (manual entry)
- League filter, live status badges
- API health indicators in navbar
