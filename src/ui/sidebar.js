import sidebarLogoImg from '../media/images/sidebar/sidebarLogo.png';
import sidebarMenuDashboardImg from '../media/images/sidebar/dashboard.png';
import sidebarMenuAnalyticsImg from '../media/images/sidebar/analytics.png'
import sidebarMenuReportsImg from '../media/images/sidebar/reports.png'

export function renderSidebar(container) {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    
    sidebar.append(
    renderSidebarLogo(),
    renderSideBarMenu(),
    renderSideBarAccount()
    );

    container.appendChild(sidebar);
}

const renderSidebarLogo = () => {
    const sidebarLogoContainer = document.createElement('div');
    sidebarLogoContainer.classList.add('sidebar-logo-container');

    const sidebarLogo = new Image();
    sidebarLogo.classList.add('sidebar-logo');
    sidebarLogo.src = sidebarLogoImg;

    sidebarLogoContainer.append(sidebarLogo);

    return sidebarLogoContainer;
}

const renderSideBarMenu = () => {
    const sidebarMenuContainer = document.createElement('div');
    sidebarMenuContainer.classList.add('sidebar-menu-container');

    const menuDashboardIcon = new Image();
    menuDashboardIcon.classList.add('menu-item-icon');
    menuDashboardIcon.src = sidebarMenuDashboardImg;

    const menuAnalyticsIcon = new Image();
    menuAnalyticsIcon.classList.add('menu-item-icon');
    menuAnalyticsIcon.src = sidebarMenuAnalyticsImg;

    const menuReportsIcon = new Image();
    menuReportsIcon.classList.add('menu-item-icon');
    menuReportsIcon.src = sidebarMenuReportsImg;


    sidebarMenuContainer.append(
        renderMenuItemContainer(menuDashboardIcon, 'Dashboard', 'dashboard'),
        renderMenuItemContainer(menuAnalyticsIcon, 'Analytics', 'analytics'),
        renderMenuItemContainer(menuReportsIcon, 'Reports', 'reports')
    )

    return sidebarMenuContainer;
}

const renderMenuItemContainer = (img, label, view) => {
    const container = document.createElement('div');
    container.classList.add('menu-item-container');

    const a = document.createElement('a');
    a.href = '#${view}'
    a.dataset.view = view;
    a.textContent = label;
    a.classList.add('menu-item');

    container.append(img, a);
    return a;
}

const renderSideBarAccount = () => {
    const sidebarAccountContainer = document.createElement('div');
    sidebarAccountContainer.classList.add('sidebar-account-container');

    return sidebarAccountContainer;
}