import { Link } from "@inertiajs/react";
import { 
    NavigationMenu, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList 
} from "./ui/navigation-menu";
import { cn } from "./ui/utils";

export function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                            <img src="/images/favicon.png" alt="Jokiin" className="h-8 mr-2" />
                            <span>Jokiin</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link 
                                            href="/" 
                                            className={cn(
                                                "px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            )}
                                        >
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link 
                                            href="/add-joki" 
                                            className={cn(
                                                "px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            )}
                                        >
                                            Order Joki
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link 
                                            href="/cara-order" 
                                            className={cn(
                                                "px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            )}
                                        >
                                            Cara Order
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
