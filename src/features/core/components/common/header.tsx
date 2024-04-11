import { cn } from '../../utils/class-names'
import { Logo } from '../logo'
import { Button } from '../ui/atoms/button'
import { Container } from '../ui/objects/container'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <Container
            as="header"
            className={cn(
                'flex w-full items-center justify-between gap-2',
                className
            )}
        >
            <Button>menu</Button>
            <Logo className="w-10" />
            <Button>restart</Button>
        </Container>
    )
}
