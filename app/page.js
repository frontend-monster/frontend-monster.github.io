import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import {
  ageCalculator,
  bodyMass,
  dictionaryApi,
  multistepForm,
  newsletter,
  spaceWebsite,
  tipCalculator,
  workit,
} from "@/assets";
import { Github } from "lucide-react";

const works = [
  {name: "Workit", image: workit, link: "https://frontend-monster.github.io/workit", bages: ["HTML", "CSS"]},
  {name: "Newsletter", image: newsletter, link: "https://frontend-monster.github.io/newsletter", bages: ["HTML", "CSS", "Animation"]},
  {name: "Multistep Form", image: multistepForm, link: "https://frontend-monster.github.io/multistep-form", bages: ["Vite", "React.js", "Animation"]},
  {name: "Space Website", image: spaceWebsite, link: "https://frontend-monster.github.io/space-website", bages: ["Grid"]},
  {name: "Body Mass", image: bodyMass, link: "https://frontend-monster.github.io/body-mass", bages: ["Vite", "React.js","Animation"]},
  {name: "Dictionary API", image: dictionaryApi, link: "https://frontend-monster.github.io/dictionary-api", bages: ["Vite", "React.js","Animation"]},
  {name: "Age Calculator", image: ageCalculator, link: "https://frontend-monster.github.io/ageCalculator", bages: ["Vanilla JS", "Taiwind CSS"]},
  {name: "Tip Calculator", image: tipCalculator, link: "https://frontend-monster.github.io/tipCalculator", bages: ["Next.js", "Taiwind CSS"]},

]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 items-center py-12 px-5 sm:p-24 relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-violet-600 to-fuchsia-400 bg-clip-text text-transparent flex flex-col gap-3">
        <Link href={'/'}>Lan</Link>
        <div className="flex gap-4 items-center justify-center">
          <Link className="border border-white p-2 grid place-items-center rounded-full text-white transition-all duration-200 hover:bg-slate-300 hover:text-slate-900"
            href={'https://github.com/frontend-monster'}
            target="_blank"
          >
            <Github />
          </Link>
        </div>
      </h1>
      <div className="max-w-7xl w-full mx-auto sm:px-5 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {works.map((work, index) => (
        <Card key={index}>
          <Link
            href={work.link}
            target="_blank"
          >
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2 w-full">
                <div className="flex gap-2">
                  {work.bages.map((bage, index) => (
                    <div className="text-xs text-zinc-100 inline-block">{bage}</div>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-xs text-zinc-500">🫵</span>
              </div>
              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {work.name}
              </h2>
              <Image 
                src={work.image}
                alt="workit"
                className="object-contain grayscale mt-4 group-hover:grayscale-0"
                unoptimized
              />
            </article>
          </Link>
        </Card>
      ))}
      </div>
    </main>
  );
}
