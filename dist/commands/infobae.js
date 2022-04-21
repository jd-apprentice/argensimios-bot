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
import fetch from "node-fetch";
let Notice = class Notice {
    async notices(interaction, topic) {
        const response = await fetch(`https://infobae-api.herokuapp.com/api/infobae?topic=${topic}`);
        const json = await response.json();
        await interaction.reply(json.link);
    }
    simpleEconomia(command) {
        // @ts-ignore
        this.notices(command.message, "economia");
    }
    simpleCiencia(command) {
        // @ts-ignore
        this.notices(command.message, "ciencia");
    }
    simpleFotos(command) {
        // @ts-ignore
        this.notices(command.message, "fotos");
    }
    simpleMundo(command) {
        // @ts-ignore
        this.notices(command.message, "mundo");
    }
    simplePolitica(command) {
        // @ts-ignore
        this.notices(command.message, "politica");
    }
};
__decorate([
    Slash("infobae"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, String]),
    __metadata("design:returntype", Promise)
], Notice.prototype, "notices", null);
__decorate([
    SimpleCommand("economia"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Notice.prototype, "simpleEconomia", null);
__decorate([
    SimpleCommand("ciencia"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Notice.prototype, "simpleCiencia", null);
__decorate([
    SimpleCommand("fotos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Notice.prototype, "simpleFotos", null);
__decorate([
    SimpleCommand("mundo"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Notice.prototype, "simpleMundo", null);
__decorate([
    SimpleCommand("politica"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], Notice.prototype, "simplePolitica", null);
Notice = __decorate([
    Discord()
], Notice);
export { Notice };
