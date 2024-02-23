import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { DeleteIssueModel } from 'src/app/shared/data/delete-issue-model';
import { Order } from 'src/app/shared/interfaces/order';


import { ProjectService } from 'src/app/shared/service/project.service';

@Component({
  selector: 'issue-modal',
  templateUrl: './issue-modal.component.html',
  styleUrls: ['./issue-modal.component.scss']
})
export class IssueModalComponent {
  @Input() orderId: string;

  constructor(
    private _modal: NzModalRef,
    private _router: Router,
    private _projectService: ProjectService
  ) {}

  closeModal() {
    this._modal.close();
  }

  openIssuePage(issueId: string) {
    this.closeModal();
    this._router.navigate(['project', 'issue', issueId]);
  }

  deleteIssue({ issueId, deleteModalRef }: DeleteIssueModel) {
    this._projectService.deleteIssue(issueId);
    deleteModalRef.close();
    this.closeModal();
  }
  
}
