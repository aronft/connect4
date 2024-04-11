import { cn } from '@/features/core/utils/class-names'

interface ContainerProps {
    className?: string
    children: React.ReactNode
    as?: keyof React.ReactHTML
}
export const Container = ({
    className,
    as,
    children,
    ...props
}: ContainerProps) => {
    const Component = as ?? 'div'
    return (
        <Component className={cn('mx-auto max-w-2xl', className)} {...props}>
            {children}
        </Component>
    )
}
