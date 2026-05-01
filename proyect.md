<!-- Zona Música - Home -->
<!DOCTYPE html>

<html lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zona Música</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:ital,wght@0,600;0,700;1,600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-surface": "#1a1c1b",
                      "background": "#faf9f7",
                      "on-tertiary": "#ffffff",
                      "inverse-surface": "#2f3130",
                      "surface-container": "#efeeec",
                      "on-primary-fixed-variant": "#910a0c",
                      "primary-container": "#b32821",
                      "secondary": "#825422",
                      "tertiary-fixed-dim": "#d1c5b7",
                      "on-tertiary-fixed": "#211b12",
                      "on-primary-container": "#ffccc6",
                      "primary-fixed-dim": "#ffb4aa",
                      "on-primary-fixed": "#410001",
                      "inverse-on-surface": "#f1f1ef",
                      "secondary-fixed": "#ffdcbd",
                      "surface": "#faf9f7",
                      "on-primary": "#ffffff",
                      "secondary-fixed-dim": "#f7bb7e",
                      "primary-fixed": "#ffdad5",
                      "on-tertiary-container": "#e3d7c9",
                      "surface-tint": "#b32821",
                      "on-secondary": "#ffffff",
                      "on-background": "#1a1c1b",
                      "tertiary-fixed": "#eee0d2",
                      "on-tertiary-fixed-variant": "#4e453b",
                      "on-error": "#ffffff",
                      "surface-container-highest": "#e3e2e0",
                      "surface-bright": "#faf9f7",
                      "on-error-container": "#93000a",
                      "inverse-primary": "#ffb4aa",
                      "tertiary": "#4e463b",
                      "secondary-container": "#fdc083",
                      "surface-container-low": "#f4f3f1",
                      "error": "#ba1a1a",
                      "error-container": "#ffdad6",
                      "outline-variant": "#e2beba",
                      "primary": "#900a0c",
                      "on-secondary-fixed-variant": "#663d0b",
                      "surface-container-high": "#e9e8e6",
                      "surface-container-lowest": "#ffffff",
                      "on-surface-variant": "#5a413d",
                      "on-secondary-container": "#784c1a",
                      "outline": "#8e706c",
                      "surface-dim": "#dadad8",
                      "surface-variant": "#e3e2e0",
                      "tertiary-container": "#665d52",
                      "on-secondary-fixed": "#2c1600"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "gutter": "24px",
                      "section-gap": "120px",
                      "margin-mobile": "16px",
                      "margin-desktop": "64px",
                      "base": "8px"
              },
              "fontFamily": {
                      "body-md": [
                              "Manrope"
                      ],
                      "label-sm": [
                              "Manrope"
                      ],
                      "headline-lg": [
                              "Noto Serif"
                      ],
                      "headline-md": [
                              "Noto Serif"
                      ],
                      "headline-xl": [
                              "Noto Serif"
                      ],
                      "body-lg": [
                              "Manrope"
                      ]
              },
              "fontSize": {
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-sm": [
                              "13px",
                              {
                                      "lineHeight": "1.2",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-lg": [
                              "32px",
                              {
                                      "lineHeight": "1.3",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-md": [
                              "24px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-xl": [
                              "48px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "700"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ]
              }
      },
          },
        }
      </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-[0_20px_50px_rgba(74,66,56,0.05)] font-serif antialiased text-stone-800 dark:text-stone-200">
<div class="flex justify-between items-center h-20 px-8 lg:px-16 max-w-[1920px] mx-auto">
<!-- Brand -->
<a class="text-2xl font-serif font-bold text-[#B32821] tracking-tight hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">
                Zona Música
            </a>
<!-- Navigation Links -->
<ul class="hidden md:flex items-center space-x-8">
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Guitars</a></li>
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Piano</a></li>
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Percussion</a></li>
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Brass</a></li>
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Strings</a></li>
<li><a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Accessories</a></li>
</ul>
<!-- Trailing Icons -->
<div class="flex items-center space-x-6 text-[#B32821] dark:text-red-500">
<button class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200 flex items-center justify-center">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>
<button class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200 flex items-center justify-center">
<span class="material-symbols-outlined" data-icon="person">person</span>
</button>
</div>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative w-full h-[870px] min-h-[600px] flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 bg-surface-container-high z-0">
<img alt="close-up of a premium acoustic guitar resting on a stand in a sunlit room with soft warm light and deep wood textures" class="w-full h-full object-cover object-center opacity-90 mix-blend-multiply" data-alt="close-up of a premium acoustic guitar resting on a stand in a sunlit room with soft warm light and deep wood textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNbzzid0bvkqQeR-UIWBVoyuSMY4tRyz_DPG4XkUm1E9MciK5EjKnKWMFC-vtMsHLXQaDvDQnDfs8VAfsymzL3r4E175cSt2GMUkvA8iYplrCJWbFeeSbL5yfeJCKt_MPpIuMfOG8uLaLkW3O3EvHxu1cpSkVy38ueRo-Rf48FYzmut4C952WSuQu1ZYXDBvN6M5e_AOUdBv1d9MUqHbbruRtHbSEH4o97pErGqJvYU7uD05TLtiPBpD3fFAy2EMU37T-DHhR3jg"/>
</div>
<!-- Subtle gradient overlay for text legibility -->
<div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10"></div>
<div class="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center mt-24">
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-6 drop-shadow-sm">
                    El Arte del Sonido Perfecto
                </h1>
<p class="font-body-lg text-body-lg text-inverse-surface max-w-2xl mx-auto mb-10 opacity-90">
                    Descubre nuestra colección curada de instrumentos premium. Para estudiantes apasionados y profesionales exigentes que buscan calidad, textura y tono inigualable.
                </p>
<button class="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors duration-300 shadow-sm">
                    Explorar Colección
                </button>
</div>
</section>
<!-- Categorías Populares (Bento Grid) -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Categorías Populares</h2>
<div class="w-16 h-1 bg-outline-variant mx-auto rounded-full"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Large Category -->
<div class="md:col-span-2 relative h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500">
<img alt="close-up of grand piano keys with soft depth of field and warm ambient lighting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close-up of grand piano keys with soft depth of field and warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEYuAsGH8pb-fAiCvs-H3yyU9HFA3LFrhB7EYN_5e-n1P9ENXUR9WzHiUat2oBjGXxn0iCxzBQHZNj1JUz7s5WlFISUlM1SqEdojgjwSNrhgwg8AvEcIcxC1qlAVujdHHx7J3cufmln6lBKEmKdcRHC6dcIyNlTyeJi9F8KuzEz0tgFPFK26rVqCzU2L_38VzIFLGnR9Ft9mkHAu_95UG7O9pM91YnFTx_s07J4X-xxSWU5-Lgwl5uN_HLTDntKAp68p3BHS67H8I"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-8">
<div>
<h3 class="font-headline-md text-headline-md text-on-primary mb-2">Pianos de Cola</h3>
<p class="font-body-md text-body-md text-surface-container">Elegancia acústica y resonancia profunda.</p>
</div>
</div>
</div>
<!-- Small Category 1 -->
<div class="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500">
<img alt="sleek modern electric guitar body in studio lighting showing metallic finish details" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="sleek modern electric guitar body in studio lighting showing metallic finish details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7RmbfOH9S_dIkGY2BmqxdswT7UcAAISvCJBDw7UWffxqDW2onYyuDKyECgaGW47OCk9Tm6lIEAk_Y52IYP1M_X4i4Ek46Sh3G8IHKB0lt7YHCnTXrJNMzBJD9iVAC06y5okxvMRYmbLZYA2C3s1W7hDhenkNUqzFmVkZRKeHmFCWcD5os_HoSaPlNFhNu5DjdMi6Em59gm2uLRAGcHFTvkLH_OPT8dWtw_xMqy9GBezHyCYXdg3wnPTln5YULYHIZ5XnM-InoF5g"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-8">
<div>
<h3 class="font-headline-md text-headline-md text-on-primary mb-2">Guitarras Eléctricas</h3>
</div>
</div>
</div>
<!-- Small Category 2 -->
<div class="relative h-[300px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500">
<img alt="shining brass saxophone details with shallow depth of field and moody lighting" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="shining brass saxophone details with shallow depth of field and moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM_hnglpXg6EphUnJsFRWb6GMwgxEUZNhjdTANsuvrfLQlQ1oBv5TlyAnGyrjI2W7oeHLSZ827P2oRhXg05mNciPNh9pYmcgbTPxG5N0wM4TFEbIX5af_dYH545jAj-lbCx6iuyGJGSvjCcfdkHDD3bhltMPSEqrjW-6KDzWdzyzo6wj2ehQU0CPE4HsH3-x7vB94gdUTWZigxhd32anTGvhSyna9Lv_qCP3CTERCzUuLY9eu48Gb-clXtlCSKtWVJlsBX5THLxXI"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-8">
<div>
<h3 class="font-headline-md text-headline-md text-on-primary mb-2">Vientos de Metal</h3>
</div>
</div>
</div>
<!-- Medium Category -->
<div class="md:col-span-2 relative h-[300px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500">
<img alt="close up of cello strings and bridge with warm wood textures and elegant curves" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close up of cello strings and bridge with warm wood textures and elegant curves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASjjUeI0Q2gXBvx9QP33XpsjiX8rlMzi8GmmzgqIJlvG8mGtk4bcyF_nEeVOBsisywWSTlUKeKSZNRLL9YAnN_Ss13JCOB8R4TIj-znMLWOiuX5JEKE6BKcszdIYfY10bnnOSrNINsnBLWP7C18WYFVys17pP6Omod__CgLrzLhYVzpoNZIMOY0PuDRg4fHzRcyT1RGjRXdI4WMa4hqTqqhOm3gLhSEU7DGU2vZBxLB4xXuIjd8SCH1FBGkCierVK5gSjHLEpUX9s"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-8">
<div>
<h3 class="font-headline-md text-headline-md text-on-primary mb-2">Cuerdas Clásicas</h3>
<p class="font-body-md text-body-md text-surface-container">Violines, violonchelos y contrabajos de luthier.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Instrumentos Destacados (Product Grid) -->
<section class="bg-surface-container-low py-section-gap mt-section-gap">
<div class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Instrumentos Destacados</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Seleccionados por nuestros expertos en tienda.</p>
</div>
<button class="mt-4 md:mt-0 font-label-sm text-label-sm text-secondary hover:text-on-secondary-container transition-colors flex items-center border-b border-secondary/30 pb-1">
                        Ver todo el catálogo <span class="material-symbols-outlined ml-1 text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Product Card 1 -->
<div class="bg-surface rounded-lg border border-surface-variant overflow-hidden shadow-[0_10px_30px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group">
<div class="h-64 bg-surface-container-lowest p-6 flex items-center justify-center relative">
<!-- Chip -->
<div class="absolute top-4 left-4 bg-tertiary-fixed-dim/30 text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-[11px] tracking-wider uppercase">
                                Guitars
                            </div>
<img alt="classic acoustic guitar resting on light neutral background well lit studio shot" class="max-h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-500" data-alt="classic acoustic guitar resting on light neutral background well lit studio shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllNGKIBSS5h4fZzJ1C6GQTlognGezLEfN6NdElR-InfmqQ7bQZAC-26ZbAVLMEdCqRz_Z2wd9HGA7Tjfnb597u9E7FmNum1RRJwcwwVcpGrhtmCQLJAdpWuisvmt7ScEkXbshNSS7O4adbwmTED3IDfo4WVZx5pK_69z792aFt_GKN3kYyctNk2YA0S2fjuD20ETUEXLoU-RyGyi3gHEs1klS1hoB3m_t3AXSifKvI7KNQzDga9aKhuVuaKueacyI9_-gqqpZHWo"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<h3 class="font-headline-sm text-[18px] font-semibold text-on-surface mb-1 line-clamp-2">Martin D-28 Acoustic</h3>
<p class="font-body-md text-sm text-on-surface-variant mb-4 flex-grow">Madera de palisandro de las Indias Orientales.</p>
<div class="flex items-center justify-between mt-auto">
<span class="font-label-sm text-body-lg text-secondary">$3,199.00</span>
<button aria-label="Add to cart" class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-on-primary-fixed-variant transition-colors">
<span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-surface rounded-lg border border-surface-variant overflow-hidden shadow-[0_10px_30px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group">
<div class="h-64 bg-surface-container-lowest p-6 flex items-center justify-center relative">
<div class="absolute top-4 left-4 bg-tertiary-fixed-dim/30 text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-[11px] tracking-wider uppercase">
                                Piano
                            </div>
<img alt="sleek black digital stage piano on stand neutral bright background" class="max-h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-500" data-alt="sleek black digital stage piano on stand neutral bright background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKW16s8dpy9ekQMXSeFMfYvkpZylIYKFTFHv_zMdteOxbTqKzBvpqrO8oGeDKqmvDmfoiZ7FCDwC3RJEzJ388h6s0ofvhOH6OdGSGorahY8PlCbiMjsywZznllShHk8AlEnk0MuHLdMHOAFHmMVoOi9zu2jPPuMd9pFK_83OVnzIX-H_VHiKhG7Er6jFi0NCBcSRuNjhzWxusIqHQ30nIrlVcUDF7IreEEWyAYyiWl8ABvuyJYJH7R72v6SA4LYL2_LT87hN0HYXk"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<h3 class="font-headline-sm text-[18px] font-semibold text-on-surface mb-1 line-clamp-2">Nord Stage 3 88</h3>
<p class="font-body-md text-sm text-on-surface-variant mb-4 flex-grow">El estándar de la industria para presentaciones en vivo.</p>
<div class="flex items-center justify-between mt-auto">
<span class="font-label-sm text-body-lg text-secondary">$4,499.00</span>
<button aria-label="Add to cart" class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-on-primary-fixed-variant transition-colors">
<span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-surface rounded-lg border border-surface-variant overflow-hidden shadow-[0_10px_30px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group">
<div class="h-64 bg-surface-container-lowest p-6 flex items-center justify-center relative">
<div class="absolute top-4 left-4 bg-tertiary-fixed-dim/30 text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-[11px] tracking-wider uppercase">
                                Accessories
                            </div>
<img alt="premium over ear studio monitor headphones resting on soft light surface" class="max-h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-500" data-alt="premium over ear studio monitor headphones resting on soft light surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRHwMgGqMQvfjSU_Eh-FqwTA3-64cysNJD357SubDnPUB96hj8c6IwT1jpcGlQflEXrQm8aDkJROB3s2OG8n98J4UWI6HSQF0SnyJyvI-s8Nuenn8c4whDaOHlIMgrnLt1ch95rN132sURw51UyJG7qbBQ97yu6pD2Gu-nDV_X136ntlGNX-00NG0dPnQjCKS4NdS2pVhSwifEpGq4i6Oz0Jazm7Wth5kTHjaKyr6w_lLKpAuXXZT9NnVOfB8wCzlGxepySQpJYSo"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<h3 class="font-headline-sm text-[18px] font-semibold text-on-surface mb-1 line-clamp-2">Audio-Technica ATH-M50x</h3>
<p class="font-body-md text-sm text-on-surface-variant mb-4 flex-grow">Monitores de estudio profesionales.</p>
<div class="flex items-center justify-between mt-auto">
<span class="font-label-sm text-body-lg text-secondary">$149.00</span>
<button aria-label="Add to cart" class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-on-primary-fixed-variant transition-colors">
<span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 4 -->
<div class="bg-surface rounded-lg border border-surface-variant overflow-hidden shadow-[0_10px_30px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col group">
<div class="h-64 bg-surface-container-lowest p-6 flex items-center justify-center relative">
<div class="absolute top-4 left-4 bg-tertiary-fixed-dim/30 text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-[11px] tracking-wider uppercase">
                                Percussion
                            </div>
<img alt="high quality acoustic drum kit snare and cymbals on clean studio background" class="max-h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-500" data-alt="high quality acoustic drum kit snare and cymbals on clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB91cI2zv0L-wULBrDDg_DdFu-SNkG2J8rZjCn_IkaE-PqY-hpsEVRQGeSt4Qiv676jFq2lVUdcXDsm3IwmGeoqcQ4xlMvPoZTy6wNWNtyE5GJn3B5wZKiIzZeMN-QRd72Nz-3HP8qt2D0V-79N7mKUJGuaqa79HcemJMFUrDOwGAvAdnMKm4tCtGz02DZjvQJ8z23BVpz9oLIfxcQUQv6yvdg9jdz1OUbMqQPqZHHs1Z8mMJZbpxtnBeHeXkPINQpXmLDSKXntn78"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<h3 class="font-headline-sm text-[18px] font-semibold text-on-surface mb-1 line-clamp-2">Ludwig Supraphonic Snare</h3>
<p class="font-body-md text-sm text-on-surface-variant mb-4 flex-grow">El redoblante más grabado de la historia.</p>
<div class="flex items-center justify-between mt-auto">
<span class="font-label-sm text-body-lg text-secondary">$599.00</span>
<button aria-label="Add to cart" class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-on-primary-fixed-variant transition-colors">
<span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Sobre Nosotros -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap mb-section-gap">
<div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div class="lg:w-1/2">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Tranquilidad, Expertise y Pasión por la Música</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
                        Más que una tienda, Zona Música es un refugio para creadores. Durante más de dos décadas, hemos cultivado un espacio donde los músicos pueden sentir, probar y enamorarse de su próximo instrumento en un ambiente cálido y sin presiones.
                    </p>
<p class="font-body-md text-body-md text-on-surface-variant mb-10">
                        Nuestros especialistas no son vendedores; son luthiers, concertistas y técnicos de audio listos para guiarte hacia el equipo que elevará tu arte.
                    </p>
<button class="border border-outline text-on-surface-variant px-8 py-3 rounded-full font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container hover:text-on-surface transition-all duration-300">
                        Conoce a los Expertos
                    </button>
</div>
<div class="lg:w-1/2 relative">
<div class="absolute -inset-4 bg-tertiary-fixed-dim/20 rounded-2xl transform rotate-2"></div>
<img alt="interior of a premium high-end music store with wooden floors warm lighting neatly arranged acoustic guitars and an inviting tranquil atmosphere" class="relative rounded-xl shadow-[0_20px_50px_rgba(78,70,59,0.15)] w-full h-auto object-cover aspect-[4/3]" data-alt="interior of a premium high-end music store with wooden floors warm lighting neatly arranged acoustic guitars and an inviting tranquil atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBySq3EqIGlrLACwlkr2Hu4DZyvWy2n6DR4hfgNFZoi_X4QUYP5tV8xx2yPUKXR_idwqN9GZZLhRi-GZ0FyG7QRCTZMC1k_GIlBSeJafqk5y5Z8v7M7KhXX-BLUyCqsSoEzamU2DlpeJfVUyfydwnBH_cjoG_xsd-dm38oCeG8jNkcdAALsNe-83DyKiuvvpMD5xeUQbALpGpJH7b2ssOUo4dsjtUJnl8eg_tOktsuk4BROL-MoZbMTQZF1YN2DG_is3zgA1NwmeZE"/>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-24 bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 flat font-serif text-stone-700 dark:text-stone-300">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
<!-- Brand & Copyright -->
<div class="flex flex-col justify-between">
<div>
<h4 class="text-xl font-bold italic text-stone-900 dark:text-white mb-4">Zona Música</h4>
<p class="text-stone-500 dark:text-stone-400 font-body-md text-sm max-w-xs">
                        Tu destino premium para instrumentos musicales de alta calidad y asesoramiento experto.
                    </p>
</div>
<div class="mt-8 text-stone-500 dark:text-stone-400 font-label-sm text-sm">
                    © 2024 Zona Música. Crafted for Creators.
                </div>
</div>
<!-- Links Column 1 -->
<div class="flex flex-col space-y-4">
<h5 class="text-stone-900 dark:text-white font-bold mb-2">Soporte</h5>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Contact Us</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Shipping &amp; Returns</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
</div>
<!-- Links Column 2 -->
<div class="flex flex-col space-y-4">
<h5 class="text-stone-900 dark:text-white font-bold mb-2">Visítanos</h5>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Expert Consultation</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Store Locator</a>
<div class="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
<button class="flex items-center space-x-2 text-[#B32821] hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span class="font-bold underline-offset-4 hover:underline">Chat with a Specialist</span>
</button>
</div>
</div>
</div>
</footer>
</body></html>

<!-- Búsqueda - Guitarras Eléctricas -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zona Música - Search Results</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-surface": "#1a1c1b",
                    "background": "#faf9f7",
                    "on-tertiary": "#ffffff",
                    "inverse-surface": "#2f3130",
                    "surface-container": "#efeeec",
                    "on-primary-fixed-variant": "#910a0c",
                    "primary-container": "#b32821",
                    "secondary": "#825422",
                    "tertiary-fixed-dim": "#d1c5b7",
                    "on-tertiary-fixed": "#211b12",
                    "on-primary-container": "#ffccc6",
                    "primary-fixed-dim": "#ffb4aa",
                    "on-primary-fixed": "#410001",
                    "inverse-on-surface": "#f1f1ef",
                    "secondary-fixed": "#ffdcbd",
                    "surface": "#faf9f7",
                    "on-primary": "#ffffff",
                    "secondary-fixed-dim": "#f7bb7e",
                    "primary-fixed": "#ffdad5",
                    "on-tertiary-container": "#e3d7c9",
                    "surface-tint": "#b32821",
                    "on-secondary": "#ffffff",
                    "on-background": "#1a1c1b",
                    "tertiary-fixed": "#eee0d2",
                    "on-tertiary-fixed-variant": "#4e453b",
                    "on-error": "#ffffff",
                    "surface-container-highest": "#e3e2e0",
                    "surface-bright": "#faf9f7",
                    "on-error-container": "#93000a",
                    "inverse-primary": "#ffb4aa",
                    "tertiary": "#4e463b",
                    "secondary-container": "#fdc083",
                    "surface-container-low": "#f4f3f1",
                    "error": "#ba1a1a",
                    "error-container": "#ffdad6",
                    "outline-variant": "#e2beba",
                    "primary": "#900a0c",
                    "on-secondary-fixed-variant": "#663d0b",
                    "surface-container-high": "#e9e8e6",
                    "surface-container-lowest": "#ffffff",
                    "on-surface-variant": "#5a413d",
                    "on-secondary-container": "#784c1a",
                    "outline": "#8e706c",
                    "surface-dim": "#dadad8",
                    "surface-variant": "#e3e2e0",
                    "tertiary-container": "#665d52",
                    "on-secondary-fixed": "#2c1600"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "section-gap": "120px",
                    "margin-mobile": "16px",
                    "margin-desktop": "64px",
                    "base": "8px"
            },
            "fontFamily": {
                    "body-md": [
                            "Manrope"
                    ],
                    "label-sm": [
                            "Manrope"
                    ],
                    "headline-lg": [
                            "Noto Serif"
                    ],
                    "headline-md": [
                            "Noto Serif"
                    ],
                    "headline-xl": [
                            "Noto Serif"
                    ],
                    "body-lg": [
                            "Manrope"
                    ]
            },
            "fontSize": {
                    "body-md": [
                            "16px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ],
                    "label-sm": [
                            "13px",
                            {
                                    "lineHeight": "1.2",
                                    "letterSpacing": "0.05em",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-lg": [
                            "32px",
                            {
                                    "lineHeight": "1.3",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-md": [
                            "24px",
                            {
                                    "lineHeight": "1.4",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-xl": [
                            "48px",
                            {
                                    "lineHeight": "1.2",
                                    "fontWeight": "700"
                            }
                    ],
                    "body-lg": [
                            "18px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ]
            }
    },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
<!-- TopNavBar Shared Component -->
<header class="bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md text-[#B32821] dark:text-red-500 font-serif antialiased text-stone-800 dark:text-stone-200 fixed top-0 w-full z-50 border-b border-stone-200 dark:border-stone-800 shadow-[0_20px_50px_rgba(74,66,56,0.05)]">
<div class="flex justify-between items-center h-20 px-8 lg:px-16 max-w-[1920px] mx-auto">
<div class="text-2xl font-serif font-bold text-[#B32821] tracking-tight">
                Zona Música
            </div>
<nav class="hidden md:flex space-x-8">
<!-- Active Navigation: Guitars -->
<a class="text-[#B32821] border-b-2 border-[#B32821] pb-1 hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Guitars</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Piano</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Percussion</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Brass</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Strings</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Accessories</a>
</nav>
<div class="flex items-center space-x-6">
<!-- Search Bar on Right -->
<div class="relative hidden sm:block">
<input class="bg-surface-container rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 border-none w-48 transition-all duration-300" placeholder="Search..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-sm" data-icon="search">search</span>
</div>
<a class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</a>
<a class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
</a>
</div>
</div>
</header>
<!-- Main Layout Container -->
<div class="flex-1 flex max-w-[1920px] mx-auto w-full pt-20">
<!-- SideNavBar Shared Component -->
<aside class="bg-white dark:bg-stone-900 text-[#B32821] dark:text-red-500 font-serif text-sm tracking-wide h-full w-72 rounded-r-lg border-r border-stone-100 dark:border-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-none hidden lg:flex flex-col py-8 gap-4 sticky top-20">
<div class="px-6 pb-4">
<h2 class="font-headline-md text-headline-md text-on-surface">Browse Gear</h2>
<p class="font-body-md text-body-md text-on-surface-variant opacity-80 mt-1">Expertly curated selection</p>
</div>
<nav class="flex flex-col gap-1 w-full">
<!-- Active Filter Tab -->
<div class="bg-stone-100 dark:bg-stone-800 text-[#B32821] font-semibold border-r-4 border-[#B32821] hover:pl-2 transition-all duration-300 cursor-pointer flex items-center px-6 py-3">
<span class="material-symbols-outlined mr-3 text-[20px]" data-icon="filter_list">filter_list</span>
<span>Filters</span>
</div>
<!-- Inactive Filter Tabs -->
<div class="text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50 hover:pl-2 transition-all duration-300 cursor-pointer flex items-center px-6 py-3">
<span class="material-symbols-outlined mr-3 text-[20px]" data-icon="category">category</span>
<span>Categories</span>
</div>
<div class="text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50 hover:pl-2 transition-all duration-300 cursor-pointer flex items-center px-6 py-3">
<span class="material-symbols-outlined mr-3 text-[20px]" data-icon="payments">payments</span>
<span>Price Range</span>
</div>
<div class="text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50 hover:pl-2 transition-all duration-300 cursor-pointer flex items-center px-6 py-3">
<span class="material-symbols-outlined mr-3 text-[20px]" data-icon="verified">verified</span>
<span>Brand</span>
</div>
<div class="text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50 hover:pl-2 transition-all duration-300 cursor-pointer flex items-center px-6 py-3">
<span class="material-symbols-outlined mr-3 text-[20px]" data-icon="history_edu">history_edu</span>
<span>Condition</span>
</div>
</nav>
</aside>
<!-- Main Content Area -->
<main class="flex-1 px-8 lg:px-16 py-12">
<div class="mb-12 flex justify-between items-end border-b border-surface-variant pb-6">
<div>
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">Guitarras Eléctricas</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Showing 24 high-end instruments</p>
</div>
<div class="flex gap-2">
<span class="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full">Solid Body</span>
<span class="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full">6-String</span>
</div>
</div>
<!-- Product Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
<!-- Product Card 1 -->
<div class="group bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
<div class="h-64 bg-surface-container-low relative overflow-hidden p-6 flex items-center justify-center">
<img alt="Electric Guitar" class="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" data-alt="close up of a vintage sunburst electric guitar leaning against a dark textured wall in soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuFpwTf3qfX2sAz9aTUF12Huqh__dyIjWK9-Lk1HlRvYvm2NglykbAhSdV-L8FnRd0_bfh3v_SBE1guJseDcCncGIQXhgZnEW5TfrRYJUvLYGajevO-Z_NPrsoXQpd_8HzYUUDWNtgTqpCWEQRYDXymum2mHRHB5ZOI11IbQ-0mW04fgQ-oE33HNzOI7Fl1K99Hn01nusnkDSpLu2R96-x-akSMXVmLA1P8WIXpeXsG0HiKXRvLaYUhjrYqiAlh4B7Kx2HKuscqsU"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Fender</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4 leading-tight">American Vintage II 1961 Stratocaster</h3>
<div class="mt-auto flex items-center justify-between">
<span class="font-headline-md text-[20px] text-on-surface font-semibold">$2,249.99</span>
<button class="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-5 py-2.5 rounded-full hover:bg-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="shopping_cart">shopping_cart</span>
                                Add
                            </button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="group bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
<div class="h-64 bg-surface-container-low relative overflow-hidden p-6 flex items-center justify-center">
<img alt="Electric Guitar" class="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" data-alt="sleek modern black electric guitar resting on a premium velvet surface with dramatic rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjhhfL36x-m71WZjGIT1dEnqHZ-mHEbp70mD65vW1by4szq-nui8yDeYow_rN01dvwkzlP6LA5nBHjMCntmbGRGWwEVQIPaOrW-UJYIqvoOjA0Hiu-HCD-6WFUfkTF12xyltg1gAyfxkCuCnWLxYgclWqcS_Uds1nPS1oIDccvZcGudQNTyKfAAnrgNqihiN9Djbpsre-kBBqzqSTgzTVKzGndsEKoSG8QIhX5XmTH3o8LuaKHOqelfJykgWty7Y-rxGBrszRofwQ"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Gibson</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4 leading-tight">Les Paul Standard '50s Figured Top</h3>
<div class="mt-auto flex items-center justify-between">
<span class="font-headline-md text-[20px] text-on-surface font-semibold">$2,999.00</span>
<button class="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-5 py-2.5 rounded-full hover:bg-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="shopping_cart">shopping_cart</span>
                                Add
                            </button>
</div>
</div>
</div>
<!-- Product Card 3 -->
<div class="group bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(78,70,59,0.05)] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
<div class="h-64 bg-surface-container-low relative overflow-hidden p-6 flex items-center justify-center">
<img alt="Electric Guitar" class="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" data-alt="classic hollow body electric guitar in cherry red finish standing upright in a softly lit rustic music room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Z6HIAEFl1eP-CPwEn5ACrg_lPJqspSCKzDnJ_Y5hGdxser6D3OG3zvIVn7C_QKr7QaCjXW0UUL8fub_vEG1camOoDVf9Y35Fij66cb6OSZFxQrC9Ukl6IoDim1CNNiuhOvKkFt6fefnm_ZpMhtj4rH5OTqdQ9mWxgEqcO7GrZEDSNRc52vYjD8afmRtlN3jiZjbyVebrkSQEYBpFDK7aWBktr5GF_WUyuU_kTa6xx9rWaKi8glp7vkR1hMyvS9wTjNzfc8CT_V8"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Gretsch</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-4 leading-tight">G6120T Players Edition Nashville</h3>
<div class="mt-auto flex items-center justify-between">
<span class="font-headline-md text-[20px] text-on-surface font-semibold">$2,599.99</span>
<button class="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-5 py-2.5 rounded-full hover:bg-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="shopping_cart">shopping_cart</span>
                                Add
                            </button>
</div>
</div>
</div>
</div>
<div class="mt-16 flex justify-center">
<button class="border border-outline text-on-surface font-label-sm text-label-sm px-8 py-3 rounded-full hover:bg-surface-container-highest transition-colors">
                    Load More Instruments
                </button>
</div>
</main>
</div>
<!-- Footer Shared Component -->
<footer class="bg-stone-100 dark:bg-stone-950 text-[#B32821] dark:text-red-500 font-serif text-stone-700 dark:text-stone-300 w-full mt-24 border-t border-stone-200 dark:border-stone-800">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
<div>
<div class="text-xl font-bold italic text-stone-900 dark:text-white mb-6">
                    Zona Música
                </div>
<p class="font-body-md text-body-md text-stone-500 dark:text-stone-400">© 2024 Zona Música. Crafted for Creators.</p>
</div>
<div class="flex flex-col gap-4">
<!-- Links -->
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Contact Us</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Shipping &amp; Returns</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Expert Consultation</a>
</div>
<div class="flex flex-col gap-4">
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Store Locator</a>
</div>
</div>
</footer>
</body></html>

<!-- Yamaha Pacifica - Detalle de Producto -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Yamaha Pacifica Electric Guitar - Zona Música</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-surface": "#1a1c1b",
                    "background": "#faf9f7",
                    "on-tertiary": "#ffffff",
                    "inverse-surface": "#2f3130",
                    "surface-container": "#efeeec",
                    "on-primary-fixed-variant": "#910a0c",
                    "primary-container": "#b32821",
                    "secondary": "#825422",
                    "tertiary-fixed-dim": "#d1c5b7",
                    "on-tertiary-fixed": "#211b12",
                    "on-primary-container": "#ffccc6",
                    "primary-fixed-dim": "#ffb4aa",
                    "on-primary-fixed": "#410001",
                    "inverse-on-surface": "#f1f1ef",
                    "secondary-fixed": "#ffdcbd",
                    "surface": "#faf9f7",
                    "on-primary": "#ffffff",
                    "secondary-fixed-dim": "#f7bb7e",
                    "primary-fixed": "#ffdad5",
                    "on-tertiary-container": "#e3d7c9",
                    "surface-tint": "#b32821",
                    "on-secondary": "#ffffff",
                    "on-background": "#1a1c1b",
                    "tertiary-fixed": "#eee0d2",
                    "on-tertiary-fixed-variant": "#4e453b",
                    "on-error": "#ffffff",
                    "surface-container-highest": "#e3e2e0",
                    "surface-bright": "#faf9f7",
                    "on-error-container": "#93000a",
                    "inverse-primary": "#ffb4aa",
                    "tertiary": "#4e463b",
                    "secondary-container": "#fdc083",
                    "surface-container-low": "#f4f3f1",
                    "error": "#ba1a1a",
                    "error-container": "#ffdad6",
                    "outline-variant": "#e2beba",
                    "primary": "#900a0c",
                    "on-secondary-fixed-variant": "#663d0b",
                    "surface-container-high": "#e9e8e6",
                    "surface-container-lowest": "#ffffff",
                    "on-surface-variant": "#5a413d",
                    "on-secondary-container": "#784c1a",
                    "outline": "#8e706c",
                    "surface-dim": "#dadad8",
                    "surface-variant": "#e3e2e0",
                    "tertiary-container": "#665d52",
                    "on-secondary-fixed": "#2c1600"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "section-gap": "120px",
                    "margin-mobile": "16px",
                    "margin-desktop": "64px",
                    "base": "8px"
            },
            "fontFamily": {
                    "body-md": [
                            "Manrope"
                    ],
                    "label-sm": [
                            "Manrope"
                    ],
                    "headline-lg": [
                            "Noto Serif"
                    ],
                    "headline-md": [
                            "Noto Serif"
                    ],
                    "headline-xl": [
                            "Noto Serif"
                    ],
                    "body-lg": [
                            "Manrope"
                    ]
            },
            "fontSize": {
                    "body-md": [
                            "16px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ],
                    "label-sm": [
                            "13px",
                            {
                                    "lineHeight": "1.2",
                                    "letterSpacing": "0.05em",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-lg": [
                            "32px",
                            {
                                    "lineHeight": "1.3",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-md": [
                            "24px",
                            {
                                    "lineHeight": "1.4",
                                    "fontWeight": "600"
                            }
                    ],
                    "headline-xl": [
                            "48px",
                            {
                                    "lineHeight": "1.2",
                                    "fontWeight": "700"
                            }
                    ],
                    "body-lg": [
                            "18px",
                            {
                                    "lineHeight": "1.6",
                                    "fontWeight": "400"
                            }
                    ]
            }
    },
        },
      }
    </script>
</head>
<body class="bg-background text-on-background font-body-md text-body-md antialiased pt-20">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-[0_20px_50px_rgba(74,66,56,0.05)]">
<div class="flex justify-between items-center h-20 px-8 lg:px-16 max-w-[1920px] mx-auto">
<div class="text-2xl font-serif font-bold text-[#B32821] tracking-tight">Zona Música</div>
<nav class="hidden md:flex gap-8">
<a class="text-[#B32821] border-b-2 border-[#B32821] pb-1 font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Guitars</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Piano</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Percussion</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Brass</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Strings</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] font-serif antialiased hover:opacity-80 transition-all duration-300 active:scale-95 duration-200" href="#">Accessories</a>
</nav>
<div class="flex items-center gap-4 text-[#B32821] dark:text-red-500">
<button class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200">
<span class="material-symbols-outlined">shopping_cart</span>
</button>
<button class="hover:opacity-80 transition-all duration-300 active:scale-95 duration-200">
<span class="material-symbols-outlined">person</span>
</button>
</div>
</div>
</header>
<main class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
<!-- Breadcrumbs -->
<div class="flex items-center gap-2 text-surface-variant-dark text-sm mb-8">
<a class="hover:text-primary transition-colors" href="#">Home</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Guitars</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Electric</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-on-surface">Yamaha Pacifica</span>
</div>
<!-- Product Hero -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-gap">
<!-- Image Gallery (Left) -->
<div class="lg:col-span-7 flex flex-col gap-4">
<div class="bg-surface-container rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(74,66,56,0.05)] border border-surface-variant aspect-[4/3] flex items-center justify-center">
<img alt="Yamaha Pacifica Electric Guitar" class="w-full h-full object-cover" data-alt="high quality studio photo of a glossy electric guitar resting diagonally against a clean light background, soft diffuse lighting highlighting the polished finish and metal hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXvkFXthEJJmrf1ewUL2r83WHlYYRWV3PgIwyN0rpsb0fUxG1WVNdDSCykoQd20GyQOa9w_hIUBHsHZwrPI1Z1GuR2EigugD1WqGValPiAYXH4Dx1YqtmrhZMbyCzRqSHdwN3V7b7GjqMAc60JO3vU465-xZZIvn9QYkrKGf9kKXSjzZuZDHhpNvTy7OdH9yYUcCft5Fx7HO-bvJzlcSZrv4RNEwuYyi5yxbzv2ZtxtP7OJPvtBFmkIpdIOttkeZJoTEcHKepJrzo"/>
</div>
<div class="grid grid-cols-4 gap-4">
<div class="bg-surface-container rounded-lg overflow-hidden border border-surface-variant aspect-square cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Guitar Headstock" class="w-full h-full object-cover" data-alt="close up of electric guitar headstock showing tuning pegs and brand logo, shallow depth of field, warm studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj-2d_wq2WdrBUcmbr2JhWczffuLzhsqFJP9S-iUEIzWVscrkb-Y_9GYIU-uLAHTJLQHRMQ70-6XT7RHOGZt6nS_f1QNxOywq-8Ibi9hcD6iLaSQGEk9sJtFncUFHvz-d6PpkSAYqXEE2_Q6cwOdOwoDl7riMl6xocLq15fW19o8udHPyE3t3uty8oDm4L8xbXmyMqtHzz2Xu7ORmFd8b3i1fNAM1PXrd0xbeAkUkbGJB0agQXCqYeVRKxPLLNptiKJAsqPvJRsIE"/>
</div>
<div class="bg-surface-container rounded-lg overflow-hidden border border-surface-variant aspect-square cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Guitar Pickups" class="w-full h-full object-cover" data-alt="macro shot of electric guitar pickups and strings, emphasizing the metallic textures and coils, moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJMOYnSCSh60ddDjOn2f4oCGdo2EsBwFFZMhaM9mZWiXT2VbChLWK8lwIydOzPjw-_ofFE3vQ-RtlJrjI-dLHkQ2CkxJy7zRkU4Jx4Dof8eu7xxy7scWO9-J9HU6N-sGcXTilQ-JaVdXJIToxKTaz9ul8Q6GhuWkhK9sxGsQ0VEL-U-nB_YwfowDKpx11cJS6pl1phZvN-iykF5b4NixsRpWkzb4VUxWf6pQO2Eg5GN4g2M4-Pp5poXdZjUNOezrzDYyI9-RKmpc"/>
</div>
<div class="bg-surface-container rounded-lg overflow-hidden border border-surface-variant aspect-square cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Guitar Body" class="w-full h-full object-cover" data-alt="detail shot of guitar body contour and volume knobs, showing the rich wood grain and glossy finish under soft light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9xVm5B9BkkL3sNkoFVH15uewt5kSxz0nVJpPWZDBpnLfcum8qTzMFEAUYLYE1YNPhB1uxCxcObGoD_OEtu67OEzvg620zikHzJ2W5lQp8S0XIzwRBsZO7G9eJ1kt_Uf8c_f9BKhLG445dXLZ1PrQL6T4PokeAZhQk27tKxZOZAc5HaVmEl3sF9JEGe87CLArs0VB3-oZ3UHpGF46ucnKcCbVPtB-dwqzFAasxTMUYUpP-alyxZKaY2P7cnMWKHZVU19cULT77gc"/>
</div>
<div class="bg-surface-container rounded-lg overflow-hidden border border-surface-variant aspect-square cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-tertiary-fixed text-on-tertiary-fixed">
<span class="material-symbols-outlined text-[32px]">play_circle</span>
</div>
</div>
</div>
<!-- Product Details (Right) -->
<div class="lg:col-span-5 flex flex-col pt-4">
<div class="inline-flex items-center gap-2 mb-4">
<span class="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Electric Guitars</span>
<span class="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Best Seller</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">Yamaha Pacifica 112V</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-6">Versatile tone, exceptional playability, and premium build quality for players of all levels.</p>
<div class="flex items-end gap-4 mb-8">
<span class="font-headline-lg text-headline-lg text-primary">$329.99</span>
<span class="font-body-md text-body-md text-on-surface-variant line-through mb-1">$399.99</span>
</div>
<div class="mb-8">
<h3 class="font-label-sm text-label-sm text-on-surface-variant mb-3">Color: <span class="text-on-surface">Vintage White</span></h3>
<div class="flex gap-3">
<button class="w-10 h-10 rounded-full bg-[#fdfbf7] border-2 border-primary shadow-sm"></button>
<button class="w-10 h-10 rounded-full bg-[#1a1a1a] border border-outline shadow-sm hover:border-outline-variant transition-colors"></button>
<button class="w-10 h-10 rounded-full bg-[#8b0000] border border-outline shadow-sm hover:border-outline-variant transition-colors"></button>
</div>
</div>
<div class="flex flex-col gap-4 mb-8">
<button class="w-full bg-primary text-on-primary py-4 rounded-lg font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md flex items-center justify-center gap-2">
<span class="material-symbols-outlined">shopping_cart</span>
                        Add to Cart
                    </button>
<div class="grid grid-cols-2 gap-4">
<button class="w-full bg-transparent text-secondary border border-secondary py-3 rounded-lg font-label-sm text-label-sm hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors flex items-center justify-center gap-2">
                            Buy Now
                        </button>
<button class="w-full bg-surface-container-low text-on-surface py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined">favorite_border</span>
                            Save
                        </button>
</div>
</div>
<div class="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 shadow-sm">
<div class="flex items-center gap-4 mb-4">
<span class="material-symbols-outlined text-secondary text-[24px]">local_shipping</span>
<div>
<h4 class="font-label-sm text-label-sm text-on-surface">Free Standard Shipping</h4>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Delivery in 3-5 business days</p>
</div>
</div>
<hr class="border-surface-variant my-4"/>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-secondary text-[24px]">verified</span>
<div>
<h4 class="font-label-sm text-label-sm text-on-surface">2-Year Warranty</h4>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Official Yamaha guarantee</p>
</div>
</div>
</div>
</div>
</div>
<!-- Description & Specs Bento Grid -->
<div class="mb-section-gap">
<div class="flex items-center gap-4 mb-8">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Details &amp; Specifications</h2>
<div class="h-px bg-surface-variant flex-grow"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Description -->
<div class="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 border border-surface-variant shadow-[0_10px_30px_rgba(74,66,56,0.03)]">
<h3 class="font-headline-md text-headline-md text-on-surface mb-4">The Player's Choice</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">
                        First launched in 1990, the Pacifica series was driven by the California session scene of the day-where versatility, performance and individuality were key. Inspired by those custom-shop guitars, and that original vision, the Pacifica 112V continues to offer exceptional tone and playability.
                    </p>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
                        Featuring custom wound Alnico V pickups for a classic, warm humbucker sound alongside crisp single coils, a push-pull coil split for maximum versatility, and a vintage-style tremolo with block saddles for enhanced sustain.
                    </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
<div class="flex gap-4">
<span class="material-symbols-outlined text-primary mt-1">graphic_eq</span>
<div>
<h4 class="font-label-sm text-label-sm text-on-surface mb-1">Alnico V Pickups</h4>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Custom wound pickups deliver a clear, punchy tone.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-primary mt-1">toggle_on</span>
<div>
<h4 class="font-label-sm text-label-sm text-on-surface mb-1">Coil Tap</h4>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Push-pull tone pot allows for quick switching between humbucker and single-coil tones.</p>
</div>
</div>
</div>
</div>
<!-- Specs -->
<div class="bg-surface-container rounded-xl p-8 border border-surface-variant shadow-[0_10px_30px_rgba(74,66,56,0.03)] flex flex-col justify-between">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-6">Tech Specs</h3>
<ul class="flex flex-col gap-4">
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Body Material</span>
<span class="font-body-md text-body-md text-on-surface text-right">Alder</span>
</li>
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Neck Material</span>
<span class="font-body-md text-body-md text-on-surface text-right">Maple</span>
</li>
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Fretboard</span>
<span class="font-body-md text-body-md text-on-surface text-right">Rosewood</span>
</li>
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Frets</span>
<span class="font-body-md text-body-md text-on-surface text-right">22 Medium</span>
</li>
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Pickups</span>
<span class="font-body-md text-body-md text-on-surface text-right">HSS (Alnico V)</span>
</li>
<li class="flex justify-between border-b border-outline-variant pb-2">
<span class="font-label-sm text-label-sm text-on-surface-variant">Bridge</span>
<span class="font-body-md text-body-md text-on-surface text-right">Vintage Tremolo</span>
</li>
</ul>
</div>
<button class="w-full mt-6 bg-transparent text-primary py-2 font-label-sm text-label-sm hover:underline transition-all">Download Full Manual PDF</button>
</div>
</div>
</div>
<!-- Related Products (Productos Relacionados) -->
<div class="mb-12">
<div class="flex items-center justify-between mb-8">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Productos Relacionados</h2>
<a class="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors flex items-center gap-1" href="#">
                    View All <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Card 1 -->
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant hover:shadow-[0_20px_40px_rgba(74,66,56,0.08)] transition-all duration-300">
<div class="aspect-square bg-surface-container overflow-hidden relative">
<img alt="Yamaha THR10II Amplifier" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="small stylish desktop guitar amplifier sitting on a wooden desk, warm room lighting, clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLBeBSw8aFzXKOKzxWpWdLwUaa11uCVMjBpRH_C4TPmUSsnq0PGxnbPZ4oX1holDCupnmBnZ7WA_einzf4xnETKl-x8qeRYBko81dVF6ndXz6PbHGHRnZG39Mi2OX54sHMwfD-GrpmAZuOT6MJc3Z42zDRD64UBQRdLTJkGosI2YJcpnFfRlrYiX6cq5zhllAKKOQqnvEXKi3x5dpuFnCxvMqPmaDIrPTmaWo9jXV3H4vS-SKbXnDOuLBEJ-kKRU_iqjbIeFF2_Qg"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite_border</span>
</button>
</div>
<div class="p-4">
<div class="text-xs font-label-sm text-on-surface-variant mb-1">Amplifiers</div>
<h3 class="font-headline-md text-[18px] text-on-surface mb-2 truncate">Yamaha THR10II Amp</h3>
<div class="font-label-sm text-label-sm text-primary">$329.99</div>
</div>
</div>
<!-- Card 2 -->
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant hover:shadow-[0_20px_40px_rgba(74,66,56,0.08)] transition-all duration-300">
<div class="aspect-square bg-surface-container overflow-hidden relative">
<img alt="Fender Player Stratocaster" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="classic sunburst electric guitar standing upright in a minimal studio setting, soft diffuse light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_eHN3ZzBj7nUbh073ZpGZqBNRW3sleGErt0duEqxL6VaSAl_w7TGdS8i6U_adhwXBlLdbaeyDRkfvmlUBe-k8XylwJBujnesAjFumOyuZc2qjGaRzJobiJy13AZ5iocACmL4xUY1NgCAFmyWJeBrPDz68-pRyLBsatriDFb1btfiM1mrIQ6LCTfNlZ7vvhy0NT8oO1kGQDq1avtyAIPMHzi18_NI29M2JV_Cdbt49ovuVNoBtdwGFUuIxdRdhaCQZWQQwbU_TSGc"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite_border</span>
</button>
</div>
<div class="p-4">
<div class="text-xs font-label-sm text-on-surface-variant mb-1">Electric Guitars</div>
<h3 class="font-headline-md text-[18px] text-on-surface mb-2 truncate">Fender Player Strat</h3>
<div class="font-label-sm text-label-sm text-primary">$799.99</div>
</div>
</div>
<!-- Card 3 -->
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant hover:shadow-[0_20px_40px_rgba(74,66,56,0.08)] transition-all duration-300">
<div class="aspect-square bg-surface-container overflow-hidden relative">
<img alt="Guitar Strap" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="premium leather guitar strap rolled up on a light textured surface, showing stitching details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA662lF8BrZrf_6V93iKecf5R-yzCUFyc0Ps0uSAA6aremfk8pV-hI6O7ivRlFbB96fFsATskg3XF9aietwe9lrIl_dj5Yj0o3UskrV2AqU0DF9BgQYq9oQJX9Q12Wa6KnJ4V9zS7VUlwyptdGJ2MdpcSXus2vh6RXQGtREz-nLuCcsrMpPp8xSpEI6_ln9qC38jS0Gj9i8nhtFCG_EeULeh-f7Mp9T-hjUDkZLGtsmmoGWIDlwFUVId6_SeurQEeKKbSFabGJxQ4A"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite_border</span>
</button>
</div>
<div class="p-4">
<div class="text-xs font-label-sm text-on-surface-variant mb-1">Accessories</div>
<h3 class="font-headline-md text-[18px] text-on-surface mb-2 truncate">Premium Leather Strap</h3>
<div class="font-label-sm text-label-sm text-primary">$45.00</div>
</div>
</div>
<!-- Card 4 -->
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant hover:shadow-[0_20px_40px_rgba(74,66,56,0.08)] transition-all duration-300">
<div class="aspect-square bg-surface-container overflow-hidden relative">
<img alt="Guitar Strings" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="pack of electric guitar strings leaning against a vintage guitar pedal, moody studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkC7sZ4ZSlGmLWkNLCZG0ISJLGFIZi01szqkDQ0jGUq7TMRB7Kwy7wYOXp5Dkizdhceys46AXZhmYREBbd-2AGW-UbLS_Xy1-EvATfhFOUcyc-EiCPZpXWoDOwnG6zgy63PW_mfz_yLcYFMAfQuXLrr0a2F959Of43AB4L_Ak-XFjuOJNDgnCxN7ZLnnqBE9y3vHMGdFouwx7IpPpDg6FaJOyksqatagJwCCTmX3TArrNeXwOGLHgK0BaEHgPikxnJeInqyvyCv98"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite_border</span>
</button>
</div>
<div class="p-4">
<div class="text-xs font-label-sm text-on-surface-variant mb-1">Accessories</div>
<h3 class="font-headline-md text-[18px] text-on-surface mb-2 truncate">Ernie Ball Super Slinky</h3>
<div class="font-label-sm text-label-sm text-primary">$6.99</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-stone-100 dark:bg-stone-950 w-full mt-24 border-t border-stone-200 dark:border-stone-800">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
<div>
<div class="text-xl font-bold italic text-stone-900 dark:text-white mb-4">Zona Música</div>
<p class="font-serif text-stone-700 dark:text-stone-300">© 2024 Zona Música. Crafted for Creators.</p>
</div>
<div class="flex flex-col gap-2">
<a class="text-stone-500 dark:text-stone-400 font-serif text-stone-700 dark:text-stone-300 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Contact Us</a>
<a class="text-stone-500 dark:text-stone-400 font-serif text-stone-700 dark:text-stone-300 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Shipping &amp; Returns</a>
<a class="text-stone-500 dark:text-stone-400 font-serif text-stone-700 dark:text-stone-300 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Expert Consultation</a>
</div>
<div class="flex flex-col gap-2">
<a class="text-stone-500 dark:text-stone-400 font-serif text-stone-700 dark:text-stone-300 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a class="text-stone-500 dark:text-stone-400 font-serif text-stone-700 dark:text-stone-300 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Store Locator</a>
</div>
</div>
</footer>
<!-- Expert Consultation FAB -->
<button class="fixed bottom-8 right-8 bg-secondary-container text-on-secondary-container px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(74,66,56,0.15)] hover:bg-secondary-fixed transition-colors flex items-center gap-2 z-40">
<span class="material-symbols-outlined">forum</span>
<span class="font-label-sm text-label-sm">Expert Consultation</span>
</button>
</body></html>

<!-- Carrito de Compras -->
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shopping Cart - Zona Música</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-surface": "#1a1c1b",
                        "background": "#faf9f7",
                        "on-tertiary": "#ffffff",
                        "inverse-surface": "#2f3130",
                        "surface-container": "#efeeec",
                        "on-primary-fixed-variant": "#910a0c",
                        "primary-container": "#b32821",
                        "secondary": "#825422",
                        "tertiary-fixed-dim": "#d1c5b7",
                        "on-tertiary-fixed": "#211b12",
                        "on-primary-container": "#ffccc6",
                        "primary-fixed-dim": "#ffb4aa",
                        "on-primary-fixed": "#410001",
                        "inverse-on-surface": "#f1f1ef",
                        "secondary-fixed": "#ffdcbd",
                        "surface": "#faf9f7",
                        "on-primary": "#ffffff",
                        "secondary-fixed-dim": "#f7bb7e",
                        "primary-fixed": "#ffdad5",
                        "on-tertiary-container": "#e3d7c9",
                        "surface-tint": "#b32821",
                        "on-secondary": "#ffffff",
                        "on-background": "#1a1c1b",
                        "tertiary-fixed": "#eee0d2",
                        "on-tertiary-fixed-variant": "#4e453b",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e3e2e0",
                        "surface-bright": "#faf9f7",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#ffb4aa",
                        "tertiary": "#4e463b",
                        "secondary-container": "#fdc083",
                        "surface-container-low": "#f4f3f1",
                        "error": "#ba1a1a",
                        "error-container": "#ffdad6",
                        "outline-variant": "#e2beba",
                        "primary": "#900a0c",
                        "on-secondary-fixed-variant": "#663d0b",
                        "surface-container-high": "#e9e8e6",
                        "surface-container-lowest": "#ffffff",
                        "on-surface-variant": "#5a413d",
                        "on-secondary-container": "#784c1a",
                        "outline": "#8e706c",
                        "surface-dim": "#dadad8",
                        "surface-variant": "#e3e2e0",
                        "tertiary-container": "#665d52",
                        "on-secondary-fixed": "#2c1600"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "section-gap": "120px",
                        "margin-mobile": "16px",
                        "margin-desktop": "64px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-md": ["Manrope"],
                        "label-sm": ["Manrope"],
                        "headline-lg": ["Noto Serif"],
                        "headline-md": ["Noto Serif"],
                        "headline-xl": ["Noto Serif"],
                        "body-lg": ["Manrope"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "label-sm": ["13px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                        "headline-xl": ["48px", { "lineHeight": "1.2", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md">
<!-- TopNavBar (Nav suppressed as per intent logic for transitional/task pages, but JSON requests it, so we include it but it's a transitional state usually, however prompt specifically requests TopNavBar) -->
<header class="fixed top-0 w-full z-50 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-[0_20px_50px_rgba(74,66,56,0.05)]">
<div class="flex justify-between items-center h-20 px-8 lg:px-16 max-w-[1920px] mx-auto font-serif antialiased text-stone-800 dark:text-stone-200">
<div class="text-2xl font-serif font-bold text-[#B32821] tracking-tight">Zona Música</div>
<nav class="hidden md:flex gap-8">
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Guitars</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Piano</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Percussion</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Brass</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Strings</a>
<a class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300" href="#">Accessories</a>
</nav>
<div class="flex items-center gap-6">
<button aria-label="shopping_cart" class="text-[#B32821] border-b-2 border-[#B32821] pb-1 hover:opacity-80 transition-all duration-300 active:scale-95 duration-200">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
</button>
<button aria-label="person" class="text-stone-600 dark:text-stone-400 hover:text-[#B32821] hover:opacity-80 transition-all duration-300 active:scale-95 duration-200">
<span class="material-symbols-outlined">person</span>
</button>
</div>
</div>
</header>
<main class="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto w-full">
<div class="mb-12">
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">Shopping Cart</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Review your selected instruments and gear.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Cart Items List -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- Item 1 -->
<div class="flex flex-col sm:flex-row gap-6 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm relative group">
<div class="w-full sm:w-48 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
<img alt="Fender Stratocaster" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close-up of a classic sunburst electric guitar body leaning against a vintage amplifier in a dimly lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNQldCCrHgmP30Y6-QkzELVr52tZQirBD2mmmJZG1XeG3zUx6s3zwugdeUU-81s2s6OwTCOYLyzKD_QHyBdnl6YZLkjUIH3Wsiw9qvUrmtyf4Lry04POTxD4PE_bsYHTxUOiXYBnR-gKpH1HONh7SqTzQLLp4SunWgXtWDuNtAFwF3UnNIW7mDn6XsOZvcsg0aVjqPGpXmQbyTH-hEkB4-UbJAEPjFt4urP9nxedQzYoQYRKJT43sRgbt5m3S0uZI_keYQanXWt4Y"/>
</div>
<div class="flex flex-col justify-between flex-grow">
<div>
<div class="flex justify-between items-start mb-2">
<div>
<span class="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm mb-2">Guitars</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Vintage Sunburst Stratocaster</h3>
</div>
<button aria-label="Remove item" class="text-on-surface-variant hover:text-error transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Professional grade solid body electric guitar with maple neck.</p>
</div>
<div class="flex justify-between items-end mt-4">
<div class="flex items-center gap-4 bg-surface-container px-4 py-2 rounded-lg border border-surface-variant">
<button aria-label="Decrease quantity" class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">remove</span>
</button>
<span class="font-label-sm text-label-sm text-on-surface w-4 text-center">1</span>
<button aria-label="Increase quantity" class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">add</span>
</button>
</div>
<span class="font-headline-lg text-headline-lg text-primary">$1,299.00</span>
</div>
</div>
</div>
<!-- Item 2 -->
<div class="flex flex-col sm:flex-row gap-6 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm relative group">
<div class="w-full sm:w-48 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
<img alt="Grand Piano" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close-up of polished black grand piano keys reflecting soft warm ambient light in a quiet concert hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_6jUayoGMh1ihTggC_l53f_NuXI8Wly1_jn3veRU2VE0JDbZf5CBBgBQrb3ka8_gPqgaGgIreXc7abwLS9vrsAHcofSlQglIMBCo_nNEsnGX25zVjoMR6zESGyfxoHexcYdfmsRECdE2CSJFpOmZC-0e4etYfS7SIJRpiHp_IB8jDdpTEUzp2fQS1QHUcoEMUJFEY3m0BYIXcF_efDWDP4J8RtjHPEy7rIDNK6mgLdR4K41JJC4gsTAq8g0G9po2m0kO9clz9-DA"/>
</div>
<div class="flex flex-col justify-between flex-grow">
<div>
<div class="flex justify-between items-start mb-2">
<div>
<span class="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm mb-2">Accessories</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Premium Leather Piano Bench</h3>
</div>
<button aria-label="Remove item" class="text-on-surface-variant hover:text-error transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Adjustable height with deep button tufting.</p>
</div>
<div class="flex justify-between items-end mt-4">
<div class="flex items-center gap-4 bg-surface-container px-4 py-2 rounded-lg border border-surface-variant">
<button aria-label="Decrease quantity" class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">remove</span>
</button>
<span class="font-label-sm text-label-sm text-on-surface w-4 text-center">2</span>
<button aria-label="Increase quantity" class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined text-sm">add</span>
</button>
</div>
<span class="font-headline-lg text-headline-lg text-primary">$349.00</span>
</div>
</div>
</div>
</div>
<!-- Order Summary Sidebar -->
<div class="lg:col-span-4 mt-8 lg:mt-0">
<div class="bg-surface-container-low rounded-xl p-8 sticky top-32 border border-surface-variant shadow-[0_10px_30px_rgba(74,66,56,0.05)]">
<h2 class="font-headline-md text-headline-md text-on-surface mb-8 border-b border-surface-variant pb-4">Resumen de Compra</h2>
<div class="flex flex-col gap-4 mb-8">
<div class="flex justify-between items-center">
<span class="font-body-md text-body-md text-on-surface-variant">Subtotal (3 items)</span>
<span class="font-body-md text-body-md text-on-surface font-semibold">$1,997.00</span>
</div>
<div class="flex justify-between items-center">
<span class="font-body-md text-body-md text-on-surface-variant">Shipping</span>
<span class="font-body-md text-body-md text-on-surface-variant italic">Calculated at checkout</span>
</div>
<div class="flex justify-between items-center">
<span class="font-body-md text-body-md text-on-surface-variant">Taxes</span>
<span class="font-body-md text-body-md text-on-surface font-semibold">$159.76</span>
</div>
</div>
<div class="border-t border-surface-variant pt-6 mb-8">
<div class="flex justify-between items-center">
<span class="font-headline-md text-headline-md text-on-surface">Total</span>
<span class="font-headline-lg text-headline-lg text-primary">$2,156.76</span>
</div>
</div>
<button class="w-full bg-primary-container text-on-primary-container font-label-sm text-label-sm py-4 rounded-lg hover:bg-primary hover:text-on-primary transition-colors duration-300 flex justify-center items-center gap-2">
                        Continuar a Pago
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<div class="mt-6 flex justify-center items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm">lock</span>
<span class="font-label-sm text-label-sm opacity-70">Secure Checkout Process</span>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-24 bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto font-serif text-stone-700 dark:text-stone-300">
<div>
<div class="text-xl font-bold italic text-stone-900 dark:text-white mb-4">Zona Música</div>
<p class="font-body-md text-body-md mb-6 opacity-80">© 2024 Zona Música. Crafted for Creators.</p>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-stone-900 dark:text-white mb-2">Customer Service</h4>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Contact Us</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Shipping &amp; Returns</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Expert Consultation</a>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-bold text-stone-900 dark:text-white mb-2">Legal &amp; Info</h4>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a class="text-stone-500 dark:text-stone-400 hover:text-[#B32821] transition-colors underline-offset-4 hover:underline" href="#">Store Locator</a>
</div>
</div>
</footer>
</body></html>