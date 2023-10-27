import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearched'
})
export class HighlightSearchedPipe implements PipeTransform {

  transform(value: string, searchedPhrase : string): string {
    if (!searchedPhrase) return value;
    
    const regex = new RegExp(searchedPhrase,"ig");
    return value.replace(regex, (match) => `<span class="highlight-text">${match}</span>`);
  }

}
