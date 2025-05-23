interface ProjectData {
  name: string;
  url: string;
  notes: string;
}

const data = {
  personal: [
    {
      name: "Writeups",
      url: "https://github.com/matiaslagoevia/writeups",
      notes: "Leetcode editorials and other content that I'd like to share on blogs/etc",
    },
    {
      name: "Next Dashboard",
      url: "https://github.com/matiaslagoevia/next-dashboard",
      notes: "A ficticious company dashboard using Next.JS App Router and other cool stuff",
    },
    {
      name: "Casa",
      url: "https://github.com/matiaslagoevia/casa",
      notes: "My personal website using Astro",
    },
    {
      name: "FET",
      url: "https://github.com/matiaslagoevia/fet",
      notes: "Template for Frontend Mentor challenges",
    },
  ],
  courses: [
    {
      name: "Conquering Responsive Layouts",
      url: "https://github.com/matiaslagoevia/responsive-layouts",
      notes: "A great course by Kevin Powell that I've used to enhance my layout abilities",
    },
    {
      name: "API Design in Node v4",
      url: "https://github.com/matiaslagoevia/node-api-4",
      notes: "An excellent course by Scott Moss to clean up some of my understanding of Node APIs",
    },
  ],
  "frontend mentor challenges": [
    {
      name: "QR Code Component",
      url: "https://github.com/matiaslagoevia/qr-code-component",
      notes: "Component challenge",
    },
    {
      name: "Preview Card Component",
      url: "https://github.com/matiaslagoevia/preview-card-component",
      notes: "Component challenge",
    },
    {
      name: "Price Component",
      url: "https://github.com/matiaslagoevia/price-component",
      notes: "Component challenge",
    },
    {
      name: "Order Summary Component",
      url: "https://github.com/matiaslagoevia/order-summary",
      notes: "Component challenge",
    },
    {
      name: "Stats Preview Component",
      url: "https://github.com/matiaslagoevia/stats-preview-component",
      notes: "Component challenge",
    },
  ],
} as { [key: string]: ProjectData[] };

export function getProjectData(name: string) {
  return data[name.toLowerCase()];
}