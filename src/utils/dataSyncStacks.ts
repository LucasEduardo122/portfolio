import postgresql from "../assets/imgs/stacks/postgresql.webp"
import gpt from "../assets/imgs/stacks/gpt.webp"
import notion from "../assets/imgs/stacks/notion.webp"
import figma from "../assets/imgs/stacks/figma.webp"
import spotify from "../assets/imgs/stacks/spotify.webp"
import vscode from "../assets/imgs/stacks/vscode.webp"
import tally from "../assets/imgs/stacks/tally.webp"
import edge from "../assets/imgs/stacks/edge.webp"

export const dataSyncStacks: any = {
    Postgresql() {
        return postgresql;
    },

    VSCode() {
        return vscode;
    },

    Figma() {
        return figma;
    },

    Spotify() {
        return spotify;
    },

    Tally() {
        return tally;
    },

    Notion() {
        return notion;
    },

    ChatGPT() {
        return gpt;
    },

    Edge() {
        return edge;
    }
} 