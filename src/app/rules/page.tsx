import Image from 'next/image'
import Link from 'next/link'
import checkIcon from '@/assets/icon-check.svg'

export default function RulesPage() {
    return (
        <main className=" mx-0 flex h-dvh items-center justify-center">
            <section className=" border-3 shadow-4xl relative  flex max-w-xl   flex-col items-start justify-between rounded-3xl border-black bg-white px-7 py-10  pb-14 font-bold">
                <h1 className="mb-10 w-full text-center text-5xl font-bold uppercase ">
                    Rules
                </h1>
                <h2 className="mb-5 text-lg uppercase text-purple-600">
                    Objetive
                </h2>
                <p className="text-gray-400  mb-5">
                    Be the first player to connect 4 of the same colored discs
                    in a row (either vertically, horizontally, or diagonally).
                </p>

                <h2 className="mb-5 text-lg uppercase text-purple-600">
                    HOW TO PLAY
                </h2>
                <ol className="text-gray-400 flex list-decimal flex-col gap-3 pl-5">
                    <li>Red goes first in the first game.</li>
                    <li>
                        Players must alternate turns, and only one disc can be
                        dropped in each turn.
                    </li>
                    <li>
                        The game ends when there is a 4-in-a-row or a stalemate.
                    </li>
                    <li>
                        The starter of the previous game goes second on the next
                        game.
                    </li>
                </ol>
                <Link
                    href={'/'}
                    aria-label="back to home"
                    className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 translate-y-1/2"
                >
                    <Image
                        src={checkIcon}
                        width={50}
                        height={50}
                        className="h-full w-full"
                        alt="check icon"
                    />
                </Link>
            </section>
        </main>
    )
}
