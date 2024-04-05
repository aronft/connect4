import { Logo } from '../logo'
import { Button } from '../ui/atoms/button'
import { Container } from '../ui/objects/container'

export const Header = () => {
    return (
        <Container
            as="header"
            className="flex w-full items-center justify-between gap-2"
        >
            <Button>menu</Button>
            <Logo className="w-10" />
            <Button>restart</Button>
        </Container>
    )
}
