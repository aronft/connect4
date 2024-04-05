import Image from 'next/image'

import logo from '@/assets/logo.svg'
import React from 'react'
import { cn } from '@/features/core/utils/class-names'

interface LogoProps extends React.ComponentProps<'image'> {}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Image
            src={logo}
            width={25}
            height={25}
            alt="Logo of connect4"
            className={cn(className)}
        />
    )
}
