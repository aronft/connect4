import player1TurnBg from '@/assets/turn-background-red.svg'
import player2TurnBg from '@/assets/turn-background-yellow.svg'
import { cn } from '@/features/core/utils/class-names'
import Image from 'next/image'

interface TurnCardProps extends React.ComponentPropsWithoutRef<'div'> {
    time: number
    playerName: string
}

export const TurnCard = ({ time, playerName, className }: TurnCardProps) => {
    return (
        <div
            className={cn(
                ' relative flex  flex-col items-center justify-center p-5 uppercase text-white',
                className
            )}
        >
            <Image
                src={player1TurnBg}
                width={200}
                height={200}
                alt="bg turn card"
                className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2"
            />
            <div className="relative flex flex-col items-center gap-5">
                <p>{`${playerName}'s`} turn</p>
                <p className="text-5xl font-bold ">
                    {time}
                    <span className="text-xl">s</span>
                </p>
            </div>
        </div>
    )
}
