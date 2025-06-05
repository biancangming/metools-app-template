import "./assets/css/base.css"
import appEntry from "./src/index.vue"
import icon from "./assets/img/icon.png"
import { version } from "../../package.json"
export default {
    entry: appEntry,
    version: version,
    name: "迷途小书童",
    enName: "metools",
    description: "hua an",
    author: "华安",
    icon: icon,
}