# Build and Deployment Workflow

## Local Development
1. Run `npm run start` to start local dev server
2. Make changes to source files
3. Test changes locally

## Building for Production
1. Run `npm run build` to build dist files
2. Verify dist/app.js contains your latest changes
3. Commit both source AND dist files:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

## jsDelivr CDN Cache Busting

jsDelivr caches files aggressively. To force a cache refresh, use one of these methods:

### Option 1: Use Version/Tag (Recommended)
Instead of:
```html
script.src = "https://cdn.jsdelivr.net/gh/disabilityid/ndc-frontend/dist/app.js";
```

Use a version tag:
```html
script.src = "https://cdn.jsdelivr.net/gh/disabilityid/ndc-frontend@main/dist/app.js";
```

Or create a git tag for each release:
```bash
git tag v1.0.1
git push origin v1.0.1
```
Then use:
```html
script.src = "https://cdn.jsdelivr.net/gh/disabilityid/ndc-frontend@v1.0.1/dist/app.js";
```

### Option 2: Add Cache-Busting Query Parameter
```html
script.src = "https://cdn.jsdelivr.net/gh/disabilityid/ndc-frontend/dist/app.js?v=" + Date.now();
```

### Option 3: Purge jsDelivr Cache
Visit: https://www.jsdelivr.com/tools/purge
Enter: `gh/disabilityid/ndc-frontend`

## Important Notes
- Always run `npm run build` before committing
- Always commit the dist/ folder (it's needed for jsDelivr)
- jsDelivr cache can take 7 days to expire naturally
- Using version tags is the most reliable method
