import Layout from "../layouts/layout";
import { useQuery } from "@tanstack/react-query";
import { getModsList } from "../lib/client";
import { useStore } from "../providers/store/store.provider";
import { Loader } from "lucide-react";

type Props = {};

const DashboardView = ({}: Props) => {
  const { store } = useStore();
  const modsListQuery = useQuery({
    queryKey: ["mods-list"],
    queryFn: async () => {
      const modsList = await getModsList({ store });
      console.log({ modsList });
      return modsList;
    },
  });

  if (modsListQuery.isLoading) {
    return <Loader />;
  }

  if (modsListQuery.isError) {
    return <div>Erreur</div>;
  }

  return (
    <Layout>
      <div>
        {modsListQuery.data?.map((mod) => {
          return <div key={mod}>{mod}</div>;
        })}
      </div>
    </Layout>
  );
};

export default DashboardView;
