import boardLayerBlackSmall from '@/assets/board-layer-black-small.svg'
import boardLayerWhiteSmall from '@/assets/board-layer-white-small.svg'
import boardLayerWhiteLarge from '@/assets/board-layer-white-large.svg'
import boardLayerBlackLarge from '@/assets/board-layer-black-large.svg'
import Image from 'next/image'
import { cn } from '@/features/core/utils/class-names'

interface BoardProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Board = ({ children, className }: BoardProps) => {
    return (
        <div
            className={cn(
                'relative grid h-[83vw] w-[90vw] md:max-h-[650px] md:min-h-[600px]  md:w-full lg:h-[600px] lg:w-full',
                className
            )}
        >
            <Image
                src={boardLayerBlackSmall}
                alt=""
                className="absolute top-0 h-full w-full   lg:hidden"
            />
            <Image
                src={boardLayerWhiteSmall}
                alt=""
                className="absolute top-0  h-[97%] w-full  lg:hidden"
            />
            <Image
                src={boardLayerBlackLarge}
                alt=""
                className="absolute top-0 hidden h-full  w-full  lg:block"
            />
            <Image
                src={boardLayerWhiteLarge}
                alt=""
                className="absolute top-0  hidden h-[98.4%] w-full  lg:block"
            />
            {children}
        </div>
    )
}
