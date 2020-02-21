import { NgModule } from '@angular/core';

// Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const MatModules = [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
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