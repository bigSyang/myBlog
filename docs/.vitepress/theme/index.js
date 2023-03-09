import DefaultTheme from "vitepress/theme";
import GlobalComponent from '../../../components/GlobalComponent.vue'

export default{
    ...DefaultTheme,
    enhanceApp({ app }) {
        // 全局注册组件
        app.component('GlobalComponent', GlobalComponent);
    }
}