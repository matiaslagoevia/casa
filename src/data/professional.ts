interface ExperienceData {
  title: string;
  from: string;
  to: string;
  results: string[];
  other: string[];
}

const data = {
  amazon: {
    title: "Software Engineer @ Amazon",
    from: "Dec 2021",
    to: "Apr 2023",
    results: [
      "95% line and 90% branch UT coverage for critical backend authentication services.",
      "Most active participant of code reviews across CLS Security SDE branch.",
      "Perform data analyses of FC devices, resulting in +34% visibility.",
      "Lead adoption of BDD w/ Cucumber, covering 100% of registration and authentication use cases.",
    ],
    other: [
      "Design and implement simple, extensive monitoring framework used since launch.",
      "Mentor new team members in processes such as: development, testing, oncall.",
      "Design and publish company-wide workaround for slow Cloudformation stack teardowns.",
      "Maintain existing Ruby on Rails authentication service shortly after onboarding.",
      "Participate in design, implementation, and troubleshooting of new Java authentication service from planning to prod launch and beyond.",
    ],
  },
  blakfx: {
    title: "Software Engineer @ BlakFX",
    from: "Jul 2020",
    to: "Apr 2021",
    results: [
      "Develop secure chat application with Java wrapper that led to successful government client pitch.",
    ],
    other: [
      "Contribute to C library code and associated wrappers in C++ and Java.",
      "Add current library version reporting mechanism to wrappers for easier troubleshooting.",
      "Fix memory leaks in C library code after debugging C++ wrapper crash reports.",
    ],
  },
  solosegment: {
    title: "Software Engineer @ SoloSegment",
    from: "Jan 2021",
    to: "May 2021",
    results: ["Organize end of project presentation to stakeholders."],
    other: [
      "Lead student intership cross-team effort to deploy and document data pipeline in cloud w/ Microservice architecture.",
    ],
  },
} as { [key: string]: ExperienceData };

export function getExperienceData(name: string) {
  return data[name];
}
