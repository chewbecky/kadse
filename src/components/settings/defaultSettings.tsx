export interface Setting {
  title: string;
  duration: number;
}

export interface Settings {
  work: Setting;
  longBreak: Setting;
  shortBreak: Setting;
  cycles: number;
}

export const defaultTimerSettings: Settings = {
  work: { title: "Work Cycle - 25", duration: 1500 },
  longBreak: { title: "Regeneration - 15", duration: 900 },
  shortBreak: { title: "Regeneration - 5", duration: 300 },
  cycles: 3,
};

export const longerTimerSettings: Settings = {
  work: { title: "Work Cycle - 50", duration: 3000 },
  longBreak: { title: "Regeneration - 30", duration: 1800 },
  shortBreak: { title: "Regeneration - 10", duration: 600 },
  cycles: 3,
};
