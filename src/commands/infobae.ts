import type { CommandInteraction } from "discord.js";
import { Discord, SimpleCommand, Slash } from "discordx";
import fetch from "node-fetch";

@Discord()
export class Notice {
  @Slash("infobae")
  private async notices(interaction: CommandInteraction): Promise<void> {
    const response = await fetch(
      "https://infobae-api.herokuapp.com/api/infobae/economia"
    );
    const json: any = await response.json();
    await interaction.reply(json.link);
  }

  @SimpleCommand("economia")
  simpleNotice(command: any) {
    this.notices(command.message);
  }
}
