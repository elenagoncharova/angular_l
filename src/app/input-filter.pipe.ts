import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'inputFilter',
    pure: true
})
export class InputFilterPipe implements PipeTransform {

    transform(inputList, searchStr: string, fieldName: string) {
        console.log('Started');

        if (inputList.length === 0 || searchStr === '') {
            return inputList;
        }

        return inputList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }
}
