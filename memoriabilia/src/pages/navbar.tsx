import react from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from '@radix-ui/react-navigation-menu';
import { Input } from '@/components/ui/input';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Ateltismo",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Basquete",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Boxe",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]


export default function Navbar() {
    return (
        <>
            <div className="mt-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div >
                    <div className="relative flex h-16 items-center justify-start mb-10">
                        <a href='./home'><img className="w-50 h-20" src='https://memorabiliadoesporte.com.br/wp-content/uploads/2020/12/MDE-1.jpg' /></a>
                        <Input className="w-3/6" type="text" placeholder="Pesquisar" />
                    </div>
                    <NavigationMenu>

                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Esportes</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components built with Radix UI and
                                                        Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Atletas
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Miniatura Realista
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Quadros
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Jogo das Estrelas
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Casa da Moeda do Brasil
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        MDE Social
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Parceiros
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Artigos
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}