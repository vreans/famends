import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    MatExpansionModule
} from "@angular/material";
@NgModule({
    imports: [
        MatChipsModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        CommonModule,
        MatProgressBarModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatTooltipModule,
        MatGridListModule
    ],
    declarations: [],
    exports: [
        MatSidenavModule,
        MatChipsModule,
        MatSelectModule,
        MatToolbarModule,
        MatMenuModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatRadioModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        MatInputModule,
        MatExpansionModule,
        MatTooltipModule,
        MatGridListModule
    ]
})
export class MaterialModule {

}
