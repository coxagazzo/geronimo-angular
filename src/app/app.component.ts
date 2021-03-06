import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClientInfoService } from './services/client-info.service';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  rickrollReady: boolean = false;
  ativarAnimacao: boolean = false;
  logo: string = '/assets/logo.png'
  currentText: string;
  title = 'geronimo-angular';
  Apelido: string = "??";
  Contador: number = 0;
  Text: string[];

  constructor(private clientInfo: ClientInfoService,
              private _email: EmailService) { }

  textChanged(): void {
    this.Text= [
      "nada aqui",
      "Olá!",
      "Eu sou o Gerônimo",
      `Você deve ser ... `,
      "Como quer que eu te chame?",
      `Ok ${this.Apelido}. Você sabe que existe um projeto secreto.`,
      "E esse projeto secreto tem uma palavra mestra ...",
      "Preciso que você confirme essa palavra mestra."
      ]
  }

  ngOnInit() {
    this.textChanged();
    this.currentText = this.Text[this.Contador]
    this.clientInfo.infoJson().subscribe( res => {
      console.log(JSON.stringify(res))
    })
  }

  nextText(): void {
    this.Contador += 1;
    this.currentText = this.Text[this.Contador];
    console.log(this.Contador);
  }

  onKey(event): void {
    this.Apelido = event.target.value;
    this.textChanged();
  }

  animar(): void {
    if (false){
      this.ativarAnimacao = true
      setTimeout( () => {
        this.ativarAnimacao = false
      }, 1000)
    }else{
      this._email.sendEmail("Teste Assunto", "Teste mensagem")
      this.Contador += 1;
      this.rickrollReady = true
    }
  }



}
