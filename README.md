# 2026

Static website for Ignite NYC 2026. Edit `index.html` and add plain CSS,
JavaScript, and other public assets in the repository root. No compilation or
dependency installation is required. Use relative asset URLs so they work under
the `/2026/` project path.

## GitHub Pages

1. In **Settings → Pages → Build and deployment**, select **GitHub Actions**
   as the source (requires repository administrator access).
2. Merge site changes into `main`. The **Deploy static site to GitHub Pages**
   workflow publishes the repository directly, with no build step.
3. Visit <https://ignitenyc.github.io/2026/> after the deployment succeeds.

The workflow also supports manual runs from the **Actions** tab on `main`.
Pull requests do not deploy. Everything in the repository root except hidden
files and directories is included in the published artifact, so keep private
files out of the repository.

To preview locally, run `python3 -m http.server 8000` from the repository root
and open <http://localhost:8000/>.