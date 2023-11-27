type BadgeInfo = {
  textColor: string;
  bgColor: string;
  logo?: string;
};

const defaultBadgeInfo: BadgeInfo = {
  textColor: "222222",
  bgColor: "ff9900",
};

const customBadgeInfo: Record<string, BadgeInfo> = {
  HTML: { ...defaultBadgeInfo, logo: "HTML5" },
  CSS: { ...defaultBadgeInfo, logo: "CSS3" },
};

export function getBadgeLink(name: string) {
  const encodedName = encodeURIComponent(name);
  const { textColor, bgColor } = customBadgeInfo[name] || defaultBadgeInfo;
  const logo =
    customBadgeInfo[name]?.logo !== undefined
      ? encodeURIComponent(customBadgeInfo[name].logo!)
      : encodeURIComponent(name);
  return `https://img.shields.io/static/v1?style=for-the-badge&message=${encodedName}&color=${textColor}&logo=${logo}&logoColor=${bgColor}&label=`;
}
