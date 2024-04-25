'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import { SunSvg } from '@/svgs/SunSvg'
import { MoonSvg } from '@/svgs/MoonSvg'

export const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            document.documentElement.setAttribute('data-theme', localTheme)
        }
    }, [theme])

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="navbar bg-primary text-primary-content px-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        checked={theme !== 'light'}
                    />
                    <SunSvg />
                    <MoonSvg />
                </label>
            </div>
        </div>
    )
}
