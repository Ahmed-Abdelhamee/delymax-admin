import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},
		{
			path: '/routes/routes-list',title: 'Routes', icon: 'map', type: 'link', badgeType: 'primary' ,active: false
			
			
		},
		{
			title: 'Drivers', icon: 'users', type: 'sub', active: false, children: [
				{ path: '/delivery/list-delivery-boys', title: 'Drivers List', type: 'link' },
				{ path: '/delivery/add-delivery-boy', title: 'Create Driver', type: 'link' }
				
			]
		},
		{
			title: 'Companies',path: '/companies', icon: 'users', type: 'link', active: false
		},
		{
			title: 'Users', icon: 'user-plus', type: 'sub', active: false, children: [
				{ path: '/users/list-user', title: 'User List', type: 'link' },
				{ path: '/users/create-user', title: 'Create User', type: 'link' },
			]
		},
		{
			title: 'Import Route', icon: 'edit-2', type: 'sub', children: [
				{ path: '/import/temp-list', title: 'Import Templeats', type: 'link' },
				{ path: '/import/import-route', title: 'Import Route', type: 'link' },
				{ path: '/import/routes-list', title: 'Routes List', type: 'link' },
				{ path: '/import/driver-route', title: 'Driver Route', type: 'link' },
				
				
			]
		},
		{
			title: 'Settings', icon: 'settings', type: 'sub', children: [
				{ path: '/settings/app-settings', title: 'App Setting', type: 'link' },
				{ path: '/settings/towns', title: 'Towns', type: 'link' },
				{ path: '/settings/states', title: 'States', type: 'link' },
			]
		}
	]
	ZONEITEMS: Menu[] = [
		{
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},
		{
			title: 'Routes',path: '/routes/routes-list', icon: 'dollar-sign', type: 'link', active: false
		},
		{
			title: 'Drivers',path: '/delivery/list-delivery-boys', icon: 'users', type: 'link', active: false
		},
		{
			title: 'Companies',path: '/companies', icon: 'users', type: 'link', active: false
		}
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	zoneItems = new BehaviorSubject<Menu[]>(this.ZONEITEMS);


}
