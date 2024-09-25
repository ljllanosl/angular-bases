import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  // onDeleteId = Index value : number

  onDeleteCharacter(id?: string): void {
    if(!id) return

    console.log(id)

    this.onDelete.emit(id)

  }
}
