import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

    transform(value: any,lang:any, args?: any): any {
        if (value) {
            if(lang=='en'){
                const seconds = Math.floor((+new Date() - +value) / 1000);
                if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                    return 'Just now';
                const intervals = {
                    'year': 31536000,
                    'month': 2592000,
                    'week': 604800,
                    'day': 86400,
                    'hour': 3600,
                    'minute': 60,
                    'second': 1
                };
                let counter;
                for (const i in intervals) {
                    counter = Math.floor(seconds / intervals[i]);
                    if (counter > 0)
                        if (counter === 1) {
                            return counter + ' ' + i + ' ago'; // singular (1 day ago)
                        } else {
                            return counter + ' ' + i + ' ago'; // plural (2 days ago)
                        }
                }
             
            }else{

                const seconds = Math.floor((+new Date() - +value) / 1000);
                if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                    return 'الان';
                const intervals = {
                    'سنة': 31536000,
                    'شهر': 2592000,
                    'اسبوع': 604800,
                    'يوم': 86400,
                    'ساعه': 3600,
                    'دقيقة': 60,
                    'ثانية': 1
                };
                let counter;
                for (const i in intervals) {
                    counter = Math.floor(seconds / intervals[i]);
                    if (counter > 0)
                        if (counter === 1) {
                            return counter + ' ' + i ; // singular (1 day ago)
                        } else {
                            return counter + ' ' + i ; // plural (2 days ago)
                        }
                }
                

            }
            
            return value;
              
            }
            
    }
}
