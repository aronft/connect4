import { Card } from '@/features/core/components/ui/molecules/card'
import { cn } from '@/features/core/utils/class-names'
import { PLAYER_AVATARS } from '../constants/data'
import Image from 'next/image'

type Positions = 'left' | 'right'

interface PlayerCardProps extends React.ComponentProps<'div'> {
    name: string
    score: number
    avatar: keyof typeof PLAYER_AVATARS
    avatarPosition: Positions
}

const avatarPositionClasses: Record<Positions, string> = {
    left: 'left-0 -translate-x-1/2 top-1/2 -translate-y-1/2',
    right: 'right-0 translate-x-1/2 top-1/2 -translate-y-1/2',
}

export const PlayerCard = ({
    name,
    score,
    avatar = 'cpu',
    avatarPosition = 'left',
    className,
}: PlayerCardProps) => {
    const image = PLAYER_AVATARS[avatar]
    // llamar a un objeto que tenga "player1" => imgplayer1 | "cpu" => imageCPU
    return (
        <Card
            className={cn(
                'relative flex min-w-36  flex-row items-center justify-between gap-3 bg-white px-12 py-4 lg:flex-col lg:px-5 lg:pb-7 lg:pt-11',
                className
            )}
        >
            <span className="font-bold uppercase">{name}</span>
            <strong aria-label="player score" className="text-5xl">
                {score}
            </strong>
            <Image
                src={image}
                alt={`Avatar face for ${name}`}
                className={cn(
                    'absolute w-14 lg:left-1/2  lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:pt-5',
                    avatarPositionClasses[avatarPosition]
                )}
            />
        </Card>
    )
}
