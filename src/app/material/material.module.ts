import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {
}
