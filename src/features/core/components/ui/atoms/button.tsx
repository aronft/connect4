import { cn } from '@/features/core/utils/class-names'

interface ButtonProps extends React.ComponentProps<'button'> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'rounded-3xl bg-purple-800 px-5 py-2 uppercase text-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
