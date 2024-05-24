import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-to-update',
  templateUrl: './card-to-update.component.html',
  styleUrls: ['./card-to-update.component.css']
})
export class CardToUpdateComponent implements OnInit {
  apiUrl: string = environment.apiUrl
  @Input() price!: number;
  @Input() src!: String;
  @Input() title!: String;
  @Input() description!: String;
  @Input() quantity!: number;
  @Input() _id!: string;
  @Output() emitDelete = new EventEmitter();
  constructor(private produtoS: ProdutosService, private messageS: MessageServiceService) { }

  ngOnInit(): void {
    
  }

  deleteItem(): void {
    this.messageS.showConfirmationMessage("Deseja realmente excluir este produto da loja?").then((confirmed: boolean) => {
      if (confirmed) {
        this.produtoS.deleteItem(this._id).subscribe();
        this.emitDelete.emit("Deleted!");

      }
    });
  }

}
