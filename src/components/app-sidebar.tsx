import * as React from "react"
import { File, GalleryVerticalEnd } from "lucide-react"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
	user: {
		name: "ICL Service worker",
		email: "service@icl-retail.com",
		avatar: "/avatars/1.jpg",
	},
	navMain: [
		{
			title: 'Warehouse',
			url: '/warehouse',
			items: [
				{ title: 'Matrixes', url: '/warehouse/products' },
				{ title: 'Moves', url: '/warehouse/products' },
				{ title: 'Contracts', url: '/warehouse/products' },
			]
		},
		{
			title: 'Fuel',
			url: '/fuel',
			items: [
				{ title: 'Samples', url: '/warehouse/products' },
				{ title: 'Moves', url: '/warehouse/products' },
				{ title: 'Mixings', url: '/warehouse/products' },
			]
		},
		{
			title: 'Journals',
			url: '/journals',
			items: [
				{ title: 'Cashflow', url: '/warehouse/products' },
			]
		},
		{
			title: 'Reports',
			url: '/reports',
			items: [
				{ title: 'Reports', url: '/warehouse/products' },
				{ title: 'Receipts', url: '/warehouse/products' },
			]
		},
		{
			title: 'Cafe',
			url: '/cafe',
			items: [
				{ title: 'Menu', url: '/warehouse/products' },
				{ title: 'Compositions', url: '/warehouse/products' },
			]
		},
		{
			title: 'Administration',
			url: '/administration',
			items: [
				{ title: 'Roles', url: '/warehouse/products', isActive: true },
				{ title: 'Users', url: '/warehouse/products' },
			]
		},
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<File className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium">ICL Retail</span>
									<span className="">v1.0.0</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url} className="font-medium">
										{item.title}
									</a>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub>
										{item.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a href={item.url}>{item.title}</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
