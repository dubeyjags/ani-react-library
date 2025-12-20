# Uzi Library
A simple component library built with React, Tailwind CSS, and MUI.

## Buttons
// Component overview and prop guide

## Components

This repository provides a small set of UI components for demos and apps. Below are concise descriptions, props, variants, and usage examples for each widget.

### Navbars
- Purpose: Top-level site navigation wrapper for branding and links.
- Props: `brand` (string|component), `links` (array of {label, href, icon}), `position` (`fixed`|`static`), `variant` (`transparent`|`solid`), `sticky` (boolean), `onLinkClick` (fn).
- Behavior: Responsive (collapses to hamburger on small screens), supports left/right groups, optional logo, and active-link highlighting.

### Lists
- Purpose: Render collections of related items (menus, selectable rows).
- Item shape: each item can include `primary`, `secondary`, `icon`, `avatar`, `rightIcon`, `divider`, `disabled`, `onClick`.
- Variants: `dense` (compact), `two-line` (primary + secondary), `interactive` (clickable/selectable), `grouped` (section headers).
- Behavior: Supports dividers and item-level actions, keyboard accessible.

### Avatars
- Purpose: Identity images or initials used in lists, navbars, and cards.
- Props: `src`, `alt`, `initials`, `size` (`small`|`medium`|`large`), `variant` (`circle`|`square`), `badge`, `onError`.
- Behavior: Falls back to initials if image missing; supports status badges and click handlers.

### Cards
- Purpose: Grouped content surface (media, title, body, actions).
- Props: `title`, `subtitle`, `media` (image/component), `content` (children), `actions` (array/node), `elevation` (number), `variant` (`outlined`|`elevated`), `compact` (boolean).
- Patterns: Header + media + body + actions; supports whole-card `onClick`.

### Mains
- Purpose: Page-level wrapper for primary content area (layout scaffold).
- Props: `container` (boolean), `maxWidth` (`sm`|`md`|`lg`), `centered` (boolean), `padding`, `bg`.
- Use: Wrap page content to enforce consistent widths, padding, and vertical rhythm.

### Buttons
- Purpose: Trigger actions and navigation.
- Core props: `type` (`primary`|`default`|`link`), `variant` (`contained`|`outlined`|`text`), `size` (`small`|`medium`|`large`), `color` (`primary`,`secondary`,`success`,`error`,`warning`,`info`), `disabled` (boolean), `onClick` (fn).
- Additional props: `startIcon`, `endIcon`, `fullWidth`, `loading`.
- Variant behavior: `contained` = solid emphasis, `outlined` = bordered, `text` = low emphasis. `type="link"` styles as an inline link.
- Examples (from `src/components/Buttons.jsx`):
	- Types: `<AniButton type="primary">Primary</AniButton>`, `<AniButton>Default</AniButton>`, `<AniButton type="link">Link</AniButton>`
	- Variants: `<AniButton variant="contained">Contained</AniButton>`, `<AniButton variant="outlined">Outlined</AniButton>`, `<AniButton variant="text">Text</AniButton>`
	- Sizes: `<AniButton size="small">Small</AniButton>`, `<AniButton size="medium">Medium</AniButton>`, `<AniButton size="large">Large</AniButton>`
	- Colors: `color="primary" | "secondary" | "success" | "error" | "warning" | "info"`
	- Disabled: `disabled` renders non-interactive styles for all variants.

For more details and live examples, see the demo components under `src/components`.
