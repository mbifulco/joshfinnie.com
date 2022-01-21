import sharp from "sharp";
import glob from "glob";
import fs from "fs-extra";

let matches = glob.sync(`public/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1080;
const QUALITY = 90;

if (process.argv.length > 2) {
  matches = [];
  process.argv.slice(2).map((f) => {
    matches = [].concat(matches, glob.sync(`public/**/${f}`));
  });
}

console.log(matches);

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();
    if (info.width < MAX_WIDTH) {
      return;
    }
    const optimizedName = match.replace(/(\..+)$/, (_, ext) => `-optimized${ext}`);
    await stream.resize(MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(optimizedName);
    return fs.rename(optimizedName, match);
  })
);
