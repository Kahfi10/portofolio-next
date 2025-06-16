'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-5 flex items-center justify-between">
      <div>
        <Link href="/" className="text-lg font-bold text-black dark:text-white">
          Ashabul <TextEffect 
          as='span'
          preset='fade'
          per='char'
          delay={0.5}
          >
            Kahfi.
          </TextEffect>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-700 dark:text-zinc-500"
          delay={0.5}
        >
          Web Developer
        </TextEffect>
      </div>
    </header>
  )
}
