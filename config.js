var map = {
	"rxjs": "node_modules/rxjs",
	"@angular/common": "node_modules/@angular/common",
	"@angular/compiler": "node_modules/@angular/compiler",
	"@angular/core": "node_modules/@angular/core",
	"@angular/platform-browser": "node_modules/@angular/platform-browser",
	"@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic",
	"@angular/router":"node_modules/@angular/router",
	"@angular/http":"node_modules/@angular/http",
	"ts": "node_modules/plugin-typescript/lib/plugin.js",
  "typescript": "node_modules/typescript/lib/typescript.js"
};
var packages = {
	"rxjs": { "defaultExtension": "js" },
	"@angular/common": { "main": "index.js", "defaultExtension": "js" },
	"@angular/compiler": { "main": "index.js", "defaultExtension": "js" },
	"@angular/core": { "main": "index.js", "defaultExtension": "js" },
	"@angular/router": { "main": "index.js", "defaultExtension": "js" },
	"@angular/http": { "main": "index.js", "defaultExtension": "js" },
	"@angular/platform-browser": { "main": "index.js", "defaultExtension": "js" },
	"@angular/platform-browser-dynamic": { "main": "index.js", "defaultExtension": "js" },
	"app": {
		main: 'main.ts',
		defaultExtension: 'ts'
	}
};

var config = {
	transpiler: 'typescript',
	typescriptOptions: {
		emitDecoratorMetadata: true
	},
	map: map,
	packages: packages
};

System.config(config);