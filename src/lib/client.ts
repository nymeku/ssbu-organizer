import { readDir } from "@tauri-apps/plugin-fs";
import { Store } from "@tauri-apps/plugin-store";

export async function updateModsPath({
  store,
  path,
}: {
  store: Store | null;
  path: string;
}) {
  if (!store) {
    throw Error("no store");
  }
  return await store.set("mods_path", path);
}

export async function getModsPath({
  store,
}: {
  store: Store | null;
}): Promise<string> {
  if (!store) {
    throw Error("no store");
  }
  return (await store.get("mods_path")) as string;
}

export async function getModsList({ store }: { store: Store | null }) {
  if (!store) {
    throw Error("no store");
  }
  const folderPath = await getModsPath({ store });
  try {
    const entries = await readDir(folderPath);
    console.log({ entries });
    const folders = entries
      .filter((entry) => entry.isDirectory)
      .map((folder) => folder.name || "");
    return folders;
  } catch (error) {
    console.error("Erreur lors de la lecture du dossier :", error);
    return [];
  }
}
