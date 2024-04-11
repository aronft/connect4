import { cn } from '@/features/core/utils/class-names'
import { HTMLAttributes } from 'react'

type Sizes = 'small' | 'medium'

interface CardProps extends HTMLAttributes<{}> {
    as?: keyof React.ReactHTML
    size?: Sizes
}

const impactClasses: Record<Sizes, string> = {
    small: 'shadow-3xl  rounded-2xl   border-3 px-4 py-2',
    medium: 'shadow-4xl rounded-3xl border-4 ',
}

export const Card = ({
    className,
    children,
    as,
    size = 'small',
    ...props
}: CardProps) => {
    const Component = as ?? 'div'
    return (
        <Component
            {...props}
            className={cn(
                'rounded-3xl border-black',
                impactClasses[size],
                className
            )}
        >
            {children}
        </Component>
    )
}
