# Academic Pages
**Academic Pages is a GitHub Pages template for personal and professional portfolio-oriented websites.**

![Academic Pages template example](images/homepage.png "Academic Pages template example")

# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your public repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running locally

When you are initially working on your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.

### Using a different IDE
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    If you see error `Unable to locate package ruby-bundler`, `Unable to locate package nodejs `, run the following:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
    then try run `sudo apt install ruby-dev ruby-bundler nodejs` again.

    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.

    If you see file permission error like `Fetching bundler-2.6.3.gem ERROR:  While executing gem (Gem::FilePermissionError) You don't have write permissions for the /var/lib/gems/3.2.0 directory.` or `Bundler::PermissionError: There was an error while trying to write to /usr/local/bin.`
    Install Gems Locally (Recommended):
    ```bash
    bundle config set --local path 'vendor/bundle'
    ```
    then try run `bundle install` again. If succeeded, you should see a folder called `vendor` and `.bundle`.

1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.
    You may also try `bundle exec jekyll serve -l -H localhost` to ensure jekyll to use specific dependencies on your own local machine.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

## Using Docker

Working from a different OS, or just want to avoid installing dependencies? You can use the provided `Dockerfile` to build a container that will run the site for you if you have [Docker](https://www.docker.com/) installed.

You can build and execute the container by running the following command in the repository:

```bash
chmod -R 777 .
docker compose up
```

You should now be able to access the website from `localhost:4000`.

### Using the DevContainer in VS Code

If you are using [Visual Studio Code](https://code.visualstudio.com/) you can use the [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) that comes with this Repository. Normally VS Code detects that a development coontainer configuration is available and asks you if you want to use the container. If this doesn't happen you can manually start the container by **F1->DevContainer: Reopen in Container**. This restarts your VS Code in the container and automatically hosts your academic page locally on http://localhost:4000. All changes will be updated live to that page after a few seconds.

# Maintenance

Bug reports and feature requests to the template should be [submitted via GitHub](https://github.com/academicpages/academicpages.github.io/issues/new/choose). For questions concerning how to style the template, please feel free to start a [new discussion on GitHub](https://github.com/academicpages/academicpages.github.io/discussions).

This repository was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE.md). It is currently being maintained by [Robert Zupko](https://github.com/rjzupkoii) and additional maintainers would be welcomed.

## Bugfixes and enhancements

If you have bugfixes and enhancements that you would like to submit as a pull request, you will need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository as opposed to using it as a template. This will also allow you to [synchronize your copy](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) of template to your fork as well.

Unfortunately, one logistical issue with a template theme like Academic Pages that makes it a little tricky to get bug fixes and updates to the core theme. If you use this template and customize it, you will probably get merge conflicts if you attempt to synchronize. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch.

---




# Customizing the Academic Pages Template

1. Open Docker
2. Open the Windows PowerShell, and set the current directory to the root of the local copy: 
```powershell
cd D:\Dropbox\Dropbox\vs_cloud\Github\lzxlll.github.io
```
3. Run the following command to start the local server:
```powershell
wsl chmod -R 777 .
wsl docker compose up
``` 

---

## 1 — Site-wide settings (edit once)

| File                   | What you change                               | Typical edits                                                                                                                  |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `_config.yml`          | Global defaults Jekyll reads at build time    | *Site title, base URL, author block, social-media usernames, Google Scholar link, Google Analytics ID, etc.* ([github.com][1]) |
| `_data/navigation.yml` | Order and text of the top-bar / sidebar links | Rename “Research”→“Publications”, hide pages you don’t want, add external links                                                |

> **Tip:** after changing `_config.yml` you must restart `docker compose up` (or `bundle exec jekyll serve`) because Jekyll does **not** reload that file on the fly.

---

## 2 — Your core pages (edit a handful of times)

These are plain Markdown files that live in **`_pages/`**.  Each file has YAML front-matter at the top that controls the page title, permalink, and whether the sidebar shows up.  Typical ones are:

```
_pages/
  about.md          → your short bio / photo
  cv.md             → your full CV (or embed a PDF from /files)
  research.md       → overview of current projects
  teaching.md       → courses and student resources
  index.md          → your landing page (optional)
```

You can delete pages you don’t need, or add new ones by copying an existing file and adjusting the front-matter.

---

## 3 — Content collections you update regularly

| Directory        | Purpose                      | How to add new items                                                             |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| `_publications/` | One Markdown file per paper  | Copy an existing file, edit the BibTeX-style header, drop your PDF into `files/` |
| `_posts/`        | Blog posts                   | Use the standard `YYYY-MM-DD-title.md` filename                                  |
| `_talks/`        | Invited talks & seminars     | Same pattern as publications                                                     |
| `_teaching/`     | Course pages / lecture notes | One file per course or semester                                                  |
| `_portfolio/`    | Side projects or datasets    | Markdown + images                                                                |

Because these are Jekyll collections, the site automatically groups, paginates, and links them.

---

## 4 — Images & static files

* `images/profile.png` — replace with your headshot (same filename) so every page sidebar updates.
* `files/` — PDFs, slide decks, data zips, your CV (e.g. `cv.pdf`).
* `assets/` or `_sass/` — only if you want to tweak colours or fonts; otherwise leave them alone.

---

## 5 — Rarely-touched build plumbing

| File                                    | When you’d touch it                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Gemfile` / `package.json`              | Only if you add plugins or JS libraries                                                                   |
| `docker-compose.yaml`                   | Only to change the local port (defaults to 4000)                                                          |
| `talkmap.ipynb` & `markdown_generator/` | Utility notebooks/scripts to auto-generate Markdown from a TSV list of papers or talks—handy but optional |

---

### Quick start checklist

1. Fork or clone the repo.
2. Edit `_config.yml` → set **title**, **url**, **author** block, social links.
3. Replace `images/profile.png` with your own photo.
4. Open each file in `_pages/` and rewrite the content.
5. Remove the example Markdown files in `_publications/`, `_posts/`, etc. and add your own.
6. Commit & push; GitHub Pages (or `docker compose up`) rebuilds the site.

That’s it—once these files reflect *you*, the template takes care of layout, navigation and RSS automatically.

[1]: https://github.com/lzxlll/lzxlll.github.io/raw/master/_config.yml?plain=1 "raw.githubusercontent.com"


---
<div align="center">
    
![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/academicpages/academicpages.github.io.svg)](https://github.com/academicpages/academicpages.github.io/graphs/contributors)
[![GitHub release](https://img.shields.io/github/v/release/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/releases/latest)
[![GitHub license](https://img.shields.io/github/license/academicpages/academicpages.github.io?color=blue)](https://github.com/academicpages/academicpages.github.io/blob/master/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io)
[![GitHub forks](https://img.shields.io/github/forks/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/fork)
</div>