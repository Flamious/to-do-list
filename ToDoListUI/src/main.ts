import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ToDoListModule } from './to-do-list/to-do-list.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ToDoListModule);