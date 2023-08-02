import { readdir } from 'fs';
import { join, parse } from 'path';
import sharp from 'sharp';

const imageDir = 'image-to-convert';
const outputDir = 'webp-images';

readdir(imageDir, (error, files) => {
	if (error) {
		throw error;
	} else {
		files.forEach((file) => {
			const filePath = join(imageDir, file);
			const fileName = parse(file).name;

			// Convert to webp asynchronously
			sharp(filePath)
				.toFormat('webp')
				.toFile(
					join(outputDir, `${fileName}.webp`),
					(err, info) => {
						if (err) {
							throw err;
						}
						console.log(`Converted ${fileName} to WebP`);
					},
				);
		});
	}
});
