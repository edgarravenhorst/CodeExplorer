import { PropsWithChildren } from 'react'
import { FaBeer } from 'react-icons/fa'

export type AsideMenuVariant = 'full' | 'minimized'
export type AsideMenuProps = PropsWithChildren<{
    variant: AsideMenuVariant
    open: boolean
}>

type MenuItemProps = PropsWithChildren<{ variant?: 'icon-only' | 'full' }>

const MenuItem: React.FC<MenuItemProps> = ({ children, variant }) => {
    return (
        <li
            style={{
                padding: '8px',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
            }}
        >
            <FaBeer size={20} />
            <span
                style={{
                    visibility: variant === 'icon-only' ? 'hidden' : 'visible',
                    opacity: variant === 'icon-only' ? 0 : 1,
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                {children}
            </span>
        </li>
    )
}

export const AsideMenu: React.FC<AsideMenuProps> = ({ variant, open }) => {
    const width = variant === 'full' ? 320 : 50
    const menuItemVariant = variant === 'full' ? 'full' : 'icon-only'

    return (
        <aside
            style={{
                display: 'flex',
                background: '#fff',
                minHeight: '100vh',
                transition: 'all 0.3s ease-in-out',
                maxWidth: width,
                overflowX: 'hidden',
                transform: open ? undefined : `translateX(-100%)`,
            }}
        >
            <div
                style={{
                    transition: 'padding 0.3s ease-in-out',
                    padding: variant === 'full' ? '1rem' : '0.5rem',
                }}
            >
                <nav>
                    <ul>
                        <MenuItem variant={menuItemVariant}>Home</MenuItem>
                        <MenuItem variant={menuItemVariant}>Requests</MenuItem>
                        <MenuItem variant={menuItemVariant}>Users</MenuItem>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
