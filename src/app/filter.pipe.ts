import { Pipe, PipeTransform } from '@angular/core';
import { Todo} from './todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: string): Todo[] {
    let displayedItem: Todo[] = [];
    if(filter) {
      for(let item of value) {
        if(item.task.toLowerCase().includes(filter.toLowerCase())) {
          displayedItem.push(item);
        }
      }
    } else {
      displayedItem = value;
    }
    return displayedItem;
  }

}
