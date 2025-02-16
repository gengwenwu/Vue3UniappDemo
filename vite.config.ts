import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			// 自动导入的包
			imports: ["vue", "uni-app"]//,
			//    eslintrc: {
			//      enabled: true,
			//      filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
			//      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			//    }
			// ,
			//    dts: "./auto-import.d.ts",
		}),
	]
	// ,
	// css: {
	//   preprocessorOptions: {
	//     less: {
	//       additionalData: '@import "@/assets/style/var.less";', // 引入多个文件以；分割
	//     },
	//   },
	// },
	// server: {
	//   host: true,
	//   port: 9100,
	// },
});