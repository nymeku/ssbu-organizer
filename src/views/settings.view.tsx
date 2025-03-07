import { useState } from "react";
import { Input } from "../components/ui/input";
import Layout from "../layouts/layout";
import { useStore } from "../providers/store/store.provider";
import { Button } from "../components/ui/button";
import { FolderOpen } from "lucide-react";
import { open } from "@tauri-apps/plugin-dialog";
import { updateModsPath } from "../lib/client";
import { Label } from "../components/ui/label";

type Props = {};

const SettingsView = ({}: Props) => {
  const { modsPath, store } = useStore();
  const [folder, setFolder] = useState(modsPath);

  const handleFolderSelect = async () => {
    const directory = await open({
      multiple: false,
      directory: true,
    });
    if (directory) {
      setFolder(directory);
      updateModsPath({
        store,
        path: directory,
      });
    }
  };

  return (
    <Layout>
      <div className='space-y-2 p-4 rounded-sm'>
        <div className='space-y-2'>
          <Label>Dossier des mods</Label>
          <div className='flex items-center space-x-2'>
            <Input
              type='text'
              value={folder}
              readOnly
              placeholder='Sélectionnez un dossier...'
              className='w-full'
            />
            <Button
              asChild
              variant='outline'
              onClick={() => handleFolderSelect()}
            >
              <label className='flex items-center cursor-pointer space-x-2'>
                <FolderOpen className='w-5 h-5' />
                <span>Parcourir</span>
                {/* <input type='file' hidden onChange={handleFolderSelect} /> */}
              </label>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsView;
