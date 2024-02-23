

import { IssuePriority, OrderType } from '../issue';
import { IssuePriorityIcon } from '../issue-priority-icon';

export class IssueUtil {
  static getIssueTypeIcon(orderType: OrderType): string {
    return orderType?.toLowerCase();
  }

  static getIssuePriorityIcon(issuePriority: IssuePriority): IssuePriorityIcon {
    return new IssuePriorityIcon(issuePriority);
  }

  static getRandomId(): string {
    return `${Math.ceil(Math.random() * 8000)}`;
  }

  static searchString(str: string, searchString: string): boolean {
    str = str ?? '';
    searchString = searchString ?? '';
    return str.trim().toLowerCase().includes(searchString.trim().toLowerCase());
  }
}
