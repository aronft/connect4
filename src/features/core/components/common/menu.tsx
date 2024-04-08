import { Card } from '../ui/molecules/card'

export const Menu = () => {
    return (
        <Card className="flex flex-col gap-10 bg-purple-600 px-5 pb-5 pt-10">
            <span className="text-center text-4xl font-bold uppercase text-white">
                pause
            </span>
            <ul className="flex flex-col gap-5 ">
                <li>
                    <Card as="button" className="w-full bg-white uppercase">
                        Continue game
                    </Card>
                </li>
                <li>
                    <Card as="button" className="w-full bg-white uppercase">
                        restart
                    </Card>
                </li>
                <li>
                    <Card
                        as="button"
                        className="w-full bg-pink-400 uppercase text-white"
                    >
                        quit game
                    </Card>
                </li>
            </ul>
        </Card>
    )
}
