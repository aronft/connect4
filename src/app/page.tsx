import { Logo } from '@/features/core/components/logo'
import Link from 'next/link'
import { PlayerVsCPU } from '@/features/core/components/icons/player-vs-cpu'
import { PlayerVsPlayer } from '@/features/core/components/icons/player-vs-player'

export default function Home() {
    return (
        <main className="mx-auto flex h-dvh max-w-96 flex-col items-center  justify-center gap-5 px-3">
            <Logo className="mb-10 h-14 w-14" />
            <Link
                className="flex w-full items-center justify-between rounded-xl border-2 border-black bg-pink-400 px-4 py-2 font-bold uppercase text-white shadow-3xl"
                href={'/game/cpu'}
            >
                <p className="text-xs">player vs cpu</p>
                <PlayerVsCPU className="w-14" />
            </Link>
            <Link
                className="flex w-full items-center justify-between rounded-xl border-2 border-black bg-orange-200 px-4 py-2 font-bold uppercase text-black shadow-3xl"
                href={'/game/player'}
            >
                <p className="text-xs">player vs player</p>
                <PlayerVsPlayer className="w-14" />
            </Link>
            <Link
                className="flex min-h-12 w-full items-center justify-between rounded-xl border-2 border-black bg-white px-4 py-2 font-bold uppercase text-black shadow-3xl"
                href={'/rules'}
            >
                <p className="text-xs">game rules</p>
            </Link>
        </main>
    )
}
