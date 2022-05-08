export type IconsId = 'circle-arrow-down' | 'github'

export type IconsKey = 'CircleArrowDown' | 'Github'

export enum Icons {
  CircleArrowDown = 'circle-arrow-down',
  Github = 'github',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.CircleArrowDown]: '61697',
  [Icons.Github]: '61698',
}
