import { fdir as FDir } from "fdir";
import { lstat } from "node:fs/promises";

const fdir = new FDir().withFullPaths();
const getFileSize = async (path: string) => (await lstat(path)).size;
const sumSizes = (current: number, size: number) => current + size;

export default async (path: string) => {
  const files = await fdir.crawl(path).withPromise();

  const promises = files.map(getFileSize) as Promise<number>[];

  const size = (await Promise.all(promises)).reduce(sumSizes, 0);

  return size;
};
