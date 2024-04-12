import { Header } from '@/features/core/components/common/header'
import { Container } from '@/features/core/components/ui/objects/container'
import { Board } from '@/features/game/components/board'
import { TurnCard } from '@/features/game/components/turn-card'
import { WinnerMessage } from '@/features/game/components/winner-message'
import { PlayerCard } from '@/features/player/components/player-card'

export default function GamePage() {
    return (
        <div className="flex h-dvh flex-col px-3 pb-14 pt-10">
            <Container
                as="main"
                className="grid w-full flex-1 grid-cols-2 grid-rows-[min-content_min-content_1fr] gap-x-5 gap-y-10 pb-10 lg:max-w-5xl lg:grid-cols-[min-content_1fr_min-content] lg:grid-rows-[min-content_1fr] lg:items-center  lg:gap-10"
            >
                <Header className="col-span-2  lg:col-span-1 lg:col-start-2" />
                <PlayerCard
                    avatar="player1"
                    avatarPosition="left"
                    name="Player 1"
                    score={0}
                    className="w-full lg:row-start-2"
                />
                <PlayerCard
                    avatar="player2"
                    avatarPosition="right"
                    name="CPU"
                    score={1}
                    className="w-full lg:col-start-3 lg:row-start-2"
                />
                <div className="col-span-2 flex  max-w-2xl flex-col items-center lg:col-span-1  lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-full">
                    <Board className="relative">
                        <TurnCard
                            playerName="Cpu"
                            className="position absolute left-1/2 top-full -mt-[10vw] w-max -translate-x-1/2 pt-7 md:-mt-8 md:min-h-[20vw] md:min-w-[25vw] lg:-mt-12 lg:min-h-[170px] lg:min-w-[200px]"
                            time={30}
                        />
                    </Board>
                </div>
            </Container>
        </div>
    )
}
