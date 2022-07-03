import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { UploadComponent } from 'src/app/modules/upload/upload.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule,MatIconModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatGridListModule, MatButtonToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FetchDataService } from 'src/app/modules/fetch-data.service';
import { ShareDataService } from 'src/app/modules/share-data.service';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService,
    FetchDataService,
    ShareDataService
  ]
})
export class DefaultModule { }
