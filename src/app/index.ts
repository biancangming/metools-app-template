import "./assets/css/base.css"
import appEntry from "./src/index.vue"
import icon from "./assets/img/icon.png"
import { version } from "../../package.json"

export default appEntry

export const info = {
    version: version,
    name: "迷途小书童", // 应用名称
    enName: "metools", // 应用英文名称
    description: "hua an", // 应用描述
    author: "华安", // 作者
    icon: icon, // 图标
}