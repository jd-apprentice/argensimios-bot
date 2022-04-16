import type { CommandInteraction } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, Slash } from "discordx";
import fetch from "node-fetch";

@Discord()
export class Notice {
  @Slash("infobae")
  private async notices(
    interaction: CommandInteraction,
    topic: string
  ): Promise<void> {
    const response = await fetch(
      `https://infobae-api.herokuapp.com/api/infobae?topic=${topic}`
    );
    type Response = {
      lastmod: string;
      link: string;
    };
    const json: Response = await response.json();
    await interaction.reply(json.link);
  }

  @SimpleCommand("economia")
  simpleEconomia(command: SimpleCommandMessage): void {
    this.notices(command.message, "economia");
  }

  @SimpleCommand("ciencia")
  simpleCiencia(command: SimpleCommandMessage): void {
    this.notices(command.message, "ciencia");
  }

  @SimpleCommand("fotos")
  simpleFotos(command: SimpleCommandMessage): void {
    this.notices(command.message, "fotos");
  }

  @SimpleCommand("mundo")
  simpleMundo(command: SimpleCommandMessage): void {
    this.notices(command.message, "mundo");
  }

  @SimpleCommand("politica")
  simplePolitica(command: SimpleCommandMessage): void {
    this.notices(command.message, "politica");
  }
}
