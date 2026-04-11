# AFSH Website Demo

This is the repository of the website of Air Force School Hindan. This Website is built by students of this school for the school.

---

## Tech Stack

- HTML
- Tailwind CSS
- Typescript
- React
- Vite
- Strapi
- TinaCMS
- Sanity
- React Spring
- React Router
- PostgreSQL

---

## Structure

```
/
├── .gitignore
├── .node-version
├── .npmrc
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── sanity.config.ts
├── tsconfig.json
├── vite.config.ts
├── wrangler.json
│
├── /attached_assets
├── /content
├── /patches
│
├── /public
│   ├── _headers
│   ├── _redirects
│   ├── faculty-placeholder.png
│   ├── student-placeholder.png
│   ├── sitemap.xml
│   ├── /admin
│   ├── /img
│   └── /uploads
│
├── /sample-data
│
├── /sanity-schemas
│   ├── album.ts
│   └── photo.ts
│
├── /src
│   ├── main-home.tsx
│   ├── types.ts
│   ├── vite-env.d.ts
│   │
│   ├── /api
│   │   └── client.ts
│   │
│   ├── /assets
│   │   └── /svg
│   │       ├── android.svg
│   │       ├── android-studio.svg
│   │       ├── blogger.svg
│   │       ├── bootstrap.svg
│   │       ├── js.svg
│   │       ├── kotlin.svg
│   │       ├── lua.svg
│   │       ├── nextjs.svg
│   │       └── (more SVG files)
│   │
│   ├── /components
│   │   ├── TinaBlocksRenderer.tsx
│   │   │
│   │   ├── /layout
│   │   │   ├── BrandFooter.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   │
│   │   ├── /sections
│   │   │   ├── CampusLifeSection.tsx
│   │   │   ├── EDMessage.tsx
│   │   │   ├── FacultyCarousel.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── LatestNews.tsx
│   │   │   ├── NoticeBoard.tsx
│   │   │   ├── PhilosophySection.tsx
│   │   │   ├── PrincipalMessage.tsx
│   │   │   ├── TopperSection.tsx
│   │   │   │
│   │   │   └── /parallax-carousel
│   │   │       ├── ParallaxCarousel.tsx
│   │   │       └── parallax-carousel.css
│   │   │
│   │   └── /ui
│   │       ├── BlocksRenderer.tsx
│   │       ├── NoticeCard.tsx
│   │       ├── PageAnimate.tsx
│   │       └── Silk.tsx
│   │
│   ├── /data
│   │   └── gallery-data.ts
│   │
│   ├── /hooks
│   │   └── useTinaPage.ts
│   │
│   ├── /lib
│   │   └── sanity.ts
│   │
│   ├── /pages
│   │   ├── /academics
│   │   │   ├── AcademicsPage.tsx
│   │   │   ├── AchievementsPage.tsx
│   │   │   ├── FacilitiesPage.tsx
│   │   │   └── StudentLifePage.tsx
│   │   │
│   │   ├── /archive
│   │   │   ├── AcademicsPage.old.tsx
│   │   │   └── AdmissionPage.old.tsx
│   │   │
│   │   ├── /community
│   │   │   ├── AlumniPage.tsx
│   │   │   └── AlumniRegistrationPage.tsx
│   │   │
│   │   ├── /content
│   │   │   ├── BlogPage.tsx
│   │   │   ├── GalleryPage.tsx
│   │   │   ├── NewsPage.tsx
│   │   │   ├── NoticesPage.tsx
│   │   │   └── PostDetails.tsx
│   │   │
│   │   ├── /core
│   │   │   ├── AboutPage.tsx
│   │   │   ├── BuilderPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── HomePage.tsx
│   │   │
│   │   ├── /information
│   │   │   ├── AdmissionPage.tsx
│   │   │   ├── CalendarPage.tsx
│   │   │   ├── CalendarPageNew.tsx
│   │   │   └── MandatoryDisclosurePage.tsx
│   │   │
│   │   ├── /studio
│   │   │   └── SanityStudioPage.tsx
│   │   │
│   │   └── /utility
│   │       ├── DevelopmentPage.tsx
│   │       ├── LoginPage.tsx
│   │       └── SearchPage.tsx
│   │
│   ├── /services
│   │   ├── alumniService.ts
│   │   ├── noticeService.ts
│   │   ├── postService.ts
│   │   └── sanityGalleryService.ts
│   │
│   ├── /types
│   │   ├── alumni.ts
│   │   ├── blog.ts
│   │   └── strapi.ts
│   │
│   └── /utils
│       ├── animations.ts
│       └── strapi.ts
│
├── /test-results
│
└── /tina
    ├── config.ts
    └── tina-lock.json
```

## Features

- Academic Calendar Integrated With Google Calendar
- Connected With Strapi CMS for Writing Articles/News/Circulars etc.
- Connected With Tina CMS for Visual Website Changes Without Editing Code
- Connected With Sanity For Image Uploading In Gallery
- Backend API which Collects Data From Forms and Stores In Google Sheets
- Search Feature For Finding Pages Quickly
- Dark Mode and Modern Design With Decent User Experience

## Team

- Aryan Rajput -> Class 12th
- Anagh Singh -> Class 8th

---

## Mindset= Make it work, make it right, make it fast.

## Deployed Using => Frontend- Cloudflare   Backend- Railway
---
