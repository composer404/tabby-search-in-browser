import { Injectable } from '@angular/core';
import { SearchInBrowserSettingsComponent } from './components/search-in-browser-settings.component';
import { SettingsTabProvider } from 'tabby-settings';

@Injectable()
export class SearchInBrowserSettingProvider extends SettingsTabProvider {
    id = `search-in-browser`;
    icon = `search`;
    title = `Search in browser`;

    getComponentType(): any {
        return SearchInBrowserSettingsComponent;
    }
}
