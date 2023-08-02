#!/user/bin/node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
// types
fs.readdir('image-to-convert', (error, files) => {
    if (error) {
        throw error;
    }
    else {
        files.forEach((file) => {
            const filePath = path.join(__dirname, `image-to-convert/${file}`);
            const fileName = path.parse(file).name;
            // convert to webp.
            sharp(fs.readFileSync(filePath))
                .toFormat('webp')
                .toFile(path.join(__dirname, `webp-images/${fileName}.webp`));
        });
    }
});
