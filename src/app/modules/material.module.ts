import { NgModule } from '@angular/core';

// Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MatModules = [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    ClipboardModule,
    MatButtonModule,
    MatSnackBarModule
]

@NgModule({
    imports: [
        ...MatModules,
    ],
    exports: [
        ...MatModules,
    ],
    providers: []
})

export class MaterialModule { }