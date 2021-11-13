import { ConfigProvider, HotkeyProvider, TabContextMenuItemProvider } from 'tabby-core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchInBrowerProvider } from './config-provider';
import { SearchInBrowserContextMenuProvider } from './context-menu-provider';
import { SearchInBrowserHotkeyProvider } from './hotkey-provider';
import { SearchInBrowserService } from './services/search-in-browser.service';
import { SearchInBrowserSettingProvider } from './settings';
import { SearchInBrowserSettingsComponent } from './components/search-in-browser-settings.component';
import { SettingsTabProvider } from 'tabby-settings';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [CommonModule, ToastrModule, FormsModule],
    providers: [
        {
            provide: HotkeyProvider,
            useClass: SearchInBrowserHotkeyProvider,
            multi: true,
        },
        {
            provide: TabContextMenuItemProvider,
            useClass: SearchInBrowserContextMenuProvider,
            multi: true,
        },
        {
            provide: ConfigProvider,
            useClass: SearchInBrowerProvider,
            multi: true,
        },
        {
            provide: SettingsTabProvider,
            useClass: SearchInBrowserSettingProvider,
            multi: true,
        },
    ],
    entryComponents: [SearchInBrowserSettingsComponent],
    declarations: [SearchInBrowserSettingsComponent],
})
export default class SearchInBrowserModule {
    constructor(private readonly searchInBrowserService: SearchInBrowserService) {
        this.searchInBrowserService.init();
    }
}
