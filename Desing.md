---
name: Harmonic Resonance
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#5a413d'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#8e706c'
  outline-variant: '#e2beba'
  surface-tint: '#b32821'
  primary: '#900a0c'
  on-primary: '#ffffff'
  primary-container: '#b32821'
  on-primary-container: '#ffccc6'
  inverse-primary: '#ffb4aa'
  secondary: '#825422'
  on-secondary: '#ffffff'
  secondary-container: '#fdc083'
  on-secondary-container: '#784c1a'
  tertiary: '#4e463b'
  on-tertiary: '#ffffff'
  tertiary-container: '#665d52'
  on-tertiary-container: '#e3d7c9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#910a0c'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f7bb7e'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#663d0b'
  tertiary-fixed: '#eee0d2'
  tertiary-fixed-dim: '#d1c5b7'
  on-tertiary-fixed: '#211b12'
  on-tertiary-fixed-variant: '#4e453b'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built to bridge the gap between a high-energy brick-and-mortar music shop and a premium, tranquil digital experience. It targets musicians of all levels—from students buying their first acoustic guitar to professionals seeking high-end gear—by evoking an atmosphere of expertise, quality, and creative inspiration.

The style is a blend of **Minimalism** and **Corporate/Modern**, characterized by vast whitespace that lets the photography of instruments breathe. It incorporates high-quality imagery to showcase textures—the grain of mahogany, the sheen of brass, and the polished finish of a piano—making the digital experience feel as tactile as walking into the physical store. The aesthetic is "tranquila y linda" (calm and beautiful), achieved through soft transitions, organic shapes, and a refined color palette that feels expensive but welcoming.

## Colors

The palette is anchored by a deep **Heritage Red**, pulled directly from the physical signage of Zona Música. This color is used sparingly for primary actions and brand emphasis to maintain a sophisticated feel.

- **Primary (Heritage Red):** Used for primary CTAs, price points, and key brand highlights.
- **Secondary (Cured Oak):** A warm wood tone that acts as a bridge between the digital UI and the physical instruments. Used for accents, secondary buttons, and category badges.
- **Tertiary (Midnight Ebony):** A dark, warm gray used for high-level headings and structural lines, offering a softer alternative to pure black.
- **Neutral (Parchment White):** A slightly warm off-white that forms the foundation of the background, reducing eye strain and enhancing the "tranquil" vibe compared to clinical white.

## Typography

This design system utilizes a sophisticated typographic pairing to balance tradition and modernity. 

**Noto Serif** is the voice of the brand, used for headlines to evoke the timeless nature of music and craftsmanship. It provides the "characterful" and premium feel requested. 

**Manrope** serves as the functional workhorse for body text and labels. Its geometric yet friendly structure ensures high legibility on product descriptions and technical specifications. All body text should maintain a generous line height to contribute to the calm, airy atmosphere.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to ensure the "premium" feel of a curated gallery, while transitioning to a fluid model for mobile devices. 

A 12-column grid is used for the desktop experience with wide margins to create a sense of exclusivity. Spacing follows an 8px rhythmic scale, but emphasizes larger gaps (Section Gaps) to separate different product categories or brand stories, preventing the interface from feeling cluttered or "salesy." Gutters are kept wide (24px) to give product cards ample breathing room.

## Elevation & Depth

To maintain the "linda" aesthetic, depth is communicated through **Ambient Shadows** and **Tonal Layers**. 

Shadows are exceptionally soft, using a large blur radius (30px+) with very low opacity (5-8%). They should be slightly tinted with the Tertiary color (#4A4238) rather than pure black to keep the warmth of the design. Interactive elements like product cards use a subtle lift effect on hover. Background surfaces use subtle shifts from Parchment White to a light warm gray to define sections without the need for harsh borders.

## Shapes

The shape language is consistently **Rounded**, reflecting the organic curves found in musical instruments like violins, guitars, and grand pianos. 

Standard components utilize a 0.5rem (8px) radius. Larger containers, such as promotional banners or hero image masks, use "rounded-xl" (1.5rem/24px) to soften the overall visual impact. This prevents the professional tone from feeling too "corporate" or rigid, maintaining the approachable and calm vibe of the brand.

## Components

### Buttons
- **Primary:** Heritage Red background with white text. High-contrast, used for "Add to Cart."
- **Secondary:** Transparent background with a Cured Oak border and text. Used for "View Details."
- **Tertiary:** Text-only with a subtle underline, used for less critical navigation.

### Cards
Product cards should feature a subtle ambient shadow and a 1px soft gray border. The image area should occupy at least 60% of the card, using high-quality photography on a neutral light background.

### Input Fields
Soft, rounded corners with a subtle 1px border that warms up in color when focused. No heavy drop shadows; focus is indicated by a soft outer glow in the Secondary color.

### Chips & Tags
Used for instrument categories (e.g., "Percussion," "Strings"). These should have a light Cured Oak tinted background with dark brown text, using the `label-sm` typography style for a refined look.

### Additional Components
- **Audio Preview Player:** A custom, minimal waveform player for hearing instrument samples.
- **"Expert Consultation" Floating Action:** A soft-colored button for quick access to chat with a specialist, emphasizing the store's professional expertise.