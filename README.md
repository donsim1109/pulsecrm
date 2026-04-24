# ◈ Pulse CRM — AI-Powered Client Manager

A luxury dark CRM that converts speech or natural language into structured client records, with Google Sheets sync.

## Features
- 🎙 **Voice & Text input** — speak or type to add/update clients
- 🤖 **AI parsing** — Claude extracts client name, contact, deal value, status, next steps
- 🔍 **Duplicate detection** — warns when a client already exists, suggests updating
- ✏️ **Inline editing** — click any cell to edit directly
- 🔄 **Status cycling** — click status badge to move through Lead → Prospect → Active → Closed → Lost
- 📊 **Live stats** — pipeline value, active deals, closed won
- 🔎 **Search/filter** — real-time search across all fields
- ☁️ **Google Sheets sync** — one-click sync to your spreadsheet
- 📥 **CSV export**

## Deploy to Railway
```bash
git init && git add . && git commit -m "Pulse CRM"
git remote add origin https://github.com/YOUR_USERNAME/pulse-crm.git
git push -u origin main
# Then: railway.app → New Project → Deploy from GitHub
```

## Google Sheets Setup
1. Open your CRM sheet → **Extensions → Apps Script**
2. Paste contents of `apps-script.js`
3. **Deploy → New deployment → Web app → Anyone → Deploy**
4. Copy the `exec` URL → paste into CRM config panel

## AI Commands (examples)
```
Add client Acme Corp, contact John Smith, deal €15,000, status prospect
Update Acme Corp status to active, next step send contract
TechStart signed the contract, mark as closed won, deal €25,000
Add three clients: Blue Wave €5k prospect; Nova Digital €8k lead; Vertex €30k active
Mark Innovate Ltd as lost
```
