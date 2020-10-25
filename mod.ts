import type { Player } from "saurus/player.ts"
import type { Server } from "saurus/server.ts"

export class MyServerPlugin {
  /**
   * Enable MyPlugin on the given server
   * @param server Server to enable the plugin on
   */
  constructor(
    readonly server: Server
  ) {
    console.log("MyPlugin enabled on server", server.name)
  }
}

export class MyPlayerPlugin {
  /**
   * Enable MyPlugin on the given player
   * @param player Player to enable the plugin on
   */
  constructor(
    readonly player: Player
  ) {
    console.log("MyPlugin enabled on player", player.name)
  }
}
