/* eslint-disable no-undef */
import { getDirSize as FDS } from "fast-dir-size";
import _FFS from "fast-folder-size";
import GFS from "get-folder-size";
import FDirS from "../../dist/index.js";
import { getFolderSizeBin as GGFS } from "go-get-folder-size";

import { suite, complete, cycle, add } from "benny";
import { promisify } from "node:util";
import mri from "mri";
import { stat } from "node:fs/promises";
import { existsSync } from "node:fs";

const FFS = promisify(_FFS);

const defaultPath = "../test_folder";
const { path, min, max } = mri(process.argv.slice(2));

const config = { minTime: min || 3, maxTime: max || 3 };

const runSuites = async (path) => {
  await suite(
    `Get Directory Size: ${path}`,

    add("fdir-size", async () => await FDirS(path), config),

    add("fast-dir-size", async () => await FDS(path), config),

    add("get-folder-size", async () => await GFS.loose(path), config),

    add(
      "go-get-folder-size",
      async () => await GGFS(path, false, { loose: true }),
      config
    ),

    add("fast-folder-size", async () => await FFS(path), config),

    cycle(),
    complete()
  );
};

runSuites(
  existsSync(path) && (await stat(path)).isDirectory() ? path : defaultPath
);
