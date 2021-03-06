import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToolbarButtonProvider, ConfigProvider } from 'terminus-core'
import { SettingsTabProvider } from 'terminus-settings'

import { EditConnectionModalComponent } from './components/editConnectionModal.component'
import { SSHModalComponent } from './components/sshModal.component'
import { PromptModalComponent } from './components/promptModal.component'
import { SSHSettingsTabComponent } from './components/sshSettingsTab.component'
import { SSHService } from './services/ssh.service'

import { ButtonProvider } from './buttonProvider'
import { SSHConfigProvider } from './config'
import { SSHSettingsTabProvider } from './settings'

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
    ],
    providers: [
        SSHService,
        { provide: ToolbarButtonProvider, useClass: ButtonProvider, multi: true },
        { provide: ConfigProvider, useClass: SSHConfigProvider, multi: true },
        { provide: SettingsTabProvider, useClass: SSHSettingsTabProvider, multi: true },
    ],
    entryComponents: [
        EditConnectionModalComponent,
        PromptModalComponent,
        SSHModalComponent,
        SSHSettingsTabComponent,
    ],
    declarations: [
        EditConnectionModalComponent,
        PromptModalComponent,
        SSHModalComponent,
        SSHSettingsTabComponent,
    ],
})
export default class SSHModule { }
