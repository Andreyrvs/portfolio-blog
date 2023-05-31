import fs from "fs";
import path from "path";

export default function handleFiles() {
  const dirRelativeToPublicFolder = "mockups";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images: String[] = filenames.map((name) => name.replace(/\.png$/, ""));

  return images;
}
