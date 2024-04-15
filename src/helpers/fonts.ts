import clsx from "clsx";
import {
  Catamaran,
  Fira_Code,
  Beth_Ellen,
  Schoolbell,
  Reenie_Beanie,
  Caveat,
  Shantell_Sans,
  Noto_Sans,
  Noto_Sans_Mono,
  Indie_Flower
} from "next/font/google";

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-text",
});

export const bethEllen = Beth_Ellen({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-handwrite",
});

export const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const notoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

export const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-handwrite_shantell",

});
export const indieFlower = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-handwrite_indie",
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwrite_caveat",
});

export const schoolbell = Schoolbell({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-handwrite_scholbell",
});

export const reenie = Reenie_Beanie({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-handwrite_reenie_beanie",
});

export const allFonts = clsx(
  noto.variable,
  notoMono.variable,
  firaCode.variable,
  catamaran.variable,
  bethEllen.variable,
  shantellSans.variable,
  caveat.variable,
  schoolbell.variable,
  reenie.variable,
  indieFlower.variable
)

