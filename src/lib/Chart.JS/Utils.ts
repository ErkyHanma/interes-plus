import colorLib from "@kurkle/color";
import { DateTime } from "luxon"; // Use named import
import "chartjs-adapter-luxon";
import { valueOrDefault } from "chart.js/helpers";

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
let _seed = Date.now();

export function srand(seed: number): void {
  _seed = seed;
}

export function rand(min: number = 0, max: number = 0): number {
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

interface NumbersConfig {
  min?: number;
  max?: number;
  from?: number[];
  count?: number;
  decimals?: number;
  continuity?: number;
}

export function numbers(config: NumbersConfig = {}): (number | null)[] {
  const min = valueOrDefault(config.min, 0);
  const max = valueOrDefault(config.max, 100);
  const from = valueOrDefault(config.from, []);
  const count = valueOrDefault(config.count, 8);
  const decimals = valueOrDefault(config.decimals, 8);
  const continuity = valueOrDefault(config.continuity, 1);
  const dfactor = Math.pow(10, decimals) || 0;
  const data: (number | null)[] = [];

  for (let i = 0; i < count; ++i) {
    let value = (from[i] || 0) + rand(min, max);
    if (rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

interface PointsConfig extends NumbersConfig {}

export interface Point {
  x: number;
  y: number;
}

export function points(config: PointsConfig = {}): Point[] {
  const xs = numbers(config).filter((x): x is number => x !== null);
  const ys = numbers(config).filter((y): y is number => y !== null);
  return xs.map((x, i) => ({ x, y: ys[i] }));
}

interface BubblesConfig extends PointsConfig {
  rmin: number;
  rmax: number;
}

export function bubbles(config: BubblesConfig): (Point & { r: number })[] {
  return points(config).map((pt) => ({
    ...pt,
    r: rand(config.rmin, config.rmax),
  }));
}

interface LabelsConfig {
  min?: number;
  max?: number;
  count?: number;
  decimals?: number;
  prefix?: string;
}

export function labels(config: LabelsConfig = {}): string[] {
  const min = config.min || 0;
  const max = config.max || 100;
  const count = config.count || 8;
  const step = (max - min) / count;
  const decimals = config.decimals || 8;
  const dfactor = Math.pow(10, decimals) || 0;
  const prefix = config.prefix || "";
  const values: string[] = [];

  for (let i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface MonthsConfig {
  count?: number;
  section?: number;
}

export function months(config: MonthsConfig = {}): string[] {
  const count = config.count || 12;
  const section = config.section;
  const values: string[] = [];

  for (let i = 0; i < count; ++i) {
    const value = MONTHS[Math.ceil(i) % 12];
    values.push(section ? value.substring(0, section) : value);
  }

  return values;
}

interface YearsConfig {
  count?: number;
}

export function years(config: YearsConfig = {}): string[] {
  const count = config.count || 10; // Default to 10 years
  const initialYear = 1;
  const values: string[] = [];

  for (let i = 0; i < count; ++i) {
    values.push((initialYear + i + (i > 0 ? " años" : " año")).toString());
  }

  return values;
}

const COLORS = [
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
];

export function color(index: number): string {
  return COLORS[index % COLORS.length];
}

export function transparentize(value: string, opacity?: number): string {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

export const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

export function namedColor(index: number): string {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

export function newDate(days: number): Date {
  return DateTime.now().plus({ days }).toJSDate();
}

export function newDateString(days: number): string {
  return DateTime.now().plus({ days }).toISO();
}

export function parseISODate(str: string): DateTime {
  return DateTime.fromISO(str);
}
