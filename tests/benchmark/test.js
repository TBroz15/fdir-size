import { add, complete, cycle, suite } from "benny";
import FDirS from "../../dist/index.js";

const init = async () =>
  suite(
    "Test run fdir-size",

    add("Test Folder", async () => await FDirS("../test_folder")),

    cycle(),
    complete()
  );

init();
