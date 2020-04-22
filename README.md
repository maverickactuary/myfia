# Quickstart Jekyll Site [![Netlify Status](https://api.netlify.com/api/v1/badges/9e3582d0-6ed3-48df-af66-c64551eb351b/deploy-status)](https://app.netlify.com/sites/myquickstart/deploys)

This repository contains a quick start [Jekyll](https://jekyllrb.com/) website, which has been deployed to:

+ [Netlify](https://www.netlify.com/) at [Netlify deployment](https://myquickstart.netlify.app/) and
+ [GitHub Pages](https://pages.github.com/) at [GitHub deployment](https://github.com/maverickactuary/quickstart)

I've made this site public, so feel free to use it. GitHub allows you to easily [create a new repository using this one as a template](https://github.com/maverickactuary/quickstart/generate).

## Why I did this

This site has its origin in a [blank Jekyll site](https://github.com/BenjaminEHowe/jekyll-blank/blob/master/README.md) produced by Benjamin Howe, who happens to be my son. Please refer to that site for his motivation on proving a minimalist Jekyll site. My motivation is to allow someone to take this forward, so that you can:

1. Produce a website on GitHub Pages, include styling and navigation.
1. Manage sites offline to (e.g.) preview changes.
1. Host multiple sites &mdash; for free &mdash; online.

## Steps to customization and deployment

1. [Install Ruby and Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/) locally.
1. Copy this website across to your GitHub repositories.
1. Clone the repository locally, so you can make local changes.
1. Make the local changes &mdash; see below.
1. Carry out the normal commit and push procedure, so you get the site online.
1. Deploy to Netlify if required &mdash; you can deploy multiple sites for free.

## Local changes

The following are the local changes you will want to consider:

### Configuration

- [ ] Update `_config.yml`.
- [ ] Check you're happy with the .gitignore file.
- [ ] Check `netlify.toml` makes sense for you, or delete it completely if you're not using Netlify.

### Content

- [ ] Update the title and strapline in `/layouts/default.html`.
- [ ] Update the folder structure as you wish: c.f. the content sub-folders.
- [ ] Change the folder names i.e. in your editor or file manager.
- [ ] Correspondingly change the titles and URLs in `/_data/lists.yml`.
- [ ] Update the content for each folder's `index.md`.
- [ ] Finally, change this `README.md` &mdash; or delete it.

You can preview your Jekyll site locally by running `bundle exec jekyll serve` (and navigating to http://127.0.0.1:4000). Then commit your changes to git and push.

### Styling

+ [Customize the liquid](https://jekyllrb.com/docs/step-by-step/02-liquid/).
+ Adjust the CSS to suit you, probably in `/css/newstyles.css`.
