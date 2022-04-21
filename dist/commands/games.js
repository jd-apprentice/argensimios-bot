var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Discord, SimpleCommand, SimpleCommandMessage, Slash } from "discordx";
const mensajeGeneral = "🧠 Tu IQ es: ";
function switchIq() {
    const randomTo200 = 0;
    switch (true) {
        // case randomTo200 == 200:
        //   return `${mensajeGeneral}${randomTo200} https://c.tenor.com/aMdHQyej-hgAAAAC/atat%C3%BCrklisesindeokudumamagerizekaliyim-9a.gif`;
        case randomTo200 == 0:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/wgDTOc2-ObgAAAAM/retarded.gif`;
        case randomTo200 < 15:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/-8FN3600BesAAAAM/down-syndrome.gif`;
        case randomTo200 >= 16 && randomTo200 <= 69:
            return `${mensajeGeneral}${randomTo200} https://tenor.com/view/downs-down-syndrome-huh-look-back-what-gif-12361802`;
        case randomTo200 >= 70 && randomTo200 <= 100:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/iXq_oSpqtssAAAAd/sad-sad-face.gif`;
        case randomTo200 >= 101 && randomTo200 <= 150:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/kTX3PiTNHz8AAAAC/wojak-wojak-sunset.gif`;
        case randomTo200 >= 151 && randomTo200 <= 200:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/Mx9N3q-86OgAAAAM/big-brain-big-brain-wojak.gif`;
        default:
            return `${mensajeGeneral}${randomTo200} https://c.tenor.com/9ka4oY-LsQsAAAAd/confused-indian.gif`;
    }
}
let Games = class Games {
    simpleIq(command) {
        // @ts-ignore
        command.reply(switchIq());
    }
    simpleEconomia(command) {
        // @ts-ignore
        this.simpleIq(command.message);
    }
};
__decorate([
    Slash("iq"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Games.prototype, "simpleIq", null);
__decorate([
    SimpleCommand("iq"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Games.prototype, "simpleEconomia", null);
Games = __decorate([
    Discord()
], Games);
export { Games };
