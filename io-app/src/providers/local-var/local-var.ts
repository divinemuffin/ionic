import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class LocalVarProvider {

  constructor() {
    console.log('Hello LocalVarProvider Provider');
  }

  // Main page
  main = {
    tab: "Main",
    title: "Maem",
    subtitle: "organic",
    description: `Маєм гарну фасадну терасу на 25 чоловік, а також Lounge bar з низькими диванами, 
    гарною музикою, відео, більярдом... барна стійка з раковиною хол/гар вода, шумоізоляція, витяжка... 
    кальяни для Вашого відпочинку`,

    cards: [
      {
        id:1, 
        title: "Кімнати", 
        description: "Чиста вода, свіже повітря, новий ремонт, якісне житло, приватна територія, білизна, прибирання, комуналка, все включено",
        imgUrl: "card-rooms-01.jpg"
      },
      {
        id:2, 
        title: "Баня", 
        description: "Ви маєте зруб з душем і туалетом, парилка, кімнати з лежанками з підігрівом, тераса, озерце, чан, гамак, дрова, сіновал, мангал, шашлик, BBQ, якісна музика, оптоволоконний WiFi",
        imgUrl: "card-sauna-01.jpg"
      },
      {
        id:3, 
        title: "Lounge bar", 
        description: "Lounge bar з низькими диванами, гарною музикою, відео, більярдом",
        imgUrl: "card-lounge-01.jpg"
      }
    ],

    btn_txt_more: "Перейти"
  }

}
