import { readdirSync, statSync } from 'fs';
import path from 'path';

// Helper to determine if a path is a directory
const isDirectory = (fullPath: string): boolean => statSync(fullPath).isDirectory();

// Helper to check if a file should be ignored
const shouldIgnore = (entry: string): boolean => entry.endsWith('.test.ts') || entry === '.DS_Store';

// Helper to recursively process files and build the `exports` object
const buildExports = (dirPath: string, basePath = './'): Record<string, any> => {
	const entries = readdirSync(dirPath).map((entry) => ({
		fullPath: path.join(dirPath, entry),
		relativePath: path.join(basePath, entry),
		entry,
	}));

	// Process all files and folders in the current directory
	const filesExports = entries
		.filter(({ fullPath, entry }) => !isDirectory(fullPath) && !shouldIgnore(entry))
		.reduce((acc, { entry, relativePath }) => {
			const key = relativePath.replace(/\.ts$/, '').replace(/\\/g, '/'); // Adjust key for paths
			return {
				...acc,
				[key]: {
					import: `./dist/esm/${key}.js`,
					require: `./dist/cjs/${key}.js`,
					types: `./dist/esm/${key}.d.ts`,
				},
			};
		}, {});

	const foldersExports = entries
		.filter(({ fullPath }) => isDirectory(fullPath))
		.reduce(
			(acc, { fullPath, relativePath }) => ({
				...acc,
				...buildExports(fullPath, relativePath),
			}),
			{}
		);

	return { ...filesExports, ...foldersExports };
};

// Main function to generate the `exports` object
const generateExports = (rootDir: string): Record<string, any> => ({
	exports: buildExports(rootDir),
});

// Example usage
const folderPath = './filters'; // Replace with your source folder
const exportsObject = generateExports(folderPath);

console.log(JSON.stringify(exportsObject, null, 2));
