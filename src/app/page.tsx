import { Logo } from '@/features/core/components/logo'
import Link from 'next/link'
import { PlayerVsCPU } from '@/features/core/components/icons/player-vs-cpu'
import { PlayerVsPlayer } from '@/features/core/components/icons/player-vs-player'
import { Card } from '@/features/core/components/ui/molecules/card'

export default function Home() {
    return (
        <main className="mx-auto flex h-dvh max-w-96 flex-col items-center justify-center gap-5 px-3">
            <Logo className="mb-10 h-14 w-14" />
            <div className="grid w-full gap-5 [grid-auto-rows:1fr]">
                <Link href={'/game/cpu'} className="w-full">
                    <Card
                        as="div"
                        className="flex w-full items-center justify-between  bg-pink-400 font-bold uppercase text-white "
                    >
                        <p className="text-xs">player vs cpu</p>
                        <PlayerVsCPU className=" w-14" />
                    </Card>
                </Link>
                <Link href={'/game/player'} className="w-full">
                    <Card
                        as="div"
                        className="flex w-full items-center justify-between  bg-orange-200 font-bold uppercase text-black "
                    >
                        <p className="text-xs">player vs player</p>
                        <PlayerVsPlayer className=" w-14" />
                    </Card>
                </Link>
                <Link href={'/rules'} className="h-full w-full">
                    <Card
                        as="div"
                        className="flex h-full w-full items-center justify-between  bg-white font-bold uppercase text-black"
                    >
                        <p className="text-xs">game rules</p>
                        {/* <span className="not-sr-only  h-10"></span> */}
                    </Card>
                </Link>
            </div>
        </main>
    )
}
